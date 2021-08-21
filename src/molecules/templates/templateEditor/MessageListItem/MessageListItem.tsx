import { Button, Heading, HStack, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Message } from "../../../../services";
import { MutationArgs, useText } from "../../../../utils";

export type MessageListItemProps = {
  message: Message;
  onMessageChange: (args: MutationArgs["putMessage"]) => void;
  onDeleteClick: (args: MutationArgs["delMessage"]) => void;
};

const MessageListItem = ({
  message,
  onMessageChange,
  onDeleteClick,
}: MessageListItemProps): JSX.Element => {
  const text = useText();

  const { id, data, template_id, updated_at, workflow_id } = message;

  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState(data.name);

  return (
    <HStack>
      <Heading size="sm">{updated_at}</Heading>
      {isEditing ? (
        <>
          <Input
            value={newContent}
            onChange={(event) => setNewContent(event.target.value)}
          />
          <Button
            onClick={() => {
              onMessageChange({
                id,
                data: { kind: "test", name: newContent },
                template_id,
                workflow_id: null,
              });
              setIsEditing(false);
            }}
          >
            {text("updateMessage")}
          </Button>
        </>
      ) : (
        <Text size="md">{data.name}</Text>
      )}
      <Button
        onClick={() => onDeleteClick({ id, data, template_id, workflow_id })}
      >
        {text("deleteMessage")}
      </Button>
      <Button onClick={() => setIsEditing((current) => !current)}>
        {text("editMessage")}
      </Button>
    </HStack>
  );
};

export default MessageListItem;
