import { List, VStack } from "@chakra-ui/react";
import React from "react";
import { Pagination } from "../../../../atoms";
import { Workflow } from "../../../../services";
import { useText } from "../../../../utils";
import WorkflowListItem from "../WorkflowListItem/WorkflowListItem";

export type WorkflowsListViewProps = {
  page: number;
  pageSize: number;
  workflows?: Workflow[];
  count?: number;
  isLoading?: boolean;
  onPageChange: (page: number) => void;
};

const WorkflowsListView = ({
  workflows,
  count,
  page,
  pageSize,
  isLoading,
  onPageChange,
}: WorkflowsListViewProps): React.ReactElement => {
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

export default WorkflowsListView;
