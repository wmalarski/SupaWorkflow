import React, { useState } from "react";
import {
  useInsertTeamMember,
  useOrganizationContext,
  useSelectMembers,
  useTeamContext,
} from "services";
import NewTeamMemberView, {
  NewTeamMemberViewData,
} from "../NewTeamMemberView/NewTeamMemberView";

export type NewTeamMemberProps = {
  View?: React.ComponentType<React.ComponentProps<typeof NewTeamMemberView>>;
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

  const handleSubmit = (data: NewTeamMemberViewData) =>
    insertTeamMember({
      profile_id: data.profileId,
      role: data.role,
      team_id: team.id,
    });

  return (
    <View
      onSearch={setName}
      members={members?.entries}
      isLoading={isLoading}
      error={error}
      onSubmit={handleSubmit}
    />
  );
};

export default React.memo(NewTeamMember);
