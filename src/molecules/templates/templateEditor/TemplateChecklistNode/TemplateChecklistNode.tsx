import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Message } from "../../../../services";
import { MessageNodeChecklistTemplateData } from "../../../../services/nodes";
import { MutationArgs } from "../../../../utils/rep";

export type TemplateChecklistNodeProps = {
  message: Message;
  data: MessageNodeChecklistTemplateData;
  onChange: (message: MutationArgs["putMessage"]) => void;
};

export type TemplateChecklistNodeFormData = {
  tasks: string[];
};

const TemplateChecklistNode = ({
  message,
  data,
  onChange,
}: TemplateChecklistNodeProps): React.ReactElement => {
  const [count, setCount] = useState(data.tasks.length);

  const { register, handleSubmit } = useForm<TemplateChecklistNodeFormData>({
    defaultValues: { tasks: data.tasks },
  });

  const handleValid = (newData: TemplateChecklistNodeFormData) =>
    onChange({
      data: { ...data, tasks: newData.tasks },
      id: message.id,
      template_id: message.template_id,
      workflow_id: message.workflow_id,
    });

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      {`TemplateChecklistNode: `}
      {Array(count)
        .fill(null)
        .map((_, index) => (
          <Stack key={index}>
            <Input {...register(`tasks.${index}`)} />
          </Stack>
        ))}
      <Button onClick={() => setCount(count + 1)}>Add</Button>
      <Button type="submit">Save</Button>
    </form>
  );
};

export default TemplateChecklistNode;
