import { Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link, Pagination } from "../../../../atoms";
import { Template } from "../../../../services";
import { paths, useText } from "../../../../utils";
import { OrganizationTab, TemplateTab } from "../../../../utils/routing/types";

export type TemplatesListViewProps = {
  page: number;
  pageSize: number;
  organizationId: number;
  templates?: Template[] | null;
  count?: number | null;
  isLoading: boolean;
  onPageChange: (page: number) => void;
};

const TemplatesListView = ({
  organizationId,
  templates,
  page,
  count,
  pageSize,
  isLoading,
  onPageChange,
}: TemplatesListViewProps): JSX.Element => {
  const text = useText();

  return (
    <VStack>
      <Link
        href={paths.organization(organizationId, OrganizationTab.newTemplate)}
      >
        {text("sideBarNewTemplate")}
      </Link>
      {templates?.map((template) => (
        <Link
          key={template.id}
          href={paths.template(
            template.organization_id,
            template.id,
            TemplateTab.edit
          )}
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
