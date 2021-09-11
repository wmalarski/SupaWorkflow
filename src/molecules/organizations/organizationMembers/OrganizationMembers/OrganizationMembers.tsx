import React, { useState } from "react";
import {
  useSelectMembers,
  useUpdateOrganizationMember,
} from "../../../../services";
import { useDeleteOrganizationMember } from "../../../../services/data/organizationMember/deleteOrganizationMember";
import { useOrganizationContext } from "../../../../utils";
import OrganizationMembersView from "../OrganizationMembersView/OrganizationMembersView";

type ViewProps = React.ComponentProps<typeof OrganizationMembersView>;

const PAGE_SIZE = 10;

export type OrganizationMembersProps = {
  View?: React.ComponentType<ViewProps>;
};

const OrganizationMembers = ({
  View = OrganizationMembersView,
}: OrganizationMembersProps): React.ReactElement => {
  const { organization } = useOrganizationContext();

  const [page, setPage] = useState(0);

  const { data: members, isLoading } = useSelectMembers({
    organizationId: organization.id,
    from: page * PAGE_SIZE,
    to: (page + 1) * PAGE_SIZE,
  });

  const {
    mutate: updateOrganizationMember,
    isLoading: isUpdateLoading,
    variables: updateVariables,
  } = useUpdateOrganizationMember();

  const {
    mutate: deleteOrganizationMember,
    isLoading: isDeleteLoading,
    isSuccess: isDeleteSuccess,
  } = useDeleteOrganizationMember();

  return (
    <View
      page={page}
      pageSize={PAGE_SIZE}
      onPageChange={setPage}
      members={members}
      isLoading={isLoading}
      isDeleteSuccess={isDeleteSuccess}
      isUpdateLoading={isUpdateLoading || isDeleteLoading}
      authorId={organization.author_id}
      loadingMemberId={updateVariables?.id}
      onDeleteClick={(id) => deleteOrganizationMember({ id })}
      onUpdateClick={(id, role) => updateOrganizationMember({ id, role })}
    />
  );
};

export default React.memo(OrganizationMembers);
