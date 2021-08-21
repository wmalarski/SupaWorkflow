import { StackDivider, VStack } from "@chakra-ui/react";
import React from "react";
import { Message } from "../../../../services";
import { MutationArgs } from "../../../../utils";
import MessageForm from "../MessageForm/MessageForm";
import MessageListItem from "../MessageListItem/MessageListItem";

export type TemplateEditorProps = {
  templateId: number;
  messages: Message[];
  onMessageChange: (args: MutationArgs["putMessage"]) => void;
  onDeleteClick: (args: MutationArgs["delMessage"]) => void;
};

const TemplateEditor = ({
  templateId,
  messages,
  onMessageChange,
  onDeleteClick,
}: TemplateEditorProps): JSX.Element => (
  <>
    <MessageForm templateId={templateId} onCreateClick={onMessageChange} />
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
