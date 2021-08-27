import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import React from "react";
import { BreadcrumbLink } from "../../../../atoms";
import {
  OrganizationTab,
  paths,
  useText,
  WorkflowTab,
} from "../../../../utils";
import { getTabText } from "./WorkflowHeaderView.utils";

export type WorkflowHeaderViewProps = {
  organizationId: number;
  workflowId: number;
  tab: WorkflowTab | null;
};

const WorkflowHeaderView = ({
  organizationId,
  tab,
  workflowId,
}: WorkflowHeaderViewProps): JSX.Element => {
  const text = useText();

  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href={paths.dashboard()}>
          {text("navigationDashboard")}
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href={paths.organization(organizationId)}>
          {text("navigationOrganizations")}
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink
          href={paths.organization(organizationId, OrganizationTab.workflows)}
        >
          {text("navigationWorkflows")}
        </BreadcrumbLink>
      </BreadcrumbItem>
      {tab && (
        <BreadcrumbItem>
          <BreadcrumbLink
            href={paths.workflow(organizationId, workflowId, tab)}
            nextProps={{ shallow: true }}
          >
            {getTabText(tab, text)}
          </BreadcrumbLink>
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  );
};

export default WorkflowHeaderView;
