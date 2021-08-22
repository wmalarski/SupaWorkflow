import { Heading, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Template } from "../../../../services";
import {
  OrganizationRoleGuard,
  paths,
  useOrganizationContext,
  useText,
} from "../../../../utils";

export type OrganizationSideBarViewProps = {
  templates?: Template[] | null;
};

const OrganizationSideBarView = ({
  templates,
}: OrganizationSideBarViewProps): JSX.Element => {
  const { organization } = useOrganizationContext();

  const text = useText();

  return (
    <VStack>
      <Heading size="md">{text("sideBarOrganization")}</Heading>
      <Link href={paths.members(organization.id)}>
        {text("sideBarMembers")}
      </Link>
      <Link href={paths.teams(organization.id)}>{text("sideBarTeams")}</Link>
      <OrganizationRoleGuard roles={["mod", "owner"]}>
        <Link href={paths.organizationSettings(organization.id)}>
          {text("sideBarSettings")}
        </Link>
      </OrganizationRoleGuard>

      <Heading size="md">{text("sideBarTemplates")}</Heading>
      <Link href={paths.newTemplate(organization.id)}>
        {text("sideBarNewTemplate")}
      </Link>
      {templates?.map((template) => (
        <Link
          key={template.id}
          href={paths.template(organization.id, template.id)}
        >
          <Text fontSize="sm">{template.name}</Text>
        </Link>
      ))}
    </VStack>
  );
};

export default OrganizationSideBarView;
