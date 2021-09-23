import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, HStack } from "@chakra-ui/react";
import React from "react";

export type PaginationProps = {
  children?: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
  maxPage: number;
  page: number;
  isLoading?: boolean;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  children,
  left,
  right,
  maxPage,
  page,
  isLoading,
  onPageChange,
}: PaginationProps): React.ReactElement => (
  <HStack>
    <Button
      isDisabled={page === 0}
      isLoading={isLoading}
      onClick={() => onPageChange(page - 1)}
      leftIcon={<ChevronLeftIcon />}
    >
      {left}
    </Button>
    {children}
    <Button
      isDisabled={page === maxPage}
      isLoading={isLoading}
      leftIcon={<ChevronRightIcon />}
      onClick={() => onPageChange(page + 1)}
    >
      {right}
    </Button>
  </HStack>
);

export default Pagination;
