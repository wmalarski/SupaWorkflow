import { Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "../../../../atoms";
import { Template } from "../../../../services";
import { paths, useText } from "../../../../utils";
import { OrganizationTab, TemplateTab } from "../../../../utils/routing/types";

export type TemplatesListViewProps = {
  organizationId: number;
  templates?: Template[] | null;
  isLoading: boolean;
};

const TemplatesListView = ({
  organizationId,
  templates,
}: TemplatesListViewProps): JSX.Element => {
  const text = useText();

  return (
    <div>
      <Link
        href={paths.organization(organizationId, OrganizationTab.newTemplate)}
      >
        {text("sideBarNewTemplate")}
      </Link>
      {templates?.map((template) => (
        <Link
          key={template.id}
          href={paths.template(organizationId, template.id, TemplateTab.edit)}
        >
          <Text fontSize="sm">{template.name}</Text>
        </Link>
      ))}
    </div>
  );
};

export default TemplatesListView;
