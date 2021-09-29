import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { BreadcrumbLink } from "atoms";
import React from "react";
import { OrganizationTab, paths, useText, WorkflowTab } from "utils";
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
}: WorkflowHeaderViewProps): React.ReactElement => {
  const text = useText();

  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href={paths.home}>
          {text("navigationHome")}
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href={paths.dashboard()}>
          {text("navigationDashboard")}
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href={paths.organization({ organizationId })}>
          {text("navigationOrganization")}
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink
          href={paths.organization({
            organizationId,
            tab: OrganizationTab.workflows,
          })}
        >
          {text("navigationWorkflows")}
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink
          href={paths.workflow({ organizationId, workflowId })}
          nextProps={{ shallow: true }}
        >
          {text("navigationWorkflow")}
        </BreadcrumbLink>
      </BreadcrumbItem>
      {tab && (
        <BreadcrumbItem>
          <BreadcrumbLink
            href={paths.workflow({
              organizationId,
              workflowId,
              tab,
            })}
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
