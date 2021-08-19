import React from "react";

export type OrganizationsListViewProps = {
  data: string;
};

const OrganizationsListView = ({
  data,
}: OrganizationsListViewProps): JSX.Element => {
  return (
    <div>
      {`OrganizationsListView: `}
      {data}
    </div>
  );
};

export default OrganizationsListView;
