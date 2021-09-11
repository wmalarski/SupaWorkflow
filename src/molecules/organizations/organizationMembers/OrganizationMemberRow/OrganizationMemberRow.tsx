import { Button, Select, Td, Tr } from "@chakra-ui/react";
import React from "react";
import { Member, OrganizationRole } from "../../../../services";
import { OrganizationRoleGuard, useText } from "../../../../utils";

export type OrganizationMemberRowProps = {
  index: number;
  isAuthor: boolean;
  isLoading: boolean;
  member: Member;
  onDeleteClick: () => void;
  onUpdateClick: (role: OrganizationRole) => void;
};

const OrganizationMemberRow = ({
  index,
  isAuthor,
  isLoading,
  member,
  onDeleteClick,
  onUpdateClick,
}: OrganizationMemberRowProps): React.ReactElement => {
  const text = useText();

  return (
    <Tr>
      <Td>{index + 1}</Td>
      <Td>{member.profile_name}</Td>
      <OrganizationRoleGuard roles={["guest", "user"]}>
        <Td>{member.member_role}</Td>
      </OrganizationRoleGuard>
      <OrganizationRoleGuard roles={["mod", "owner"]}>
        <Td>
          <Select
            value={member.member_role}
            isDisabled={isAuthor}
            onChange={(event) =>
              onUpdateClick(event.target.value as OrganizationRole)
            }
          >
            <option value="owner">{text("organizationMemberOwner")}</option>
            <option value="mod">{text("organizationMemberMod")}</option>
            <option value="user">{text("organizationMemberUser")}</option>
            <option value="guest">{text("organizationMemberGuest")}</option>
          </Select>
        </Td>
        <Td>
          <Button
            isDisabled={isAuthor}
            isLoading={isLoading}
            onClick={onDeleteClick}
          >
            {text("deleteOrganizationMember")}
          </Button>
        </Td>
      </OrganizationRoleGuard>
    </Tr>
  );
};

export default OrganizationMemberRow;
