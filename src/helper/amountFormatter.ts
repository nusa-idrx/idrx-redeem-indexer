import { formatUnits } from "viem";
import { chain } from "../../ponder.chains";

export const amountFormatter = (amount: bigint, chainId: number) => {
  if (chainId == chain["polygon"].id || chainId == chain["bsc"].id) {
    return formatUnits(BigInt(amount), 0);
  } else {
    return formatUnits(BigInt(amount), 2);
  }
};
