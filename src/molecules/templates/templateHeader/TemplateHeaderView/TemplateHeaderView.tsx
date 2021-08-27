import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import React from "react";
import { BreadcrumbLink } from "../../../../atoms";
import {
  OrganizationTab,
  paths,
  TemplateTab,
  useText,
} from "../../../../utils";
import { getTabText } from "./TemplateHeaderView.utils";

export type TemplateHeaderViewProps = {
  organizationId: number;
  templateId: number;
  tab: TemplateTab | null;
};

const TemplateHeaderView = ({
  organizationId,
  tab,
  templateId,
}: TemplateHeaderViewProps): JSX.Element => {
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
          href={paths.organization(organizationId, OrganizationTab.templates)}
        >
          {text("navigationWorkflows")}
        </BreadcrumbLink>
      </BreadcrumbItem>
      {tab && (
        <BreadcrumbItem>
          <BreadcrumbLink
            href={paths.template(organizationId, templateId, tab)}
            nextProps={{ shallow: true }}
          >
            {getTabText(tab, text)}
          </BreadcrumbLink>
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  );
};

export default TemplateHeaderView;
