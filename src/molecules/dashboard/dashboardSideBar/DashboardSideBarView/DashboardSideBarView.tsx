import { AddIcon } from "@chakra-ui/icons";
import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "../../../../atoms";
import { Organization } from "../../../../services";
import { paths, useText } from "../../../../utils";
import { DashboardTab, OrganizationTab } from "../../../../utils/routing/types";

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
      <Heading size="sm">{text("sideBarOrganizations")}</Heading>
      <Link
        pl={3}
        href={paths.dashboard(DashboardTab.new)}
        nextProps={{ shallow: true }}
      >
        <HStack>
          <AddIcon />
          <Text fontSize="sm">{text("sideBarNewOrganization")}</Text>
        </HStack>
      </Link>
      <Link
        href={paths.dashboard(DashboardTab.dashboard)}
        nextProps={{ shallow: true }}
      >
        <Text pl={3} fontSize="sm">
          {text("sideBarOrganizationList")}
        </Text>
      </Link>

      <Heading size="sm" pt={5}>
        {text("sideBarAllOrganizations")}
      </Heading>
      {organizations?.map((organization) => (
        <Link
          key={organization.id}
          href={paths.organization(organization.id, OrganizationTab.dashboard)}
        >
          <Text pl={3} fontSize="sm">
            {organization.name}
          </Text>
        </Link>
      ))}

      <Heading size="sm" pt={5}>
        {text("sideBarProfile")}
      </Heading>
      <Link
        href={paths.dashboard(DashboardTab.profile)}
        nextProps={{ shallow: true }}
      >
        <Text pl={3} fontSize="sm">
          {text("sideBarProfileSettings")}
        </Text>
      </Link>
    </VStack>
  );
};

export default DashboardSideBarView;
