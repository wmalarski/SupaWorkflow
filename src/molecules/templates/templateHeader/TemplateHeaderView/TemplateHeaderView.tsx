import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { BreadcrumbLink } from "atoms";
import React from "react";
import { OrganizationTab, paths, TemplateTab, useText } from "utils";
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
}: TemplateHeaderViewProps): React.ReactElement => {
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
            tab: OrganizationTab.templates,
          })}
        >
          {text("navigationTemplates")}
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink
          href={paths.template({ organizationId, templateId })}
          nextProps={{ shallow: true }}
        >
          {text("navigationTemplate")}
        </BreadcrumbLink>
      </BreadcrumbItem>
      {tab && (
        <BreadcrumbItem>
          <BreadcrumbLink
            href={paths.template({
              organizationId,
              templateId,
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

export default TemplateHeaderView;
