export type TradeResult = {
  tokenAmount: bigint;
  solAmount: bigint;
};

export class AMM {
  constructor(public solReserves: bigint, public tokenReserves: bigint) {}

  getBuyPrice(tokens: bigint): bigint {
    if (tokens <= 0 || tokens > this.tokenReserves) {
      return BigInt(-1);
    }
    console.log("tokens: ", tokens);
    const k = this.solReserves * this.tokenReserves;
    console.log("k: ", k);
    const newTokenReserves = this.tokenReserves - tokens;
    console.log("newTokenReserves: ", newTokenReserves);
    const newSolReserves = k / newTokenReserves;
    console.log("newSolReserves: ", newSolReserves);
    const solAmount = newSolReserves - this.solReserves;
    console.log("solAmount: ", solAmount);
    return solAmount;
  }

  applyBuy(tokenAmount: bigint): TradeResult {
    const finalTokenAmount =
      tokenAmount > this.tokenReserves ? this.tokenReserves : tokenAmount;
    const solAmount = this.getBuyPrice(finalTokenAmount);

    this.tokenReserves = this.tokenReserves - finalTokenAmount;
    this.solReserves = this.solReserves + solAmount;
    return {
      tokenAmount: finalTokenAmount,
      solAmount: solAmount,
    };
  }

  applySell(tokenAmount: bigint): TradeResult {
    const solAmount = this.getSellPrice(tokenAmount);
    this.solReserves = this.solReserves - solAmount;
    this.tokenReserves = this.tokenReserves + tokenAmount;
    return {
      tokenAmount: tokenAmount,
      solAmount: solAmount,
    };
  }

  getSellPrice(tokens: bigint): bigint {
    if (tokens <= 0 && tokens > this.tokenReserves) {
      return BigInt(0);
    }
    const k = this.solReserves * this.tokenReserves;
    const newTokenReserves = this.tokenReserves - tokens;
    const newSolReserves = k / newTokenReserves;
    const solAmount = this.solReserves - newSolReserves;
    return solAmount;
  }

  updateTokenReserves(amount: bigint) {
    this.tokenReserves += amount;
  }
}
