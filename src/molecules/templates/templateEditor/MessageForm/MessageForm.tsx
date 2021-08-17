import { Button, HStack, Input } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { MutationArgs } from "../../../../utils/rep/types";
import useText from "../../../../utils/translations/useText";

export type MessageFormProps = {
  templateId: number;
  onCreateClick: (args: MutationArgs["putMessage"]) => void;
};

const MessageForm = ({
  templateId,
  onCreateClick,
}: MessageFormProps): JSX.Element => {
  const text = useText();

  const [content, setContent] = useState<string>("");

  return (
    <HStack>
      <Input
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <Button
        onClick={() =>
          onCreateClick({
            id: nanoid(),
            data: { kind: "test", name: content },
            template_id: templateId,
            workflow_id: null,
          })
        }
      >
        {text("addMessage")}
      </Button>
    </HStack>
  );
};

export default MessageForm;
