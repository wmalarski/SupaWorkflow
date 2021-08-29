import React from "react";

export type NewTeamMemberViewProps = {
  data: string;
};

const NewTeamMemberView = ({ data }: NewTeamMemberViewProps): JSX.Element => {
  return (
    <div>
      {`NewTeamMemberViewView: `}
      {data}
    </div>
  );
};

export default NewTeamMemberView;
