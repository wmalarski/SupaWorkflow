import { Checkbox, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Team } from "../../../../services";
import { useText } from "../../../../utils";

export type TemplateTeamsFormProps = {
  teams: Team[];
  selected: number[];
  onChange: (selected: number[]) => void;
};

const TemplateTeamsForm = ({
  teams,
  selected,
  onChange,
}: TemplateTeamsFormProps): React.ReactElement => {
  const text = useText();

  return (
    <VStack width="100%">
      <Heading size="xs">{text("teamsTemplateNode")}</Heading>
      <VStack maxHeight={100} overflowY="auto" width="100%">
        {teams.map((team) => (
          <Checkbox
            key={team.id}
            isChecked={selected.includes(team.id)}
            onChange={(event) =>
              onChange(
                event.target.checked
                  ? [...selected, team.id]
                  : selected.filter((e) => e !== team.id)
              )
            }
          >
            <Text fontSize="sm">{team.name}</Text>
          </Checkbox>
        ))}
      </VStack>
    </VStack>
  );
};

export default TemplateTeamsForm;
