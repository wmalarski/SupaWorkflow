import React from "react";

export type OrganizationMembersViewProps = {
  data: string;
};

const OrganizationMembersView = ({
  data,
}: OrganizationMembersViewProps): JSX.Element => {
  return (
    <div>
      {`OrganizationMembersView: `}
      {data}
    </div>
  );
};

export default OrganizationMembersView;
