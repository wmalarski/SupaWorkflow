import React from "react";
import { useInsertTeam } from "../../../../services";
import { useOrganizationContext } from "../../../../utils";
import NewOrganizationTeamView from "../NewOrganizationTeamView/NewOrganizationTeamView";

type ViewProps = React.ComponentProps<typeof NewOrganizationTeamView>;

export type NewOrganizationTeamProps = {
  View?: React.ComponentType<ViewProps>;
};

const NewOrganizationTeam = ({
  View = NewOrganizationTeamView,
}: NewOrganizationTeamProps): React.ReactElement => {
  const { organization } = useOrganizationContext();

  const { mutate: insertTeam, isLoading, error, data } = useInsertTeam();

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
