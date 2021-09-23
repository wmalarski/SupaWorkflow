import { Button, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link, Pagination } from "../../../../atoms";
import { OrganizationRole, Team } from "../../../../services";
import { paths, useText } from "../../../../utils";
import { OrganizationTab } from "../../../../utils/routing/types";

export type OrganizationTeamsViewProps = {
  page: number;
  pageSize: number;
  organizationId: number;
  organizationRole: OrganizationRole;
  teams?: Team[] | null;
  count?: number | null;
  isLoading: boolean;
  onPageChange: (page: number) => void;
  onDeleteTeam: (teamId: number) => void;
};

const OrganizationTeamsView = ({
  isLoading,
  organizationId,
  organizationRole,
  page,
  pageSize,
  count,
  teams,
  onPageChange,
  onDeleteTeam,
}: OrganizationTeamsViewProps): React.ReactElement => {
  const text = useText();

  return (
    <VStack>
      <Link href={paths.organization(organizationId, OrganizationTab.newTeam)}>
        {text("navigationTeamNew")}
      </Link>
      {teams?.map((team) => (
        <React.Fragment key={team.id}>
          <Link href={paths.team(team.organization_id, team.id)}>
            <Text fontSize="sm">{team.name}</Text>
          </Link>
          {["mod", "owner"].includes(organizationRole) && (
            <Button onClick={() => onDeleteTeam(team.id)}>
              {text("teamsDelete")}
            </Button>
          )}
        </React.Fragment>
      ))}
      <Pagination
        page={page}
        onPageChange={onPageChange}
        maxPage={Math.floor((count ?? 0) / pageSize)}
        isLoading={isLoading}
        left={text("previousPage")}
        right={text("nextPage")}
      >
        {page + 1}
      </Pagination>
    </VStack>
  );
};

export default OrganizationTeamsView;
