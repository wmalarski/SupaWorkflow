import React from "react";

export type OrganizationDashboardViewProps = {
  data: string;
};

const OrganizationDashboardView = ({
  data,
}: OrganizationDashboardViewProps): JSX.Element => {
  return (
    <div>
      {`OrganizationDashboardView: `}
      {data}
    </div>
  );
};

export default OrganizationDashboardView;
