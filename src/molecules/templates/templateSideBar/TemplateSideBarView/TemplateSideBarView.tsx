import { AddIcon } from "@chakra-ui/icons";
import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "../../../../atoms";
import { paths, TemplateTab, useText } from "../../../../utils";

export type TemplateSideBarViewProps = {
  organizationId: number;
  templateId: number;
};

const TemplateSideBarView = ({
  organizationId,
  templateId,
}: TemplateSideBarViewProps): JSX.Element => {
  const text = useText();

  return (
    <VStack align="start" spacing={5}>
      <Heading size="sm">{text("navigationTemplate")}</Heading>

      <Link
        href={paths.template(organizationId, templateId)}
        nextProps={{ shallow: true }}
      >
        <Text pl={3} fontSize="sm">
          {text("navigationTemplateDetails")}
        </Text>
      </Link>

      <Link
        href={paths.template(organizationId, templateId, TemplateTab.edit)}
        nextProps={{ shallow: true }}
      >
        <Text pl={3} fontSize="sm">
          {text("navigationTemplateEdit")}
        </Text>
      </Link>

      <Link
        href={paths.template(organizationId, templateId, TemplateTab.new)}
        nextProps={{ shallow: true }}
      >
        <HStack pl={3}>
          <AddIcon />
          <Text fontSize="sm">{text("navigationNewWorkflow")}</Text>
        </HStack>
      </Link>
    </VStack>
  );
};

export default TemplateSideBarView;
