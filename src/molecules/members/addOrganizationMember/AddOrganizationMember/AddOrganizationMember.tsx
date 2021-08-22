import React, { useState } from "react";
import { OrganizationRole, useSignIn } from "../../../../services";
import { useInviteOrganizationMember } from "../../../../services/data/organizationMember/inviteOrganizationMember";
import { useOrganizationContext } from "../../../../utils";
import AddOrganizationMemberView from "../AddOrganizationMemberView/AddOrganizationMemberView";

type ViewProps = React.ComponentProps<typeof AddOrganizationMemberView>;

export type AddOrganizationMemberProps = {
  View?: React.ComponentType<ViewProps>;
};

const AddOrganizationMember = ({
  View = AddOrganizationMemberView,
}: AddOrganizationMemberProps): JSX.Element => {
  const { organization } = useOrganizationContext();

  const [role, setRole] = useState<OrganizationRole | null>(null);

  const {
    mutate: inviteMember,
    error: inviteError,
    isLoading: isInviteLoading,
  } = useInviteOrganizationMember();

  const {
    mutate: signIn,
    error: signInError,
    isLoading: isSignInLoading,
  } = useSignIn({
    onSuccess: (_, variables) => {
      if (!variables.email || !role) return;
      inviteMember({
        email: variables.email,
        organizationId: organization.id,
        role,
      });
    },
  });

  return (
    <View
      error={signInError ?? inviteError}
      isLoading={isSignInLoading || isInviteLoading}
      onSubmit={(data) => {
        setRole(data.role);
        signIn({ email: data.email });
      }}
    />
  );
};

export default React.memo(AddOrganizationMember);
