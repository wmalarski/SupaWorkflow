import { Checkbox, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Team } from "../../../../services";
import { useText } from "../../../../utils";

export type TemplateNodeTeamsFormProps = {
  teams: Team[];
  selected: number[];
  onChange: (selected: number[]) => void;
};

const TemplateNodeTeamsForm = ({
  teams,
  selected,
  onChange,
}: TemplateNodeTeamsFormProps): React.ReactElement => {
  const text = useText();

  return (
    <VStack>
      <Heading size="xs">{text("teamsTemplateNode")}</Heading>
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
  );
};

export default TemplateNodeTeamsForm;
