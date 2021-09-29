import React, { useState } from "react";
import { useDeleteTeam, useSelectTeams } from "services";
import { useOrganizationContext, useOrganizationMemberContext } from "utils";
import OrganizationTeamsView from "../OrganizationTeamsView/OrganizationTeamsView";

type ViewProps = React.ComponentProps<typeof OrganizationTeamsView>;

const PAGE_SIZE = 10;

export type OrganizationTeamsProps = {
  View?: React.ComponentType<ViewProps>;
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
      onDeleteTeam={(id) => deleteTeam({ id })}
    />
  );
};

export default React.memo(OrganizationTeams);
