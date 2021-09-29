import { useRouter } from "next/router";
import React from "react";
import { useInsertOrganization, useProfileContext } from "services";
import { paths } from "utils";
import CreateOrganizationView from "../CreateOrganizationView/CreateOrganizationView";

type ViewProps = React.ComponentProps<typeof CreateOrganizationView>;

export type CreateOrganizationProps = {
  View?: React.ComponentType<ViewProps>;
};

const CreateOrganization = ({
  View = CreateOrganizationView,
}: CreateOrganizationProps): React.ReactElement => {
  const router = useRouter();

  const profile = useProfileContext();

  const {
    mutate: insertOrganization,
    data: organization,
    isLoading,
    error,
  } = useInsertOrganization({
    onSuccess: (organization) =>
      router.push(paths.organization({ organizationId: organization.id })),
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

export default React.memo(CreateOrganization);
