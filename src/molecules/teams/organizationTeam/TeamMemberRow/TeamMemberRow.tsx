import { Button, Td, Tr } from "@chakra-ui/react";
import React from "react";
import { SelectTeamMemberRow } from "../../../../services";
import { OrganizationRoleGuard, useText } from "../../../../utils";

export type TeamMemberRowProps = {
  index: number;
  isLoading?: boolean;
  teamMember: SelectTeamMemberRow;
  onDeleteClick: () => void;
};

const TeamMemberRow = ({
  index,
  onDeleteClick,
  isLoading,
  teamMember,
}: TeamMemberRowProps): JSX.Element => {
  const text = useText();

  return (
    <Tr>
      <Td>{index + 1}</Td>
      <Td>{teamMember.profile_id}</Td>
      <OrganizationRoleGuard roles={["mod", "owner"]}>
        <Td>
          <Button isLoading={isLoading} onClick={onDeleteClick}>
            {text("deleteOrganizationMember")}
          </Button>
        </Td>
      </OrganizationRoleGuard>
    </Tr>
  );
};

export default TeamMemberRow;
