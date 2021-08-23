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
    <VStack align="start">
      <Heading size="md">{text("sideBarOrganization")}</Heading>
      <Link href={paths.organization(organizationId)}>
        <Text fontSize="sm">{text("sideBarOrganizationDashboard")}</Text>
      </Link>
      <Link href={paths.members(organizationId)}>
        <Text fontSize="sm">{text("sideBarMembers")}</Text>
      </Link>
      <Link href={paths.teams(organizationId)}>
        <Text fontSize="sm">{text("sideBarTeams")}</Text>
      </Link>
      <OrganizationRoleGuard roles={["mod", "owner"]}>
        <Link href={paths.organizationSettings(organizationId)}>
          <Text fontSize="sm">{text("sideBarSettings")}</Text>
        </Link>
      </OrganizationRoleGuard>
      <Link href={paths.templates(organizationId)}>
        <Text fontSize="sm">{text("sideBarTemplates")}</Text>
      </Link>
      <Link href={paths.workflows(organizationId)}>
        <Text fontSize="sm">{text("sideBarWorkflows")}</Text>
      </Link>

      <Heading size="md" pt={4}>
        {text("sideBarProfile")}
      </Heading>
      <Link href={paths.profile}>
        <Text fontSize="sm">{text("sideBarProfileSettings")}</Text>
      </Link>
    </VStack>
  );
};

export default OrganizationSideBarView;
