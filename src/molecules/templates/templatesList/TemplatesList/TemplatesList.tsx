import React from "react";
import TemplatesListView from "../TemplatesListView/TemplatesListView";

type ViewProps = React.ComponentProps<typeof TemplatesListView>;

export type TemplatesListProps = {
  View?: React.ComponentType<ViewProps>;
};

const TemplatesList = ({
  View = TemplatesListView,
}: TemplatesListProps): JSX.Element => {
  return <View data="hello" />;
};

export default React.memo(TemplatesList);
