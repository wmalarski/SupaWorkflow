import React, { useState } from "react";
import {
  useDeleteTeam,
  useOrganizationContext,
  useOrganizationMemberContext,
  useSelectTeams,
} from "services";
import OrganizationTeamsView from "../OrganizationTeamsView/OrganizationTeamsView";

const PAGE_SIZE = 10;

export type OrganizationTeamsProps = {
  View?: React.ComponentType<
    React.ComponentProps<typeof OrganizationTeamsView>
  >;
};

const OrganizationTeams = ({
  View = OrganizationTeamsView,
}: OrganizationTeamsProps): React.ReactElement => {
  const organization = useOrganizationContext();
  const member = useOrganizationMemberContext();

  const [page, setPage] = useState(0);

  const { data: teams, isLoading } = useSelectTeams({
    organizationId: organization.id,
    from: page * PAGE_SIZE,
    to: (page + 1) * PAGE_SIZE,
  });

  const { mutate: deleteTeam } = useDeleteTeam();

  const handleDeleteTeam = (id: number) => deleteTeam({ id });

  return (
    <View
      organizationRole={member.role}
      organizationId={organization.id}
      teams={teams?.entries}
      count={teams?.count}
      isLoading={isLoading}
      onPageChange={setPage}
      page={page}
      pageSize={PAGE_SIZE}
      onDeleteTeam={handleDeleteTeam}
    />
  );
};

export default React.memo(OrganizationTeams);
