import { CheckIcon, EditIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { MessageNodeType } from "../../../../services/nodes";
import { useText } from "../../../../utils";
import { MutationArgs } from "../../../../utils/rep";
import { getNewNodeMessage } from "./TemplateEditorBar.utils";

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
    (datatype: MessageNodeType) => () => {
      const node = getNewNodeMessage({ datatype, templateId });
      node && onChange(node);
    },
    [onChange, templateId]
  );

  return (
    <ButtonGroup isAttached>
      <Button
        onClick={handleAddElement(MessageNodeType.Form)}
        size="xs"
        leftIcon={<EditIcon />}
      >
        {text("formTemplateNode")}
      </Button>
      <Button
        onClick={handleAddElement(MessageNodeType.Decision)}
        size="xs"
        leftIcon={<HamburgerIcon />}
      >
        {text("decisionTemplateNode")}
      </Button>
      <Button
        onClick={handleAddElement(MessageNodeType.Checklist)}
        size="xs"
        leftIcon={<CheckIcon />}
      >
        {text("checklistTemplateNode")}
      </Button>
    </ButtonGroup>
  );
};

export default TemplateEditorBar;
