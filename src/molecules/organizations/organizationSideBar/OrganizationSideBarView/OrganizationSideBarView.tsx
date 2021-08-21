import { Heading, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Template } from "../../../../services/types";
import { useOrganizationContext } from "../../../../utils/contexts/OrganizationContext";
import paths from "../../../../utils/routing/paths";
import useText from "../../../../utils/translations/useText";

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
