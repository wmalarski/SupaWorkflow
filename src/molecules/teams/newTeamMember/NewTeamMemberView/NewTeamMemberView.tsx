import React from "react";

export type NewTeamMemberViewViewProps = {
  data: string;
};

const NewTeamMemberViewView = ({
  data,
}: NewTeamMemberViewViewProps): JSX.Element => {
  return (
    <div>
      {`NewTeamMemberViewView: `}
      {data}
    </div>
  );
};

export default NewTeamMemberViewView;
