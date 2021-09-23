import { List, VStack } from "@chakra-ui/react";
import { Workflow } from "@supa-workflow/services";
import { Pagination } from "atoms";
import React from "react";
import { useText } from "utils";
import WorkflowListItem from "../WorkflowListItem/WorkflowListItem";

export type TemplateDetailsViewProps = {
  page: number;
  pageSize: number;
  workflows?: Workflow[];
  count?: number;
  isLoading?: boolean;
  onPageChange: (page: number) => void;
};

const TemplateDetailsView = ({
  workflows,
  count,
  page,
  pageSize,
  isLoading,
  onPageChange,
}: TemplateDetailsViewProps): React.ReactElement => {
  const text = useText();

  return (
    <VStack>
      <List>
        {workflows?.map((workflow) => (
          <WorkflowListItem key={workflow.id} workflow={workflow} />
        ))}
      </List>
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

export default TemplateDetailsView;
