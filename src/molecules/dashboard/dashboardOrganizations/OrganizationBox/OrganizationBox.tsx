import { Heading, LinkBox, Text } from "@chakra-ui/react";
import React from "react";
import { LinkOverlay } from "../../../../atoms";
import { Organization } from "../../../../services";
import { paths } from "../../../../utils";

export type OrganizationBoxProps = {
  organization: Organization;
};

const OrganizationBox = ({
  organization,
}: OrganizationBoxProps): JSX.Element => (
  <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
    <Heading size="md" my="2">
      <LinkOverlay href={paths.organization(organization.id)}>
        {organization.name}
      </LinkOverlay>
    </Heading>
    <Text>{organization.description}</Text>
  </LinkBox>
);

export default OrganizationBox;
