import {
  burnWithAccountNumber
} from "ponder:schema";
import { getChainName } from "../helper/chainName";
import { amountFormatter } from "../helper/amountFormatter";
import { timestampFormatter } from "../helper/timestampFormatter";

export const handleBurnWithAccountNumberEvent = async (
  event: any,
  context: any
) => {
  const chainName = getChainName(context.chain.id);
  await context.db.insert(burnWithAccountNumber).values({
    id: event.id,
    chain: chainName,
    user: event.args._user,
    amount: event.args.amount,
    amount_formatted: amountFormatter(event.args.amount, context.chain.id),
    hashedAccountNumber: event.args.hashedAccountNumber,
    timestamp: event.block.timestamp,
    datetime: timestampFormatter(event.block.timestamp),
    transactionHash: event.transaction.hash,
  });
};
