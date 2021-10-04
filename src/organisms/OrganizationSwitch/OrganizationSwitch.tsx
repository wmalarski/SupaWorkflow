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
} from "molecules";
import React from "react";
import { useOrganizationContext } from "services";
import { ModalLayer } from "templates";
import {
  OrganizationDialog,
  OrganizationTab,
  paths,
  useDialogParam,
  useTabParam,
} from "utils";
import OrganizationLayout from "./OrganizationLayout";

const OrganizationSwitch = (): React.ReactElement | null => {
  const tab = useTabParam(OrganizationTab);
  const dialog = useDialogParam(OrganizationDialog);

  const organization = useOrganizationContext();

  const resetUrl = paths.organization({ organizationId: organization.id, tab });

  return (
    <>
      <OrganizationLayout>
        {tab === OrganizationTab.members && <AddOrganizationMember />}
        {tab === OrganizationTab.members && <OrganizationMembers />}
        {tab === OrganizationTab.settings && <OrganizationSettings />}
        {tab === OrganizationTab.workflows && <WorkflowsList />}
        {tab === OrganizationTab.templates && <TemplatesList />}
        {tab === OrganizationTab.teams && <OrganizationTeams />}
        {!tab && <OrganizationDashboard />}
      </OrganizationLayout>
      <ModalLayer isOpen={!!dialog} resetUrl={resetUrl}>
        {dialog === OrganizationDialog.newTemplate && <CreateTemplate />}
        {dialog === OrganizationDialog.newTeam && <NewOrganizationTeam />}
      </ModalLayer>
    </>
  );
};

export default OrganizationSwitch;
