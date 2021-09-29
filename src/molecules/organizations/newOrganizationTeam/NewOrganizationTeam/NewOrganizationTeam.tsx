import { useRouter } from "next/router";
import React from "react";
import { useInsertTeam, useOrganizationContext } from "services";
import { paths } from "utils";
import NewOrganizationTeamView from "../NewOrganizationTeamView/NewOrganizationTeamView";

type ViewProps = React.ComponentProps<typeof NewOrganizationTeamView>;

export type NewOrganizationTeamProps = {
  View?: React.ComponentType<ViewProps>;
};

const NewOrganizationTeam = ({
  View = NewOrganizationTeamView,
}: NewOrganizationTeamProps): React.ReactElement => {
  const router = useRouter();
  const organization = useOrganizationContext();

  const {
    mutate: insertTeam,
    isLoading,
    error,
    data,
  } = useInsertTeam({
    onSuccess: (team) => {
      team &&
        router.push(
          paths.team({ organizationId: organization.id, teamId: team?.id })
        );
    },
  });

  return (
    <View
      isLoading={isLoading}
      error={error}
      team={data}
      onSubmit={(data) =>
        insertTeam({
          avatar: null,
          color: data.color,
          description: data.description,
          name: data.name,
          organization_id: organization.id,
        })
      }
    />
  );
};

export default React.memo(NewOrganizationTeam);
