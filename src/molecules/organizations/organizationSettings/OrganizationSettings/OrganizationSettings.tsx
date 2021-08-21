import { useRouter } from "next/router";
import React from "react";
import {
  useDeleteOrganization,
  useUpdateOrganization,
} from "../../../../services";
import { paths, useOrganizationContext } from "../../../../utils";
import OrganizationSettingsView from "../OrganizationSettingsView/OrganizationSettingsView";

type ViewProps = React.ComponentProps<typeof OrganizationSettingsView>;

export type OrganizationSettingsProps = {
  View?: React.ComponentType<ViewProps>;
};

const OrganizationSettings = ({
  View = OrganizationSettingsView,
}: OrganizationSettingsProps): JSX.Element => {
  const router = useRouter();

  const { organization } = useOrganizationContext();

  const {
    mutate: deleteOrganization,
    isLoading,
    error: deleteError,
  } = useDeleteOrganization({
    onSuccess: () => router.push(paths.organizations),
  });

  const {
    mutate: updateOrganization,
    isLoading: isUpdateLoading,
    isSuccess,
    error: updateError,
  } = useUpdateOrganization();

  return (
    <View
      error={deleteError ?? updateError}
      isSuccess={isSuccess}
      organization={organization}
      isLoading={isUpdateLoading || isLoading}
      onUpdateSubmit={(data) =>
        updateOrganization({
          description: data.description,
          name: data.name,
          id: organization.id,
        })
      }
      onDeleteSubmit={() =>
        deleteOrganization({
          id: organization.id,
        })
      }
    />
  );
};

export default React.memo(OrganizationSettings);