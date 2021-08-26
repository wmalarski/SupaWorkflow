import React from "react";
import {
  AddOrganizationMember,
  CreateTemplate,
  NewOrganizationTeam,
  OrganizationDashboard,
  OrganizationMembers,
  OrganizationSettings,
  OrganizationTeams,
  TemplatesList,
  WorkflowsList,
} from "../../molecules";
import { OrganizationTab } from "../../utils";

export type OrganizationSwitchProps = {
  tab: OrganizationTab | null;
};

const OrganizationSwitch = ({
  tab,
}: OrganizationSwitchProps): JSX.Element | null => {
  switch (tab) {
    case OrganizationTab.members:
      return (
        <>
          <AddOrganizationMember />
          <OrganizationMembers />
        </>
      );
    case OrganizationTab.settings:
      return <OrganizationSettings />;
    case OrganizationTab.workflows:
      return <WorkflowsList />;
    case OrganizationTab.newTemplate:
      return <CreateTemplate />;
    case OrganizationTab.templates:
      return <TemplatesList />;
    case OrganizationTab.newTeam:
      return <NewOrganizationTeam />;
    case OrganizationTab.teams:
      return <OrganizationTeams />;
    default:
      return <OrganizationDashboard />;
  }
};

export default OrganizationSwitch;
