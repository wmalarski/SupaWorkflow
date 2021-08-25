import { Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "../../../../atoms";
import { OrganizationRoleGuard, paths, useText } from "../../../../utils";
import { OrganizationTab } from "../../../../utils/routing/types";

export type OrganizationSideBarViewProps = {
  organizationId: number;
};

const OrganizationSideBarView = ({
  organizationId,
}: OrganizationSideBarViewProps): JSX.Element => {
  const text = useText();

  return (
    <VStack align="start" spacing={5}>
      <Heading size="sm">{text("sideBarOrganization")}</Heading>
      <Link
        href={paths.organization(organizationId, OrganizationTab.dashboard)}
        nextProps={{ shallow: true }}
      >
        <Text pl={3} fontSize="sm">
          {text("sideBarOrganizationDashboard")}
        </Text>
      </Link>
      <Link
        href={paths.organization(organizationId, OrganizationTab.templates)}
        nextProps={{ shallow: true }}
      >
        <Text pl={3} fontSize="sm">
          {text("sideBarTemplates")}
        </Text>
      </Link>
      <Link
        href={paths.organization(organizationId, OrganizationTab.workflows)}
        nextProps={{ shallow: true }}
      >
        <Text pl={3} fontSize="sm">
          {text("sideBarWorkflows")}
        </Text>
      </Link>

      <Heading size="sm" pt={4}>
        {text("sideBarConfiguration")}
      </Heading>
      <Link
        href={paths.organization(organizationId, OrganizationTab.members)}
        nextProps={{ shallow: true }}
      >
        <Text pl={3} fontSize="sm">
          {text("sideBarMembers")}
        </Text>
      </Link>
      <Link
        href={paths.organization(organizationId, OrganizationTab.teams)}
        // nextProps={{ shallow: true }}
      >
        <Text pl={3} fontSize="sm">
          {text("sideBarTeams")}
        </Text>
      </Link>
      <OrganizationRoleGuard roles={["mod", "owner"]}>
        <Link
          href={paths.organization(organizationId, OrganizationTab.settings)}
          // nextProps={{ shallow: true }}
        >
          <Text pl={3} fontSize="sm">
            {text("sideBarSettings")}
          </Text>
        </Link>
      </OrganizationRoleGuard>
    </VStack>
  );
};

export default OrganizationSideBarView;
