import { useRouter } from "next/router";
import React from "react";
import { useInsertTemplate, useOrganizationContext } from "services";
import { paths } from "utils";
import CreateTemplateView, {
  CreateTemplateViewData,
} from "../CreateTemplateView/CreateTemplateView";

export type CreateTemplateProps = {
  View?: React.ComponentType<React.ComponentProps<typeof CreateTemplateView>>;
};

const CreateTemplate = ({
  View = CreateTemplateView,
}: CreateTemplateProps): React.ReactElement => {
  const router = useRouter();

  const organization = useOrganizationContext();

  const {
    mutate: insertTemplate,
    data: template,
    isLoading,
    error,
  } = useInsertTemplate({
    onSuccess: (template) =>
      router.push(
        paths.template({
          organizationId: organization.id,
          templateId: template.id,
        })
      ),
  });

  const handleSubmit = (data: CreateTemplateViewData) =>
    insertTemplate({
      avatar: null,
      description: data.description,
      name: data.name,
      organization_id: organization.id,
    });

  return (
    <View
      isLoading={isLoading}
      template={template}
      error={error}
      onSubmit={handleSubmit}
    />
  );
};

export default React.memo(CreateTemplate);
