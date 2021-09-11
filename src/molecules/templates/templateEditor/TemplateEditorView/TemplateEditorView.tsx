import React, { useState } from "react";
import ReactFlow, {
  addEdge,
  Connection,
  Edge,
  Elements,
  removeElements,
} from "react-flow-renderer";
import { Message } from "../../../../services";
import { MutationArgs } from "../../../../utils/rep";

export type TemplateEditorViewProps = {
  templateId: number;
  messages: Message[];
  onMessageChange: (args: MutationArgs["putMessage"]) => void;
  onDeleteClick: (args: MutationArgs["delMessage"]) => void;
};

const initialElements: Elements = [
  {
    id: "1",
    type: "input", // input node
    data: { label: "Input Node" },
    position: { x: 250, y: 25 },
  },
  // default node
  {
    id: "2",
    // you can also pass a React component as a label
    data: { label: <div>Default Node</div> },
    position: { x: 100, y: 125 },
    label: "Label456",
  },
  {
    id: "3",
    type: "output", // output node
    data: { label: "Output Node" },
    position: { x: 250, y: 250 },
  },
  // animated edge
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e2-3", source: "2", target: "3", label: "Label123" },
];

const TemplateEditorView = ({
  templateId,
  messages,
  onMessageChange,
  onDeleteClick,
}: TemplateEditorViewProps): JSX.Element => {
  const [elements, setElements] = useState<Elements>(initialElements);

  const onElementsRemove = (elementsToRemove: Elements) =>
    setElements((els) => removeElements(elementsToRemove, els));

  const onConnect = (params: Edge | Connection) =>
    setElements((els) => addEdge(params, els));

  return (
    <div style={{ height: 300 }}>
      <ReactFlow
        elements={elements}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
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
