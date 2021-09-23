import { Message } from "@supa-workflow/services";
import { WriteTransaction } from "replicache";
import repKeys from "./repKeys";

const mutators = {
  putMessage: (
    tx: WriteTransaction,
    args: Omit<Message, "deleted" | "updated_at">
  ): void => {
    tx.put(
      repKeys.message({
        id: args.id,
        templateId: args.template_id,
        workflowId: args.workflow_id,
      }),
      args
    );
  },
  delMessage: (
    tx: WriteTransaction,
    args: Omit<Message, "deleted" | "updated_at">
  ): void => {
    tx.del(
      repKeys.message({
        id: args.id,
        templateId: args.template_id,
        workflowId: args.workflow_id,
      })
    );
  },
};

export default mutators;
