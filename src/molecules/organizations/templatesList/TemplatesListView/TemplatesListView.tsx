import { Text, VStack } from "@chakra-ui/react";
import { Link, Pagination } from "atoms";
import React from "react";
import { Template } from "services";
import {
  OrganizationDialog,
  OrganizationTab,
  paths,
  TemplateTab,
  useText,
} from "utils";

export type TemplatesListViewProps = {
  page: number;
  pageSize: number;
  organizationId: number;
  templates?: Template[] | null;
  count?: number | null;
  isLoading: boolean;
  tab: OrganizationTab | null;
  onPageChange: (page: number) => void;
};

const TemplatesListView = ({
  organizationId,
  templates,
  page,
  count,
  pageSize,
  isLoading,
  tab,
  onPageChange,
}: TemplatesListViewProps): React.ReactElement => {
  const text = useText();

  return (
    <VStack>
      <Link
        href={paths.organization({
          organizationId,
          tab,
          dialog: OrganizationDialog.newTemplate,
        })}
      >
        {text("navigationTemplateNew")}
      </Link>
      {templates?.map((template) => (
        <Link
          key={template.id}
          href={paths.template({
            organizationId: template.organization_id,
            templateId: template.id,
            tab: TemplateTab.edit,
          })}
        >
          <Text fontSize="sm">{template.name}</Text>
        </Link>
      ))}
      <Pagination
        page={page}
        onPageChange={onPageChange}
        maxPage={Math.floor((count ?? 0) / pageSize)}
        isLoading={isLoading}
        left={text("previousPage")}
        right={text("nextPage")}
      >
        {page + 1}
      </Pagination>
    </VStack>
  );
};

export default TemplatesListView;
