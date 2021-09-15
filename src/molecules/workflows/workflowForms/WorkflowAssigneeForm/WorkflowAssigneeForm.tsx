import { Heading, VStack } from "@chakra-ui/layout";
import React, { useMemo } from "react";
import { SelectTeamMemberRow, Team } from "../../../../services";
import { useText } from "../../../../utils";

export type WorkflowAssigneeFormProps = {
  assigneeId: number | null;
  teamId: number | null;
  teams: Team[];
  teamMembers: SelectTeamMemberRow[];
  onChange: (assigneeId: number | null) => void;
};

const WorkflowAssigneeForm = ({
  assigneeId,
  onChange,
  teamId,
  teams,
  teamMembers,
}: WorkflowAssigneeFormProps): React.ReactElement => {
  const text = useText();

  const { team, members } = useMemo(
    () => ({
      team: teams.find((t) => t.id === teamId),
      members: teamMembers.filter((member) => member.team_id === teamId),
    }),
    [teamId, teamMembers, teams]
  );

  return (
    <VStack>
      <Heading size="xs">{text("workflowNodeAssignee")}</Heading>
    </VStack>
  );
};

export default WorkflowAssigneeForm;
