import { Table, Tbody, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import React from "react";
import {
  OrganizationRole,
  SelectOrganizationMembersResult,
} from "../../../../services";
import { OrganizationRoleGuard, useText } from "../../../../utils";
import OrganizationMemberRow from "../OrganizationMemberRow/OrganizationMemberRow";

export type OrganizationMembersViewProps = {
  page: number;
  members?: SelectOrganizationMembersResult | null;
  authorId: number;
  isLoading: boolean;
  isUpdateLoading: boolean;
  loadingMemberId?: number;
  onPageChange: (page: number) => void;
  onDeleteClick: (memberId: number) => void;
  onUpdateClick: (memberId: number, role: OrganizationRole) => void;
};

const OrganizationMembersView = ({
  members,
  authorId,
  isUpdateLoading,
  loadingMemberId,
  onDeleteClick,
  onUpdateClick,
}: OrganizationMembersViewProps): JSX.Element => {
  const text = useText();

  return (
    <VStack>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th isNumeric>{text("organizationMemberHeaderIndex")}</Th>
            <Th>{text("organizationMemberHeaderName")}</Th>
            <Th>{text("organizationMemberHeaderRole")}</Th>
            <OrganizationRoleGuard roles={["mod", "owner"]}>
              <Th>{text("organizationMemberHeaderDelete")}</Th>
            </OrganizationRoleGuard>
          </Tr>
        </Thead>
        <Tbody>
          {members?.entries.map((member, index) => (
            <OrganizationMemberRow
              key={member.id}
              index={index}
              member={member}
              isAuthor={authorId === member.profile_id}
              isLoading={loadingMemberId === member.id && isUpdateLoading}
              onDeleteClick={() => onDeleteClick(member.id)}
              onUpdateClick={(role) => onUpdateClick(member.id, role)}
            />
          ))}
        </Tbody>
      </Table>
    </VStack>
  );
};

export default OrganizationMembersView;
