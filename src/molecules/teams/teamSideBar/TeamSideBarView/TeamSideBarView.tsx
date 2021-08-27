import React from "react";

export type TeamSideBarViewProps = {
  data: string;
};

const TeamSideBarView = ({ data }: TeamSideBarViewProps): JSX.Element => {
  return (
    <div>
      {`TeamSideBarView: `}
      {data}
    </div>
  );
};

export default TeamSideBarView;
