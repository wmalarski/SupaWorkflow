import { AddIcon } from "@chakra-ui/icons";
import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "../../../../atoms";
import { Organization } from "../../../../services";
import { paths, useText } from "../../../../utils";
import { DashboardTab } from "../../../../utils/routing/types";

export type DashboardSideBarViewProps = {
  organizations?: Organization[] | null;
  isLoading: boolean;
};

const DashboardSideBarView = ({
  organizations,
}: DashboardSideBarViewProps): JSX.Element => {
  const text = useText();

  return (
    <VStack align="start" spacing={5}>
      <Heading size="sm">{text("navigationOrganizations")}</Heading>
      <Link
        pl={3}
        href={paths.dashboard(DashboardTab.new)}
        nextProps={{ shallow: true }}
      >
        <HStack>
          <AddIcon />
          <Text fontSize="sm">{text("navigationOrganizationNew")}</Text>
        </HStack>
      </Link>
      <Link href={paths.dashboard(null)} nextProps={{ shallow: true }}>
        <Text pl={3} fontSize="sm">
          {text("navigationOrganizations")}
        </Text>
      </Link>

      <Heading size="sm" pt={5}>
        {text("navigationOrganizationsAll")}
      </Heading>
      {organizations?.map((organization) => (
        <Link
          key={organization.id}
          href={paths.organization(organization.id, null)}
        >
          <Text pl={3} fontSize="sm">
            {organization.name}
          </Text>
        </Link>
      ))}

      <Heading size="sm" pt={5}>
        {text("navigationProfile")}
      </Heading>
      <Link
        href={paths.dashboard(DashboardTab.profile)}
        nextProps={{ shallow: true }}
      >
        <Text pl={3} fontSize="sm">
          {text("navigationProfileSettings")}
        </Text>
      </Link>
    </VStack>
  );
};

export default DashboardSideBarView;
