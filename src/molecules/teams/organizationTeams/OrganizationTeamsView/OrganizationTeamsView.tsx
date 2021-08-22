import React from "react";

export type OrganizationTeamsViewProps = {
  data: string;
};

const OrganizationTeamsView = ({
  data,
}: OrganizationTeamsViewProps): JSX.Element => {
  return (
    <div>
      {`OrganizationTeamsView: `}
      {data}
    </div>
  );
};

export default OrganizationTeamsView;
