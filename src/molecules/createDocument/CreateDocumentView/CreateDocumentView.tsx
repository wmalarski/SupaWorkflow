import React from "react";

export type CreateDocumentViewProps = {
  data: string;
};

const CreateDocumentView = ({ data }: CreateDocumentViewProps): JSX.Element => {
  return (
    <div>
      {`CreateDocumentView: `}
      {data}
    </div>
  );
};

export default CreateDocumentView;
