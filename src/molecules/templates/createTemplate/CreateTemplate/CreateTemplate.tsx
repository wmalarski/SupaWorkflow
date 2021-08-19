import React from "react";
import CreateTemplateView from "../CreateTemplateView/CreateTemplateView";

type ViewProps = React.ComponentProps<typeof CreateTemplateView>;

export type CreateTemplateProps = {
  View?: React.ComponentType<ViewProps>;
};

const CreateTemplate = ({
  View = CreateTemplateView,
}: CreateTemplateProps): JSX.Element => {
  return <View data="hello" />;
};

export default CreateTemplate;
