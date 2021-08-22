import React from "react";

export type OrganizationTeamViewProps = {
  data: string;
};

const OrganizationTeamView = ({
  data,
}: OrganizationTeamViewProps): JSX.Element => {
  return (
    <div>
      {`OrganizationTeamView: `}
      {data}
    </div>
  );
};

export default OrganizationTeamView;
