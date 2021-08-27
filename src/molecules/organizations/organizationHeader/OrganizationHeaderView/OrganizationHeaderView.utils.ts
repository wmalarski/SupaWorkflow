import { OrganizationTab, UseTextFnc } from "../../../../utils";

export const getTabText = (
  tab: OrganizationTab,
  text: UseTextFnc
): string | null => {
  switch (tab) {
    case OrganizationTab.members:
      return text("navigationMembers");
    case OrganizationTab.newTeam:
      return text("navigationNewTeam");
    case OrganizationTab.newTemplate:
      return text("navigationNewTemplate");
    case OrganizationTab.settings:
      return text("navigationSettings");
    case OrganizationTab.teams:
      return text("navigationTeams");
    case OrganizationTab.templates:
      return text("navigationTemplates");
    case OrganizationTab.workflows:
      return text("navigationWorkflows");
    default:
      return null;
  }
};
