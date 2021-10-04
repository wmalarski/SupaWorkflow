import { useRouter } from "next/router";
import React from "react";
import { useInsertOrganization, useProfileContext } from "services";
import { paths } from "utils";
import CreateOrganizationView, {
  CreateOrganizationViewData,
} from "../CreateOrganizationView/CreateOrganizationView";

export type CreateOrganizationProps = {
  View?: React.ComponentType<
    React.ComponentProps<typeof CreateOrganizationView>
  >;
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

  const handleSubmit = (data: CreateOrganizationViewData) =>
    insertOrganization({
      author_id: profile.id,
      avatar: null,
      description: data.description,
      name: data.name,
    });

  return (
    <View
      isLoading={isLoading}
      organization={organization}
      error={error}
      onSubmit={handleSubmit}
    />
  );
};

export default React.memo(CreateOrganization);
