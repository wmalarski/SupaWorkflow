import React from "react";

export type TemplatesListViewProps = {
  data: string;
};

const TemplatesListView = ({ data }: TemplatesListViewProps): JSX.Element => {
  return (
    <div>
      {`TemplatesListView: `}
      {data}
    </div>
  );
};

export default TemplatesListView;
