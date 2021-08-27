import React from "react";

export type TemplateSideBarViewProps = {
  data: string;
};

const TemplateSideBarView = ({
  data,
}: TemplateSideBarViewProps): JSX.Element => {
  return (
    <div>
      {`TemplateSideBarView: `}
      {data}
    </div>
  );
};

export default TemplateSideBarView;
