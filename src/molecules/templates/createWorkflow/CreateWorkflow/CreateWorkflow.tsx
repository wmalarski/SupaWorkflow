import { useRouter } from "next/router";
import React from "react";
import {
  useInsertWorkflow,
  useOrganizationContext,
  useTemplateContext,
} from "services";
import { paths } from "utils";
import CreateWorkflowView from "../CreateWorkflowView/CreateWorkflowView";

type ViewProps = React.ComponentProps<typeof CreateWorkflowView>;

export type CreateWorkflowProps = {
  View?: React.ComponentType<ViewProps>;
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
      router.push(paths.workflow(organization.id, workflow.id)),
  });

  return (
    <View
      error={error}
      workflow={data}
      isLoading={isLoading}
      onSubmit={(data) =>
        insertWorkflow({
          avatar: null,
          description: data.description,
          name: data.name,
          organization_id: organization.id,
          template_id: template.id,
        })
      }
    />
  );
};

export default React.memo(CreateWorkflow);
