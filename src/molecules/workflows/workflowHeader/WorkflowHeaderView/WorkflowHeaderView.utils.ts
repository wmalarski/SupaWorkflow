import { UseTextFnc, WorkflowTab } from "../../../../utils";

export const getTabText = (
  tab: WorkflowTab,
  text: UseTextFnc
): string | null => {
  switch (tab) {
    case WorkflowTab.edit:
      return text("navigationEditWorkflow");
  }
};
