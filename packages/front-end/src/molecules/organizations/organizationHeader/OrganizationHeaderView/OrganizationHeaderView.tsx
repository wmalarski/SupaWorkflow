import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { BreadcrumbLink } from "atoms";
import React from "react";
import { OrganizationTab, paths, useText } from "utils";
import { getTabText } from "./OrganizationHeaderView.utils";

export type OrganizationHeaderViewProps = {
  organizationId: number;
  tab: OrganizationTab | null;
};

const OrganizationHeaderView = ({
  organizationId,
  tab,
}: OrganizationHeaderViewProps): React.ReactElement => {
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
        <BreadcrumbLink
          href={paths.organization(organizationId)}
          nextProps={{ shallow: true }}
        >
          {text("navigationOrganization")}
        </BreadcrumbLink>
      </BreadcrumbItem>
      {tab && (
        <BreadcrumbItem>
          <BreadcrumbLink
            href={paths.organization(organizationId, tab)}
            nextProps={{ shallow: true }}
          >
            {getTabText(tab, text)}
          </BreadcrumbLink>
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  );
};

export default OrganizationHeaderView;
