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
import { OrganizationTab, useTabParam } from "../../utils";
import OrganizationLayout from "./OrganizationLayout";

const OrganizationSwitch = (): React.ReactElement | null => {
  const tab = useTabParam(OrganizationTab);

  switch (tab) {
    case OrganizationTab.members:
      return (
        <OrganizationLayout>
          <AddOrganizationMember />
          <OrganizationMembers />
        </OrganizationLayout>
      );
    case OrganizationTab.settings:
      return (
        <OrganizationLayout>
          <OrganizationSettings />
        </OrganizationLayout>
      );
    case OrganizationTab.workflows:
      return (
        <OrganizationLayout>
          <WorkflowsList />
        </OrganizationLayout>
      );
    case OrganizationTab.newTemplate:
      return (
        <OrganizationLayout isForm>
          <CreateTemplate />
        </OrganizationLayout>
      );
    case OrganizationTab.templates:
      return (
        <OrganizationLayout>
          <TemplatesList />
        </OrganizationLayout>
      );
    case OrganizationTab.newTeam:
      return (
        <OrganizationLayout isForm>
          <NewOrganizationTeam />
        </OrganizationLayout>
      );
    case OrganizationTab.teams:
      return (
        <OrganizationLayout>
          <OrganizationTeams />
        </OrganizationLayout>
      );
    default:
      return (
        <OrganizationLayout>
          <OrganizationDashboard />
        </OrganizationLayout>
      );
  }
};

export default OrganizationSwitch;
