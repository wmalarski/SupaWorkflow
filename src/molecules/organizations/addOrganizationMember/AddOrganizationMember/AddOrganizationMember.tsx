import React from "react";
import { useInviteOrganizationMember, useOrganizationContext } from "services";
import AddOrganizationMemberView, {
  AddOrganizationMemberViewData,
} from "../AddOrganizationMemberView/AddOrganizationMemberView";

export type AddOrganizationMemberProps = {
  View?: React.ComponentType<
    React.ComponentProps<typeof AddOrganizationMemberView>
  >;
};

const AddOrganizationMember = ({
  View = AddOrganizationMemberView,
}: AddOrganizationMemberProps): React.ReactElement => {
  const organization = useOrganizationContext();

  const {
    mutate: inviteMember,
    error,
    isLoading,
  } = useInviteOrganizationMember();

  const handleSubmit = (data: AddOrganizationMemberViewData) =>
    inviteMember({
      email: data.email,
      organizationId: organization.id,
      role: data.role,
    });

  return <View error={error} isLoading={isLoading} onSubmit={handleSubmit} />;
};

export default React.memo(AddOrganizationMember);
