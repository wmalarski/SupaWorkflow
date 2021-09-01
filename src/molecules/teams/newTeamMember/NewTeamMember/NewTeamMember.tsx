import React from "react";
import NewTeamMemberView from "../NewTeamMemberView/NewTeamMemberView";

type ViewProps = React.ComponentProps<typeof NewTeamMemberView>;

export type NewTeamMemberProps = {
  View?: React.ComponentType<ViewProps>;
};

const NewTeamMember = ({
  View = NewTeamMemberView,
}: NewTeamMemberProps): JSX.Element => {
  return <View onSearch={() => void 0} onSubmit={() => void 0} members={[]} />;
};

export default React.memo(NewTeamMember);
