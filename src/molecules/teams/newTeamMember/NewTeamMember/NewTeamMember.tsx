import React, { useState } from "react";
import { useInsertTeamMember, useSelectMembers } from "services";
import { useOrganizationContext, useTeamContext } from "utils";
import NewTeamMemberView from "../NewTeamMemberView/NewTeamMemberView";

type ViewProps = React.ComponentProps<typeof NewTeamMemberView>;

export type NewTeamMemberProps = {
  View?: React.ComponentType<ViewProps>;
};

const SEARCH_SIZE = 5;

const NewTeamMember = ({
  View = NewTeamMemberView,
}: NewTeamMemberProps): React.ReactElement => {
  const organization = useOrganizationContext();
  const team = useTeamContext();

  const [name, setName] = useState<string>();

  const { data: members } = useSelectMembers({
    from: 0,
    to: SEARCH_SIZE,
    organizationId: organization.id,
    name,
  });

  const { mutate: insertTeamMember, isLoading, error } = useInsertTeamMember();

  return (
    <View
      onSearch={setName}
      members={members?.entries}
      isLoading={isLoading}
      error={error}
      onSubmit={(data) =>
        insertTeamMember({
          profile_id: data.profileId,
          role: data.role,
          team_id: team.id,
        })
      }
    />
  );
};

export default React.memo(NewTeamMember);
