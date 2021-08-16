import { StackDivider, VStack } from "@chakra-ui/react";
import React from "react";
import { Message } from "../../../../services/types";
import { MutationArgs } from "../../../../utils/rep/types";
import MessageForm from "../MessageForm/MessageForm";
import MessageListItem from "../MessageListItem/MessageListItem";

export type TemplateEditorProps = {
  messages: Message[];
  onMessageChange: (args: MutationArgs["putMessage"]) => void;
  onDeleteClick: (args: MutationArgs["deleteMessage"]) => void;
};

const TemplateEditor = ({
  messages,
  onMessageChange,
  onDeleteClick,
}: TemplateEditorProps): JSX.Element => (
  <>
    <MessageForm
      messagesLength={messages.length}
      onCreateClick={onMessageChange}
    />
    <VStack divider={<StackDivider borderColor="gray.200" />}>
      {messages.map((message) => (
        <MessageListItem
          key={message.id}
          message={message}
          onMessageChange={onMessageChange}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </VStack>
  </>
);

export default TemplateEditor;
