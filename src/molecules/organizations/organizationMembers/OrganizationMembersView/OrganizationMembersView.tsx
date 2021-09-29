import { Table, Tbody, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import { Pagination } from "atoms";
import React from "react";
import {
  OrganizationMember,
  OrganizationRole,
  SelectMembersResult,
} from "services";
import { useText } from "utils";
import OrganizationMemberRow from "../OrganizationMemberRow/OrganizationMemberRow";

export type OrganizationMembersViewProps = {
  page: number;
  pageSize: number;
  currentMember: OrganizationMember;
  members?: SelectMembersResult | null;
  authorId: number;
  isLoading: boolean;
  isDeleteSuccess: boolean;
  isUpdateLoading: boolean;
  loadingMemberId?: number;
  onPageChange: (page: number) => void;
  onDeleteClick: (memberId: number) => void;
  onUpdateClick: (memberId: number, role: OrganizationRole) => void;
};

const OrganizationMembersView = ({
  page,
  pageSize,
  currentMember,
  members,
  authorId,
  isLoading,
  isUpdateLoading,
  loadingMemberId,
  onPageChange,
  onDeleteClick,
  onUpdateClick,
}: OrganizationMembersViewProps): React.ReactElement => {
  const text = useText();

  return (
    <VStack>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>{text("organizationMemberHeaderIndex")}</Th>
            <Th>{text("organizationMemberHeaderName")}</Th>
            <Th>{text("organizationMemberHeaderRole")}</Th>
            {["mod", "owner"].includes(currentMember.role) && (
              <Th>{text("organizationMemberHeaderDelete")}</Th>
            )}
          </Tr>
        </Thead>
        <Tbody>
          {members?.entries.map((member, index) => (
            <OrganizationMemberRow
              key={member.member_id}
              index={index}
              member={member}
              isAuthor={authorId === member.profile_id}
              isLoading={
                loadingMemberId === member.member_id && isUpdateLoading
              }
              onDeleteClick={() => onDeleteClick(member.member_id)}
              onUpdateClick={(role) => onUpdateClick(member.member_id, role)}
            />
          ))}
        </Tbody>
      </Table>
      <Pagination
        page={page}
        onPageChange={onPageChange}
        maxPage={Math.floor((members?.count ?? 0) / pageSize)}
        isLoading={isLoading}
        left={text("previousPage")}
        right={text("nextPage")}
      >
        {page + 1}
      </Pagination>
    </VStack>
  );
};

export default OrganizationMembersView;
