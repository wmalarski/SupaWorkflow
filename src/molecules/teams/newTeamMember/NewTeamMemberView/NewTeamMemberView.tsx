import { Input, Select, VStack } from "@chakra-ui/react";
import React from "react";
import { Profile, TeamRole } from "../../../../services";

export type NewTeamMemberViewData = {
  profileId: number;
  role: TeamRole;
};

export type NewTeamMemberViewProps = {
  profiles?: Profile[] | null;
  onSearch: (name: string) => void;
  onSubmit: (data: NewTeamMemberViewData) => void;
};

const NewTeamMemberView = ({
  profiles,
  onSubmit,
  onSearch,
}: NewTeamMemberViewProps): JSX.Element => {
  return (
    <VStack>
      <Input />
      <Select>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </VStack>
  );
};

export default NewTeamMemberView;
