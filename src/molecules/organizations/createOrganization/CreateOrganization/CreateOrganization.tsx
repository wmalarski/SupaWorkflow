import { useRouter } from "next/router";
import React from "react";
import { useInsertOrganization } from "../../../../services";
import { paths, useProfileContext } from "../../../../utils";
import CreateOrganizationView from "../CreateOrganizationView/CreateOrganizationView";

type ViewProps = React.ComponentProps<typeof CreateOrganizationView>;

export type CreateOrganizationProps = {
  View?: React.ComponentType<ViewProps>;
};

const CreateOrganization = ({
  View = CreateOrganizationView,
}: CreateOrganizationProps): JSX.Element => {
  const router = useRouter();

  const profile = useProfileContext();

  const {
    mutate: insertOrganization,
    data: organization,
    isLoading,
    error,
  } = useInsertOrganization({
    onSuccess: (organization) =>
      router.push(paths.organization(organization.id)),
  });

  return (
    <View
      isLoading={isLoading}
      organization={organization}
      error={error}
      onSubmit={(data) =>
        insertOrganization({
          author_id: profile.id,
          avatar: null,
          description: data.description,
          name: data.name,
        })
      }
    />
  );
};

export default CreateOrganization;
