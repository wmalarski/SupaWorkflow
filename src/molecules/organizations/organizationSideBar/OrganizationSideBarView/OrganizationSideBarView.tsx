import { Heading, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { OrganizationRoleGuard, paths, useText } from "../../../../utils";

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
      <Link href={paths.organization(organizationId)}>
        <Text pl={3} fontSize="sm">
          {text("sideBarOrganizationDashboard")}
        </Text>
      </Link>
      <Link href={paths.templates(organizationId)}>
        <Text pl={3} fontSize="sm">
          {text("sideBarTemplates")}
        </Text>
      </Link>
      <Link href={paths.workflows(organizationId)}>
        <Text pl={3} fontSize="sm">
          {text("sideBarWorkflows")}
        </Text>
      </Link>

      <Heading size="sm" pt={4}>
        {text("sideBarConfiguration")}
      </Heading>
      <Link href={paths.members(organizationId)}>
        <Text pl={3} fontSize="sm">
          {text("sideBarMembers")}
        </Text>
      </Link>
      <Link href={paths.teams(organizationId)}>
        <Text pl={3} fontSize="sm">
          {text("sideBarTeams")}
        </Text>
      </Link>
      <OrganizationRoleGuard roles={["mod", "owner"]}>
        <Link href={paths.organizationSettings(organizationId)}>
          <Text pl={3} fontSize="sm">
            {text("sideBarSettings")}
          </Text>
        </Link>
      </OrganizationRoleGuard>

      <Heading size="sm" pt={4}>
        {text("sideBarProfile")}
      </Heading>
      <Link href={paths.profile}>
        <Text pl={3} fontSize="sm">
          {text("sideBarProfileSettings")}
        </Text>
      </Link>
    </VStack>
  );
};

export default OrganizationSideBarView;
