import { CrazymemeSol, IDL } from "./idl/crazymeme_sol";
import { AnchorProvider, Program } from "@coral-xyz/anchor";
import { Connection, PublicKey } from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import { getTransactionEvents } from "./events";

// Initialize connection to the Solana devnet
const connection = new Connection("https://rpc.ankr.com/solana_devnet");
const CRAZYMEME_PROGRAM_ID = new PublicKey(
  "JBHnGuqyTxwbnpWiTjRqydkwSRYJFcQnwUQnLfesdRG9"
);

const provider = new AnchorProvider(
  connection,
  {} as any,
  AnchorProvider.defaultOptions()
);

const program = new Program<CrazymemeSol>(
  IDL,
  CRAZYMEME_PROGRAM_ID.toBase58(),
  provider
);

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

// Example usage
(async () => {
  const events = await getEventsForProgram(
    connection,
    CRAZYMEME_PROGRAM_ID,
    ""
  );
  console.log("events:", events);
})();

interface EventData {
  name: string;
  data: any;
}
