import { Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Message } from "../../../../services/types";
import useText from "../../../../utils/translations/useText";

export type MessageListItemProps = {
  message: Message;
};

const MessageListItem = ({ message }: MessageListItemProps): JSX.Element => {
  const text = useText();

  return (
    <HStack>
      <Heading size="sm">{message.sender}</Heading>
      <Text size="md">{message.content}</Text>
      <Text size="xs">{`${text("version")}: ${message.version}`}</Text>
    </HStack>
  );
};

export default MessageListItem;
