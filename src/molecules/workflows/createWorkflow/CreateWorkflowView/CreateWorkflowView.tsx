import React from "react";

export type CreateWorkflowViewProps = {
  data: string;
};

const CreateWorkflowView = ({ data }: CreateWorkflowViewProps): JSX.Element => {
  return (
    <div>
      {`CreateDocumentView: `}
      {data}
    </div>
  );
};

export default CreateWorkflowView;
