import { Button, HStack, Input } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { MutationArgs } from "../../../../utils/rep/types";
import useText from "../../../../utils/translations/useText";

export type MessageFormProps = {
  messagesLength: number;
  onCreateClick: (args: MutationArgs["putMessage"]) => void;
};

const MessageForm = ({
  messagesLength,
  onCreateClick,
}: MessageFormProps): JSX.Element => {
  const text = useText();

  const [content, setContent] = useState<string>("");
  const [sender, setSender] = useState<string>("");

  return (
    <HStack>
      <Input
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <Input
        value={sender}
        onChange={(event) => setSender(event.target.value)}
      />
      <Button
        onClick={() =>
          onCreateClick({
            id: nanoid(),
            ord: messagesLength,
            content,
            sender,
          })
        }
      >
        {text("addMessage")}
      </Button>
    </HStack>
  );
};

export default MessageForm;
