import { Heading, VStack } from "@chakra-ui/layout";
import { HStack, Select, Text } from "@chakra-ui/react";
import React from "react";
import { SelectTeamMemberRow, Team } from "../../../../services";
import { useText } from "../../../../utils";

export type WorkflowAssigneeFormProps = {
  assigneeId: number | null;
  teams: Team[];
  teamId: number | null;
  teamMembers: SelectTeamMemberRow[];
  onChange: (assigneeId: number | null) => void;
};

const WorkflowAssigneeForm = ({
  assigneeId,
  teams,
  teamId,
  teamMembers,
  onChange,
}: WorkflowAssigneeFormProps): React.ReactElement => {
  const text = useText();

  const team = teams.find((t) => t.id === teamId) ?? null;
  const members = teamMembers.filter((member) => member.team_id === teamId);

  return (
    <VStack>
      <Heading size="xs">{text("workflowNodeAssignee")}</Heading>
      <HStack>
        <Text fontSize="xs">
          {team ? team.name : text("workflowNodeNoTeam")}
        </Text>
        <Select
          size="sm"
          value={assigneeId ?? undefined}
          placeholder={text("workflowNodeNoneAssignee")}
          onChange={(event) =>
            onChange(
              event.target.value.length > 0 ? Number(event.target.value) : null
            )
          }
        >
          {members.map((member) => (
            <Text
              key={member.id}
              fontSize="sm"
              as="option"
              value={member.profile_id}
            >
              {member.profile.name}
            </Text>
          ))}
        </Select>
      </HStack>
    </VStack>
  );
};

export default WorkflowAssigneeForm;
