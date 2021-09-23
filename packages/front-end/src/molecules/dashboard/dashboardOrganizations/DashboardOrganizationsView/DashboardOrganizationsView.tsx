import { Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { Organization } from "@supa-workflow/services";
import React from "react";
import { useText } from "utils";
import OrganizationBox from "../OrganizationBox/OrganizationBox";

export type DashboardOrganizationsViewProps = {
  organizations?: Organization[] | null;
  isLoading: boolean;
};

const DashboardOrganizationsView = ({
  organizations,
}: DashboardOrganizationsViewProps): React.ReactElement => {
  const text = useText();

  return (
    <VStack>
      <Heading>{text("organizationsDashboardHeader")}</Heading>
      <SimpleGrid columns={3} spacing={10}>
        {organizations?.map((organization) => (
          <OrganizationBox key={organization.id} organization={organization} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default DashboardOrganizationsView;
