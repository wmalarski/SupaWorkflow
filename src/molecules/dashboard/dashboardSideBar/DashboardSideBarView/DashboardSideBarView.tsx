import { Heading, Text, VStack } from "@chakra-ui/react";
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
    <VStack>
      <Heading size="md">{text("sideBarOrganizations")}</Heading>
      <Link href={paths.newOrganization}>{text("sideBarNewOrganization")}</Link>
      {organizations?.map((organization) => (
        <Link key={organization.id} href={paths.organization(organization.id)}>
          <Text fontSize="sm">{organization.name}</Text>
        </Link>
      ))}
      <Heading size="md">{text("sideBarProfile")}</Heading>
      <Link href={paths.profile}>{text("sideBarProfileSettings")}</Link>
    </VStack>
  );
};

export default DashboardSideBarView;
