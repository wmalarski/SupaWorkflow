import { SmallAddIcon } from "@chakra-ui/icons";
import {
  Heading,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Tag,
  TagLabel,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Team } from "../../../../services";
import { useText } from "../../../../utils";
import { joinTeamId } from "./TemplateNodeTeamsForm.utils";

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
      <HStack>
        <Heading size="xs">{text("teamsTemplateNode")}</Heading>
        <Menu closeOnSelect={false}>
          <MenuButton as={IconButton} size="sm">
            <SmallAddIcon />
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuOptionGroup
              type="checkbox"
              value={selected.map(String)}
              onChange={(values) =>
                Array.isArray(values) && onChange(values.map(Number))
              }
            >
              {teams.map((team) => (
                <MenuItemOption key={team.id} value={String(team.id)}>
                  {team.name}
                </MenuItemOption>
              ))}
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </HStack>
      <HStack>
        {joinTeamId({ ids: selected, teams }).map((team) => (
          <Tag
            key={team.id}
            borderRadius="full"
            variant="solid"
            bgColor={team.color}
          >
            <TagLabel>{team.name}</TagLabel>
          </Tag>
        ))}
      </HStack>
    </VStack>
  );
};

export default TemplateNodeTeamsForm;
