import { Heading, Select, Text, VStack } from "@chakra-ui/react";
import { Team } from "@supa-workflow/services";
import React from "react";
import { useText } from "../../../../utils";

export type TemplateTeamsFormProps = {
  teams: Team[];
  selected: number | null;
  onChange: (selected: number | null) => void;
};

const TemplateTeamsForm = ({
  teams,
  selected,
  onChange,
}: TemplateTeamsFormProps): React.ReactElement => {
  const text = useText();

  return (
    <VStack>
      <Heading size="xs">{text("teamsTemplateNode")}</Heading>
      <Select
        size="sm"
        value={selected ?? undefined}
        onChange={(event) => onChange(Number(event.target.value))}
      >
        {teams.map((team) => (
          <Text as="option" key={team.id} value={team.id} fontSize="sm">
            {team.name}
          </Text>
        ))}
      </Select>
    </VStack>
  );
};

export default TemplateTeamsForm;
