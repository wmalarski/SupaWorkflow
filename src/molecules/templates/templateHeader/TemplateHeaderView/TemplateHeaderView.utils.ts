import { TemplateTab, UseTextFnc } from "utils";

export const getTabText = (
  tab: TemplateTab,
  text: UseTextFnc
): string | null => {
  switch (tab) {
    case TemplateTab.edit:
      return text("navigationTemplateEdit");
  }
};
