import React from "react";
import CreateDocumentView from "../CreateDocumentView/CreateDocumentView";

type ViewProps = React.ComponentProps<typeof CreateDocumentView>;

export type CreateDocumentProps = {
  View?: React.ComponentType<ViewProps>;
};

const CreateDocument = ({
  View = CreateDocumentView,
}: CreateDocumentProps): JSX.Element => {
  return <View data="hello" />;
};

export default CreateDocument;
