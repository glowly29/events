import { CrazymemeSol, IDL } from "./idl/crazymeme_sol";
import { AnchorProvider, BN, Program } from "@coral-xyz/anchor";
import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
} from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import { getTransactionEvents } from "./events";
import { AMM } from "./amm";
import { getBuyPrice } from "./price";
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";

// Initialize connection to the Solana devnet
const connection = new Connection("https://rpc.ankr.com/solana_devnet");
const CRAZYMEME_PROGRAM_ID = new PublicKey(
  "J3GRGoeGism28nQeQTxFxcA9tbBDdG1hRsgqVm8mMbfC"
);

const authority = anchor.web3.Keypair.fromSecretKey(
  Uint8Array.from([
    21, 21, 67, 255, 79, 126, 27, 118, 154, 46, 185, 76, 113, 140, 171, 18,
    232, 222, 215, 46, 186, 206, 165, 137, 136, 141, 91, 252, 97, 125, 90, 32,
    168, 242, 53, 253, 141, 165, 12, 126, 138, 128, 97, 89, 199, 122, 181, 93,
    149, 65, 251, 180, 82, 250, 71, 149, 202, 59, 38, 238, 149, 184, 241, 17,
  ])
);

const wallet = new NodeWallet(authority);
const provider = new AnchorProvider(
  connection,
  wallet,
  AnchorProvider.defaultOptions()
);
const program = new Program<CrazymemeSol>(
  IDL,
  CRAZYMEME_PROGRAM_ID.toBase58(),
  provider
);

const exampleMint = new PublicKey(
  "4NWqjPFwbUX6gDEr6vBnutuvPa71VDvsG3ndhWdEETwH"
);

export const GLOBAL_SEED = "global";
export const CRAZY_STATE_SEED = "crazy-state";

const [globalPDA] = PublicKey.findProgramAddressSync(
  [Buffer.from(GLOBAL_SEED)],
  program.programId
);
console.log("global PDA: ", globalPDA.toString());

type Event = anchor.IdlEvents<(typeof program)["idl"]>;

// Function to get all signatures from a program ID
async function getEventsForProgram(
  connection: Connection,
  programId: PublicKey,
  latestSignature: string | null,
  limit: number = 100
) {
  const options = {
    limit: limit,
    before: latestSignature || undefined,
  };
  try {
    const signatures = await connection.getSignaturesForAddress(
      programId,
      options
    );
    const allEvents = [];
    for (let i = 0; i < signatures.length; i++) {
      const signature = signatures[i];

      const txResponse = await connection.getTransaction(signature.signature, {
        maxSupportedTransactionVersion: 0,
        commitment: "confirmed",
      });

      const events = getTransactionEvents(program, txResponse);
      for (let j = 0; j < events.length; j++) {
        const event = events[j];
        allEvents.push({
          name: event.name,
          data: event.data,
        });
      }
    }
    return allEvents;
  } catch (error) {
    console.error("Error fetching signatures:", error);
    return [];
  }
}

async function testGetPrice(program: Program<CrazymemeSol>) {
  const [crazyStatePDA] = PublicKey.findProgramAddressSync(
    [Buffer.from(CRAZY_STATE_SEED), exampleMint.toBuffer()],
    program.programId
  );
  let tokenAmount = 100_000 * 10 ** Number(6);
  let solAmount = 1 * LAMPORTS_PER_SOL;

  let buyPrice = await program.methods
    .getBuyPrice(new BN(solAmount))
    .accounts({
      mint: exampleMint,
      crazyState: crazyStatePDA,
    })
    .view();

  console.log("buy price: ", buyPrice.toString());

  let sellPrice = await program.methods
    .getSellPrice(new BN(tokenAmount.toString()))
    .accounts({
      mint: exampleMint,
      crazyState: crazyStatePDA,
    })
    .view();

  console.log("sell price: ", sellPrice.toString());
}

// Example usage
(async () => {
  // const events = await getEventsForProgram(
  //   connection,
  //   CRAZYMEME_PROGRAM_ID,
  //   ""
  // );
  // console.log("events:", events);

  // const price = await getBuyPrice(program, exampleMint, BigInt(100000_000_000));
  // console.log("price: ", price);
  await testGetPrice(program);
})();

interface EventData {
  name: string;
  data: any;
}
