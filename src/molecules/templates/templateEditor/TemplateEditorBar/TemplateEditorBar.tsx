import { CheckIcon, EditIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { MessageNodeType } from "../../../../services/nodes";
import { useText } from "../../../../utils";
import { MutationArgs } from "../../../../utils/rep";
import { getNewMessage } from "./TemplateEditorBar.utils";

export type TemplateEditorBarProps = {
  templateId: number;
  onChange: (args: MutationArgs["putMessage"]) => void;
};

const TemplateEditorBar = ({
  templateId,
  onChange,
}: TemplateEditorBarProps): React.ReactElement => {
  const text = useText();

  const handleAddElement = useCallback(
    (datatype: MessageNodeType) => () =>
      onChange(getNewMessage({ datatype, templateId })),
    [onChange, templateId]
  );

  return (
    <ButtonGroup isAttached>
      <Button
        onClick={handleAddElement(MessageNodeType.FormTemplate)}
        size="xs"
        leftIcon={<EditIcon />}
      >
        {text("formTemplateNode")}
      </Button>
      <Button
        onClick={handleAddElement(MessageNodeType.DecisionTemplate)}
        size="xs"
        leftIcon={<HamburgerIcon />}
      >
        {text("decisionTemplateNode")}
      </Button>
      <Button
        onClick={handleAddElement(MessageNodeType.ChecklistTemplate)}
        size="xs"
        leftIcon={<CheckIcon />}
      >
        {text("checklistTemplateNode")}
      </Button>
    </ButtonGroup>
  );
};

export default TemplateEditorBar;
