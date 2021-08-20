import { Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "../../../../atoms";
import { Organization } from "../../../../services/types";
import paths from "../../../../utils/routing/paths";
import useText from "../../../../utils/translations/useText";

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
      <Heading size="md">{text("sideBarOrganization")}</Heading>
      <Link href={paths.newOrganization}>{text("sideBarNewOrganization")}</Link>
      {organizations?.map((organization) => (
        <Link key={organization.id} href={paths.organization(organization.id)}>
          <Text fontSize="sm">{organization.name}</Text>
        </Link>
      ))}
    </VStack>
  );
};

export default DashboardSideBarView;
