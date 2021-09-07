import { OrganizationTab, UseTextFnc } from "../../../../utils";

export const getTabText = (
  tab: OrganizationTab,
  text: UseTextFnc
): string | null => {
  switch (tab) {
    case OrganizationTab.members:
      return text("navigationMembers");
    case OrganizationTab.newTeam:
      return text("navigationTeamNew");
    case OrganizationTab.newTemplate:
      return text("navigationTemplateNew");
    case OrganizationTab.settings:
      return text("navigationSettings");
    case OrganizationTab.teams:
      return text("navigationTeams");
    case OrganizationTab.templates:
      return text("navigationTemplates");
    case OrganizationTab.workflows:
      return text("navigationWorkflows");
  }
};
