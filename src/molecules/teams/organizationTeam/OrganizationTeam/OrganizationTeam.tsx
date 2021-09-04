import React, { useState } from "react";
import { useDeleteTeamMember } from "../../../../services/data/teamMember/deleteTeamMember";
import { useSelectTeamMembers } from "../../../../services/data/teamMember/selectTeamMembers";
import { useTeamContext } from "../../../../utils";
import OrganizationTeamView from "../OrganizationTeamView/OrganizationTeamView";

type ViewProps = React.ComponentProps<typeof OrganizationTeamView>;

export type OrganizationTeamProps = {
  View?: React.ComponentType<ViewProps>;
};

const PAGE_SIZE = 10;

const OrganizationTeam = ({
  View = OrganizationTeamView,
}: OrganizationTeamProps): JSX.Element => {
  const team = useTeamContext();

  const [page, setPage] = useState(0);

  const { data: teamMembers, isLoading } = useSelectTeamMembers({
    teamId: team.id,
    from: page * PAGE_SIZE,
    to: (page + 1) * PAGE_SIZE,
  });

  const { mutate: deleteTeamMember } = useDeleteTeamMember();

  return (
    <View
      count={teamMembers?.count}
      isLoading={isLoading}
      onPageChange={setPage}
      page={page}
      pageSize={PAGE_SIZE}
      teamMembers={teamMembers?.entries}
      onDeleteClick={(teamMemberId) =>
        deleteTeamMember({
          id: teamMemberId,
        })
      }
    />
  );
};

export default React.memo(OrganizationTeam);
