import React from "react";

export type DashboardHeaderViewProps = {
  data: string;
};

const DashboardHeaderView = ({
  data,
}: DashboardHeaderViewProps): JSX.Element => {
  return (
    <div>
      {`DashboardHeaderView: `}
      {data}
    </div>
  );
};

export default DashboardHeaderView;
