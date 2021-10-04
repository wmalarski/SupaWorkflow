import React, { useState } from "react";
import {
  useDeleteTeamMember,
  useOrganizationMemberContext,
  useSelectTeamMembers,
  useTeamContext,
} from "services";
import OrganizationTeamView from "../OrganizationTeamView/OrganizationTeamView";

export type OrganizationTeamProps = {
  View?: React.ComponentType<React.ComponentProps<typeof OrganizationTeamView>>;
};

const PAGE_SIZE = 10;

const OrganizationTeam = ({
  View = OrganizationTeamView,
}: OrganizationTeamProps): React.ReactElement => {
  const team = useTeamContext();
  const member = useOrganizationMemberContext();

  const [page, setPage] = useState(0);

  const { data: teamMembers, isLoading } = useSelectTeamMembers({
    teamId: team.id,
    from: page * PAGE_SIZE,
    to: (page + 1) * PAGE_SIZE,
  });

  const { mutate: deleteTeamMember } = useDeleteTeamMember();

  const handleDeleteClick = (teamMemberId: number) =>
    deleteTeamMember({
      id: teamMemberId,
    });

  return (
    <View
      count={teamMembers?.count}
      isLoading={isLoading}
      onPageChange={setPage}
      page={page}
      pageSize={PAGE_SIZE}
      teamMembers={teamMembers?.entries}
      organizationRole={member.role}
      onDeleteClick={handleDeleteClick}
    />
  );
};

export default React.memo(OrganizationTeam);
