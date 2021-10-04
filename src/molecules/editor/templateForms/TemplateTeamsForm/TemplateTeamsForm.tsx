import { Heading, Select, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Team } from "services";
import { useText } from "utils";

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

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    onChange(Number(event.target.value));

  return (
    <VStack>
      <Heading size="xs">{text("teamsTemplateNode")}</Heading>
      <Select size="sm" value={selected ?? undefined} onChange={handleChange}>
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
