import { TemplateTab, UseTextFnc } from "utils";

export const getTabText = (
  tab: TemplateTab,
  text: UseTextFnc
): string | null => {
  switch (tab) {
    case TemplateTab.new:
      return text("navigationNewWorkflow");
    case TemplateTab.edit:
      return text("navigationTemplateEdit");
  }
};
