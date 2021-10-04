import { useRouter } from "next/router";
import React from "react";
import {
  useDeleteOrganization,
  useOrganizationContext,
  useUpdateOrganization,
} from "services";
import { paths } from "utils";
import OrganizationSettingsView, {
  OrganizationSettingsViewData,
} from "../OrganizationSettingsView/OrganizationSettingsView";

export type OrganizationSettingsProps = {
  View?: React.ComponentType<
    React.ComponentProps<typeof OrganizationSettingsView>
  >;
};

const OrganizationSettings = ({
  View = OrganizationSettingsView,
}: OrganizationSettingsProps): React.ReactElement => {
  const router = useRouter();

  const organization = useOrganizationContext();

  const {
    mutate: deleteOrganization,
    isLoading,
    error: deleteError,
  } = useDeleteOrganization({
    onSuccess: () => router.push(paths.dashboard()),
  });

  const {
    mutate: updateOrganization,
    isLoading: isUpdateLoading,
    isSuccess,
    error: updateError,
    data: updatedOrganization,
  } = useUpdateOrganization();

  const handleUpdateSubmit = (data: OrganizationSettingsViewData) =>
    updateOrganization({
      description: data.description,
      name: data.name,
      id: organization.id,
    });

  const handleDeleteSubmit = () =>
    deleteOrganization({
      id: organization.id,
    });

  return (
    <View
      error={deleteError ?? updateError}
      isSuccess={isSuccess}
      organization={organization}
      updatedOrganization={updatedOrganization}
      isLoading={isUpdateLoading || isLoading}
      onUpdateSubmit={handleUpdateSubmit}
      onDeleteSubmit={handleDeleteSubmit}
    />
  );
};

export default React.memo(OrganizationSettings);
