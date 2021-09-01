import { Button, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Autocomplete } from "../../../../atoms";
import { SelectOrganizationMembersRow, TeamRole } from "../../../../services";
import { useText } from "../../../../utils";

export type NewTeamMemberViewData = {
  profileId: number;
  role: TeamRole;
};

export type NewTeamMemberViewProps = {
  members?: SelectOrganizationMembersRow[] | null;
  onSearch: (name?: string) => void;
  onSubmit: (data: NewTeamMemberViewData) => void;
};

const NewTeamMemberView = ({
  members,
  onSubmit,
  onSearch,
}: NewTeamMemberViewProps): JSX.Element => {
  const text = useText();

  const [selectedMember, setSelectedMember] =
    useState<SelectOrganizationMembersRow | null>(null);

  return (
    <VStack>
      <Autocomplete
        label={text("addTeamMemberLabel")}
        items={members ?? []}
        itemToString={(member) => member?.profile.name ?? ""}
        onInputValueChange={({ inputValue }) => onSearch(inputValue)}
        onSelectedItemChange={({ selectedItem }) =>
          setSelectedMember(selectedItem ?? null)
        }
      />
      <Button
        isDisabled={!selectedMember}
        onClick={() =>
          selectedMember &&
          onSubmit({
            profileId: selectedMember?.profile_id,
            role: "user",
          })
        }
      >
        {text("addTeamMemberButton")}
      </Button>
    </VStack>
  );
};

export default NewTeamMemberView;
