import React from "react";

export type ProfileHeaderViewProps = {
  data: string;
};

const ProfileHeaderView = ({ data }: ProfileHeaderViewProps): JSX.Element => {
  return <div>{data}</div>;
};

export default ProfileHeaderView;
