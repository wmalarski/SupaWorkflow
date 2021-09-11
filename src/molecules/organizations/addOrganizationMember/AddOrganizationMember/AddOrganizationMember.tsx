import React from "react";
import { useInviteOrganizationMember } from "../../../../services/data/organizationMember/inviteOrganizationMember";
import { useOrganizationContext } from "../../../../utils";
import AddOrganizationMemberView from "../AddOrganizationMemberView/AddOrganizationMemberView";

type ViewProps = React.ComponentProps<typeof AddOrganizationMemberView>;

export type AddOrganizationMemberProps = {
  View?: React.ComponentType<ViewProps>;
};

const AddOrganizationMember = ({
  View = AddOrganizationMemberView,
}: AddOrganizationMemberProps): React.ReactElement => {
  const { organization } = useOrganizationContext();

  const {
    mutate: inviteMember,
    error,
    isLoading,
  } = useInviteOrganizationMember();

  return (
    <View
      error={error}
      isLoading={isLoading}
      onSubmit={(data) => {
        inviteMember({
          email: data.email,
          organizationId: organization.id,
          role: data.role,
        });
      }}
    />
  );
};

export default React.memo(AddOrganizationMember);
