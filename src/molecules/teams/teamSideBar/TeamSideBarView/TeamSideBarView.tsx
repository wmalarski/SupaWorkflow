import { AddIcon } from "@chakra-ui/icons";
import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { Link } from "atoms";
import React from "react";
import { OrganizationDialog, paths, useText } from "utils";

export type TeamSideBarViewProps = {
  organizationId: number;
  teamId: number;
};

const TeamSideBarView = ({
  organizationId,
  teamId,
}: TeamSideBarViewProps): React.ReactElement => {
  const text = useText();

  return (
    <VStack align="start" spacing={5}>
      <Heading size="sm">{text("navigationTeam")}</Heading>

      <Link
        href={paths.team({ organizationId, teamId })}
        nextProps={{ shallow: true }}
      >
        <Text pl={3} fontSize="sm">
          {text("navigationTeamDetails")}
        </Text>
      </Link>

      <Link
        href={paths.organization({
          organizationId,
          dialog: OrganizationDialog.newTeam,
        })}
      >
        <HStack pl={3}>
          <AddIcon />
          <Text fontSize="sm">{text("navigationTeamNew")}</Text>
        </HStack>
      </Link>
    </VStack>
  );
};

export default TeamSideBarView;
