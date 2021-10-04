import { useRouter } from "next/router";
import React from "react";
import {
  useInsertWorkflow,
  useOrganizationContext,
  useTemplateContext,
} from "services";
import { paths } from "utils";
import CreateWorkflowView, {
  CreateWorkflowViewData,
} from "../CreateWorkflowView/CreateWorkflowView";

export type CreateWorkflowProps = {
  View?: React.ComponentType<React.ComponentProps<typeof CreateWorkflowView>>;
};

const CreateWorkflow = ({
  View = CreateWorkflowView,
}: CreateWorkflowProps): React.ReactElement => {
  const router = useRouter();

  const organization = useOrganizationContext();
  const template = useTemplateContext();

  const {
    mutate: insertWorkflow,
    data,
    isLoading,
    error,
  } = useInsertWorkflow({
    onSuccess: (workflow) =>
      router.push(
        paths.workflow({
          organizationId: organization.id,
          workflowId: workflow.id,
        })
      ),
  });

  const handleSubmit = (data: CreateWorkflowViewData) =>
    insertWorkflow({
      avatar: null,
      description: data.description,
      name: data.name,
      organization_id: organization.id,
      template_id: template.id,
    });

  return (
    <View
      error={error}
      workflow={data}
      isLoading={isLoading}
      onSubmit={handleSubmit}
    />
  );
};

export default React.memo(CreateWorkflow);
