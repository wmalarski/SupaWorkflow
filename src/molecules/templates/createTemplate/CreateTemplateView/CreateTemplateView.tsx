import React from "react";

export type CreateTemplateViewProps = {
  data: string;
};

const CreateTemplateView = ({ data }: CreateTemplateViewProps): JSX.Element => {
  return (
    <div>
      {`CreateTemplateView: `}
      {data}
    </div>
  );
};

export default CreateTemplateView;
