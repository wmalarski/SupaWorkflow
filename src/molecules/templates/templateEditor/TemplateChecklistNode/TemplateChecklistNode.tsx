import React from "react";

export type TemplateChecklistNodeProps = {
  data: string;
};

const TemplateChecklistNode = ({
  data,
}: TemplateChecklistNodeProps): React.ReactElement => {
  return (
    <div>
      {`TemplateChecklistNode: `}
      {data}
    </div>
  );
};

export default TemplateChecklistNode;
