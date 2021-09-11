import React, { useMemo } from "react";
import ReactFlow, { Elements } from "react-flow-renderer";
import { useCallback } from "react-redux/node_modules/@types/react";
import { Message } from "../../../../services";
import { MutationArgs } from "../../../../utils/rep";
import TemplateNode from "../TemplateNode/TemplateNode";
import { TemplateNodeData } from "../types";
import {
  elementsToMessages,
  messagesToElements,
} from "./TemplateEditorView.utils";

export type TemplateEditorViewProps = {
  templateId: number;
  messages: Message[];
  onChange: (args: MutationArgs["putMessage"]) => void;
  onDelete: (args: MutationArgs["delMessage"]) => void;
};

const TemplateEditorView = ({
  messages,
  onChange,
  onDelete,
}: TemplateEditorViewProps): JSX.Element => {
  const elements = useMemo<Elements<TemplateNodeData>>(
    () => messagesToElements({ messages, onChange, renderer: TemplateNode }),
    [messages, onChange]
  );

  const handleElementsRemove = useCallback(
    (els: Elements<TemplateNodeData>) =>
      elementsToMessages(els).forEach(
        ({ data, id, template_id, workflow_id }) =>
          onDelete({ data, id, template_id, workflow_id })
      ),
    []
  );

  return (
    <div style={{ height: 300 }}>
      <ReactFlow
        elements={elements}
        onElementsRemove={handleElementsRemove}
        snapToGrid
        deleteKeyCode={46} /* 'delete'-key */
      />
    </div>
    // <>
    //   <MessageForm templateId={templateId} onCreateClick={onMessageChange} />
    //   <VStack divider={<StackDivider borderColor="gray.200" />}>
    //     {messages.map((message) => (
    //       <MessageListItem
    //         key={message.id}
    //         message={message}
    //         onMessageChange={onMessageChange}
    //         onDeleteClick={onDeleteClick}
    //       />
    //     ))}
    //   </VStack>
    // </>
  );
};

export default TemplateEditorView;
