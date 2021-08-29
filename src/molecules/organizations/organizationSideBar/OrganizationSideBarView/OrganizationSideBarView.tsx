import { AddIcon } from "@chakra-ui/icons";
import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "../../../../atoms";
import {
  OrganizationRoleGuard,
  OrganizationTab,
  paths,
  useText,
} from "../../../../utils";

export type OrganizationSideBarViewProps = {
  organizationId: number;
};

const OrganizationSideBarView = ({
  organizationId,
}: OrganizationSideBarViewProps): JSX.Element => {
  const text = useText();

  return (
    <VStack align="start" spacing={5}>
      <Heading size="sm">{text("navigationOrganization")}</Heading>
      <Link
        href={paths.organization(organizationId)}
        nextProps={{ shallow: true }}
      >
        <Text pl={3} fontSize="sm">
          {text("navigationOrganizationDashboard")}
        </Text>
      </Link>

      <Link
        href={paths.organization(organizationId, OrganizationTab.workflows)}
        nextProps={{ shallow: true }}
      >
        <Text pl={3} fontSize="sm">
          {text("navigationWorkflows")}
        </Text>
      </Link>

      <Link
        href={paths.organization(organizationId, OrganizationTab.members)}
        nextProps={{ shallow: true }}
      >
        <Text pl={3} fontSize="sm">
          {text("navigationMembers")}
        </Text>
      </Link>
      <OrganizationRoleGuard roles={["mod", "owner"]}>
        <Link
          href={paths.organization(organizationId, OrganizationTab.settings)}
          nextProps={{ shallow: true }}
        >
          <Text pl={3} fontSize="sm">
            {text("navigationSettings")}
          </Text>
        </Link>
      </OrganizationRoleGuard>

      <Heading size="sm" pt={4}>
        {text("navigationTemplates")}
      </Heading>
      <Link
        href={paths.organization(organizationId, OrganizationTab.newTemplate)}
        nextProps={{ shallow: true }}
      >
        <HStack pl={3}>
          <AddIcon />
          <Text fontSize="sm">{text("navigationTemplateNew")}</Text>
        </HStack>
      </Link>
      <Link
        href={paths.organization(organizationId, OrganizationTab.templates)}
        nextProps={{ shallow: true }}
      >
        <Text pl={3} fontSize="sm">
          {text("navigationTemplatesAll")}
        </Text>
      </Link>

      <Heading size="sm" pt={4}>
        {text("navigationTeams")}
      </Heading>
      <Link
        href={paths.organization(organizationId, OrganizationTab.newTeam)}
        nextProps={{ shallow: true }}
      >
        <HStack pl={3}>
          <AddIcon />
          <Text fontSize="sm">{text("navigationTeamNew")}</Text>
        </HStack>
      </Link>
      <Link
        href={paths.organization(organizationId, OrganizationTab.teams)}
        nextProps={{ shallow: true }}
      >
        <Text pl={3} fontSize="sm">
          {text("navigationTeamsAll")}
        </Text>
      </Link>
    </VStack>
  );
};

export default OrganizationSideBarView;
