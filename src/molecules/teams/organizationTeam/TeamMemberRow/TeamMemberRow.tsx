import { Button, Td, Tr } from "@chakra-ui/react";
import React from "react";
import { OrganizationRole, SelectTeamMemberRow } from "services";
import { useText } from "utils";

export type TeamMemberRowProps = {
  index: number;
  isLoading?: boolean;
  teamMember: SelectTeamMemberRow;
  organizationRole: OrganizationRole;
  onDeleteClick: () => void;
};

const TeamMemberRow = ({
  index,
  onDeleteClick,
  isLoading,
  teamMember,
  organizationRole,
}: TeamMemberRowProps): React.ReactElement => {
  const text = useText();

  return (
    <Tr>
      <Td>{index + 1}</Td>
      <Td>{teamMember.profile_id}</Td>
      {["mod", "owner"].includes(organizationRole) && (
        <Td>
          <Button isLoading={isLoading} onClick={onDeleteClick}>
            {text("deleteOrganizationMember")}
          </Button>
        </Td>
      )}
    </Tr>
  );
};

export default TeamMemberRow;
