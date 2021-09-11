import { Button, VStack } from "@chakra-ui/react";
import { PostgrestError } from "@supabase/supabase-js";
import React, { useState } from "react";
import { Autocomplete } from "../../../../atoms";
import { Member, TeamRole } from "../../../../services";
import { useText } from "../../../../utils";

export type NewTeamMemberViewData = {
  profileId: number;
  role: TeamRole;
};

export type NewTeamMemberViewProps = {
  members?: Member[] | null;
  isLoading?: boolean;
  error?: PostgrestError | null;
  onSearch: (name?: string) => void;
  onSubmit: (data: NewTeamMemberViewData) => void;
};

const NewTeamMemberView = ({
  members,
  onSubmit,
  onSearch,
}: NewTeamMemberViewProps): React.ReactElement => {
  const text = useText();

  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  return (
    <VStack>
      <Autocomplete
        label={text("addTeamMemberLabel")}
        items={members ?? []}
        itemToString={(member) => member?.profile_name ?? ""}
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
