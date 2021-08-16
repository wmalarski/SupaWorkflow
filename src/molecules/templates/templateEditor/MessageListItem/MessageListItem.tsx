import { Button, Heading, HStack, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Message } from "../../../../services/types";
import { MutationArgs } from "../../../../utils/rep/types";
import useText from "../../../../utils/translations/useText";

export type MessageListItemProps = {
  message: Message;
  onMessageChange: (args: MutationArgs["putMessage"]) => void;
  onDeleteClick: (args: MutationArgs["deleteMessage"]) => void;
};

const MessageListItem = ({
  message,
  onMessageChange,
  onDeleteClick,
}: MessageListItemProps): JSX.Element => {
  const text = useText();

  const { content, id, sender, ord, version } = message;

  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState(content);

  return (
    <HStack>
      <Heading size="sm">{sender}</Heading>
      {isEditing ? (
        <>
          <Input
            value={newContent}
            onChange={(event) => setNewContent(event.target.value)}
          />
          <Button
            onClick={() => {
              onMessageChange({ id, content: newContent, sender, ord });
              setIsEditing(false);
            }}
          >
            {text("updateMessage")}
          </Button>
        </>
      ) : (
        <Text size="md">{content}</Text>
      )}
      <Text size="xs">{JSON.stringify({ ord, version })}</Text>
      <Button onClick={() => onDeleteClick({ id, content, ord, sender })}>
        {text("deleteMessage")}
      </Button>
      <Button onClick={() => setIsEditing((current) => !current)}>
        {text("editMessage")}
      </Button>
    </HStack>
  );
};

export default MessageListItem;
