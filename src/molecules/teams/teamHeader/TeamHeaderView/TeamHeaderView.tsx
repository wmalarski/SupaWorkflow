import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import React from "react";
import { BreadcrumbLink } from "../../../../atoms";
import { OrganizationTab, paths, useText } from "../../../../utils";

export type TeamHeaderViewProps = {
  teamId: number;
  organizationId: number;
};

const TeamHeaderView = ({
  teamId,
  organizationId,
}: TeamHeaderViewProps): JSX.Element => {
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
          href={paths.organization(organizationId, OrganizationTab.teams)}
        >
          {text("navigationTeams")}
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink
          href={paths.team(organizationId, teamId)}
          nextProps={{ shallow: true }}
        >
          {text("navigationTeam")}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default TeamHeaderView;
