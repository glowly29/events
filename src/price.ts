import { Program } from "@coral-xyz/anchor";
import * as anchor from "@coral-xyz/anchor";

import { Connection, PublicKey } from "@solana/web3.js";
import { CRAZY_STATE_SEED, GLOBAL_SEED } from ".";
import { AMM } from "./amm";
import { CrazymemeSol } from "./idl/crazymeme_sol";

export async function getBuyPrice(
  program: Program<CrazymemeSol>,
  mintAddress: PublicKey,
  tokenAmount: bigint
): Promise<bigint> {
  const [crazyStatePDA] = PublicKey.findProgramAddressSync(
    [Buffer.from(CRAZY_STATE_SEED), mintAddress.toBuffer()],
    program.programId
  );
  const crazyState = await program.account.crazyState.fetch(crazyStatePDA);
  logState(crazyState);

  const slotNow = await program.provider.connection.getSlot();
  const blockTimeNow = await program.provider.connection.getBlockTime(slotNow);
  console.log("block time: ", blockTimeNow);

  if (blockTimeNow == null) {
    return BigInt(0);
  }

  const diff = BigInt(blockTimeNow) - BigInt(crazyState.lastUpdateTime.toString());
  console.log('diff: ', diff);

  const numTimes = diff / BigInt(crazyState.tokenReleaseTick.toString());
  console.log('numTimes: ', numTimes);

  const tokenUnlockUtilNow = numTimes * BigInt(crazyState.tokenReleasePerTime.toString());
  console.log('tokenUnlockUtilNow: ', tokenUnlockUtilNow);

  const amm = new AMM(BigInt(crazyState.solReserves.toString()), BigInt(crazyState.tokenReserves.toString()));
  amm.updateTokenReserves(new anchor.BN(tokenUnlockUtilNow));

  let solAmount = amm.getBuyPrice(tokenAmount);

  return solAmount;
}

const logState = (state: any) => {
  console.log("solReserves: ", state.solReserves.toString());
  console.log("tokenReserves: ", state.tokenReserves.toString());
  console.log("tokenLocked: ", state.tokenLocked.toString());
  console.log("lastUpdateTime: ", state.lastUpdateTime.toString());
  console.log("startTime: ", state.startTime.toString());
  console.log("auctionPeriod: ", state.auctionPeriod.toString());
  console.log("tokenReleaseTick: ", state.tokenReleaseTick.toString());
  console.log("tokenReleasePerTime: ", state.tokenReleasePerTime.toString());
};
