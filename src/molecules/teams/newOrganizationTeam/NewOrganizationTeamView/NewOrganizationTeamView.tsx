import React from "react";

export type NewOrganizationTeamViewProps = {
  data: string;
};

const NewOrganizationTeamView = ({
  data,
}: NewOrganizationTeamViewProps): JSX.Element => {
  return (
    <div>
      {`NewOrganizationTeamView: `}
      {data}
    </div>
  );
};

export default NewOrganizationTeamView;
