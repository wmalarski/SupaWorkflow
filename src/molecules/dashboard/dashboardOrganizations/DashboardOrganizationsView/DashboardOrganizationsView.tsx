import { Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "../../../../atoms";
import { Organization } from "../../../../services";
import { paths, useText } from "../../../../utils";
import { OrganizationTab } from "../../../../utils/routing/types";

export type DashboardOrganizationsViewProps = {
  organizations?: Organization[] | null;
  isLoading: boolean;
};

const DashboardOrganizationsView = ({
  organizations,
}: DashboardOrganizationsViewProps): JSX.Element => {
  const text = useText();

  return (
    <VStack>
      <Heading>{text("organizationsDashboardHeader")}</Heading>
      {organizations?.map((organization) => (
        <Link
          key={organization.id}
          href={paths.organization(organization.id, OrganizationTab.dashboard)}
        >
          <Text fontSize="sm">{organization.name}</Text>
        </Link>
      ))}
    </VStack>
  );
};

export default DashboardOrganizationsView;
