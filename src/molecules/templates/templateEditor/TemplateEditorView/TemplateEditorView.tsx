import { Button } from "@chakra-ui/react";
import React from "react";
import { JSONValue } from "replicache";
import { Debug } from "../../../../atoms";
import { UseCreateMessageArgs } from "../../../../services/rep/messages";

export type TemplateEditorProps = {
  todos: JSONValue[];
  onNewMessageClick: (args: UseCreateMessageArgs) => void;
};

const TemplateEditor = ({
  todos,
  onNewMessageClick,
}: TemplateEditorProps): JSX.Element => {
  return (
    <>
      <Button
        onClick={() =>
          onNewMessageClick({
            ord: todos.length,
            content: "ds",
            sender: "Me",
          })
        }
      >
        New message
      </Button>
      <Debug value={todos} />
    </>
  );
};

export default TemplateEditor;
