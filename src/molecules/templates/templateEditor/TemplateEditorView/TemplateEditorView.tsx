import { Button, StackDivider, VStack } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import React from "react";
import { Message } from "../../../../services/types";
import { MutationArgs } from "../../../../utils/rep/types";
import MessageListItem from "../MessageListItem/MessageListItem";

export type TemplateEditorProps = {
  messages: Message[];
  onNewMessageClick: (args: MutationArgs["createMessage"]) => void;
};

const TemplateEditor = ({
  messages,
  onNewMessageClick,
}: TemplateEditorProps): JSX.Element => {
  return (
    <>
      <Button
        onClick={() =>
          onNewMessageClick({
            id: nanoid(),
            ord: messages.length,
            content: "ds",
            sender: "Me",
          })
        }
      >
        New message
      </Button>
      <VStack divider={<StackDivider borderColor="gray.200" />}>
        {messages.map((message) => (
          <MessageListItem key={message.id} message={message} />
        ))}
      </VStack>
    </>
  );
};

export default TemplateEditor;
