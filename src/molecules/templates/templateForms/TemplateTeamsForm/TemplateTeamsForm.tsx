import { Heading, Select, VStack } from "@chakra-ui/react";
import React from "react";
import { Team } from "../../../../services";
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
    <VStack width="100%">
      <Heading size="xs">{text("teamsTemplateNode")}</Heading>
      <Select
        size="sm"
        value={selected ?? undefined}
        onChange={(event) => onChange(Number(event.target.value))}
      >
        {teams.map((team) => (
          <option key={team.id} value={team.id}>
            {team.name}
          </option>
        ))}
      </Select>
    </VStack>
  );
};

export default TemplateTeamsForm;
