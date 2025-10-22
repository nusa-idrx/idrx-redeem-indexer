import { onchainTable } from "ponder";

export const burnWithAccountNumber = onchainTable(
  "burn_with_account_number",
  (t) => ({
    id: t.text().primaryKey(),
    chain: t.text().notNull(),
    user: t.hex().notNull(),
    amount: t.bigint(),
    amount_formatted: t.real(),
    hashedAccountNumber: t.text(),
    timestamp: t.bigint(),
    datetime: t.text().notNull(),
    transactionHash: t.text(),
  })
);
