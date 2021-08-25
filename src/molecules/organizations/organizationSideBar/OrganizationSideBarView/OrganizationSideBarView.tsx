import { AddIcon } from "@chakra-ui/icons";
import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
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
        href={paths.organization(organizationId, OrganizationTab.workflows)}
        nextProps={{ shallow: true }}
      >
        <Text pl={3} fontSize="sm">
          {text("sideBarWorkflows")}
        </Text>
      </Link>

      <Link
        href={paths.organization(organizationId, OrganizationTab.members)}
        nextProps={{ shallow: true }}
      >
        <Text pl={3} fontSize="sm">
          {text("sideBarMembers")}
        </Text>
      </Link>
      <OrganizationRoleGuard roles={["mod", "owner"]}>
        <Link
          href={paths.organization(organizationId, OrganizationTab.settings)}
          nextProps={{ shallow: true }}
        >
          <Text pl={3} fontSize="sm">
            {text("sideBarSettings")}
          </Text>
        </Link>
      </OrganizationRoleGuard>

      <Heading size="sm" pt={4}>
        {text("sideBarTemplates")}
      </Heading>
      <Link
        href={paths.organization(organizationId, OrganizationTab.newTemplate)}
        nextProps={{ shallow: true }}
      >
        <HStack pl={3}>
          <AddIcon />
          <Text fontSize="sm">{text("sideBarNewTemplate")}</Text>
        </HStack>
      </Link>
      <Link
        href={paths.organization(organizationId, OrganizationTab.templates)}
        nextProps={{ shallow: true }}
      >
        <Text pl={3} fontSize="sm">
          {text("sideBarAllTemplates")}
        </Text>
      </Link>

      <Heading size="sm" pt={4}>
        {text("sideBarTeams")}
      </Heading>
      <Link
        href={paths.organization(organizationId, OrganizationTab.newTeam)}
        nextProps={{ shallow: true }}
      >
        <HStack pl={3}>
          <AddIcon />
          <Text fontSize="sm">{text("sideBarAddTeam")}</Text>
        </HStack>
      </Link>
      <Link
        href={paths.organization(organizationId, OrganizationTab.teams)}
        nextProps={{ shallow: true }}
      >
        <Text pl={3} fontSize="sm">
          {text("sideBarAllTeams")}
        </Text>
      </Link>
    </VStack>
  );
};

export default OrganizationSideBarView;
