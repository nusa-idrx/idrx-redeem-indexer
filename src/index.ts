import { ponder } from "ponder:registry";
import { handleBurnWithAccountNumberEvent } from "./events/handleBurnWithAccountNumberEvent";

ponder.on("ERC20_IDRX:BurnWithAccountNumber", async ({ event, context }) => {
  await handleBurnWithAccountNumberEvent(event, context);
});
