import { AddIcon, SettingsIcon } from "@chakra-ui/icons";
import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { Link } from "atoms";
import React from "react";
import { Organization } from "services";
import { DashboardDialog, DashboardTab, paths, useText } from "utils";

export type DashboardSideBarViewProps = {
  organizations?: Organization[] | null;
  isLoading: boolean;
  tab: DashboardTab | null;
};

const DashboardSideBarView = ({
  organizations,
  tab,
}: DashboardSideBarViewProps): React.ReactElement => {
  const text = useText();

  return (
    <VStack align="start" spacing={5}>
      <Heading size="sm">{text("navigationOrganizations")}</Heading>
      <Link
        pl={3}
        href={paths.dashboard({ tab, dialog: DashboardDialog.new })}
        nextProps={{ shallow: true }}
      >
        <HStack>
          <AddIcon />
          <Text fontSize="sm">{text("navigationOrganizationNew")}</Text>
        </HStack>
      </Link>
      <Link href={paths.dashboard()} nextProps={{ shallow: true }}>
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
          href={paths.organization({ organizationId: organization.id })}
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
        href={paths.dashboard({ tab: DashboardTab.profile })}
        nextProps={{ shallow: true }}
      >
        <HStack pl={3}>
          <SettingsIcon />
          <Text fontSize="sm">{text("navigationProfileSettings")}</Text>
        </HStack>
      </Link>
    </VStack>
  );
};

export default DashboardSideBarView;
