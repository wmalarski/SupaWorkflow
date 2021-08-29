import { useRouter } from "next/router";
import React from "react";
import { useInsertTemplate } from "../../../../services";
import { paths, useOrganizationContext } from "../../../../utils";
import CreateTemplateView from "../CreateTemplateView/CreateTemplateView";

type ViewProps = React.ComponentProps<typeof CreateTemplateView>;

export type CreateTemplateProps = {
  View?: React.ComponentType<ViewProps>;
};

const CreateTemplate = ({
  View = CreateTemplateView,
}: CreateTemplateProps): JSX.Element => {
  const router = useRouter();

  const { organization } = useOrganizationContext();

  const {
    mutate: insertTemplate,
    data: template,
    isLoading,
    error,
  } = useInsertTemplate({
    onSuccess: (template) =>
      router.push(paths.template(organization.id, template.id)),
  });

  return (
    <View
      isLoading={isLoading}
      template={template}
      error={error}
      onSubmit={(data) =>
        insertTemplate({
          avatar: null,
          description: data.description,
          name: data.name,
          organization_id: organization.id,
        })
      }
    />
  );
};

export default React.memo(CreateTemplate);
