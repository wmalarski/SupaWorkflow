import { Table, Tbody, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import React from "react";
import { Pagination } from "../../../../atoms";
import { SelectTeamMemberRow } from "../../../../services";
import { OrganizationRoleGuard, useText } from "../../../../utils";
import TeamMemberRow from "../TeamMemberRow/TeamMemberRow";

export type OrganizationTeamViewProps = {
  page: number;
  pageSize: number;
  count?: number;
  teamMembers?: SelectTeamMemberRow[] | null;
  isLoading?: boolean;
  onPageChange: (page: number) => void;
  onDeleteClick: (teamMemberId: number) => void;
};

const OrganizationTeamView = ({
  page,
  pageSize,
  count,
  teamMembers,
  isLoading,
  onDeleteClick,
  onPageChange,
}: OrganizationTeamViewProps): React.ReactElement => {
  const text = useText();

  return (
    <VStack>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>{text("organizationMemberHeaderIndex")}</Th>
            <Th>{text("organizationMemberHeaderName")}</Th>
            <OrganizationRoleGuard roles={["mod", "owner"]}>
              <Th>{text("organizationMemberHeaderDelete")}</Th>
            </OrganizationRoleGuard>
          </Tr>
        </Thead>
        <Tbody>
          {teamMembers?.map((teamMember, index) => (
            <TeamMemberRow
              key={teamMember.id}
              index={index}
              teamMember={teamMember}
              onDeleteClick={() => onDeleteClick(teamMember.id)}
            />
          ))}
        </Tbody>
      </Table>
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

export default OrganizationTeamView;
