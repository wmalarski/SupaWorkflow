import { AddIcon } from "@chakra-ui/icons";
import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "../../../../atoms";
import { Organization } from "../../../../services";
import { paths, useText } from "../../../../utils";

export type DashboardSideBarViewProps = {
  organizations?: Organization[] | null;
  isLoading: boolean;
};

const DashboardSideBarView = ({
  organizations,
}: DashboardSideBarViewProps): JSX.Element => {
  const text = useText();

  return (
    <VStack align="start">
      <Heading size="md">{text("sideBarOrganizations")}</Heading>
      <Link href={paths.newOrganization}>
        <HStack>
          <AddIcon />
          <Text fontSize="sm">{text("sideBarNewOrganization")}</Text>
        </HStack>
      </Link>
      <Link href={paths.organizations}>
        <Text fontSize="sm">{text("sideBarOrganizationList")}</Text>
      </Link>

      <Heading size="sm" pt={2}>
        {text("sideBarAllOrganizations")}
      </Heading>
      {organizations?.map((organization) => (
        <Link key={organization.id} href={paths.organization(organization.id)}>
          <Text fontSize="sm">{organization.name}</Text>
        </Link>
      ))}

      <Heading size="md" pt={4}>
        {text("sideBarProfile")}
      </Heading>
      <Link href={paths.profile}>
        <Text fontSize="sm">{text("sideBarProfileSettings")}</Text>
      </Link>
    </VStack>
  );
};

export default DashboardSideBarView;
