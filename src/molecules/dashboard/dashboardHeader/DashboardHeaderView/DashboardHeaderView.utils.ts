import { DashboardTab, UseTextFnc } from "utils";

export const getTabText = (
  tab: DashboardTab,
  text: UseTextFnc
): string | null => {
  switch (tab) {
    case DashboardTab.profile:
      return text("navigationProfile");
  }
};
