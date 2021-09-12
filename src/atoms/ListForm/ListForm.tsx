import { Button } from "@chakra-ui/button";
import {
  AddIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  DeleteIcon,
} from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import { HStack, VStack } from "@chakra-ui/layout";
import { ButtonGroup, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export type ListFormData = {
  entries: string[];
};

export type AfterRendererProps = {
  index: number;
};

export type ListFormProps = {
  entries: string[];
  text: {
    add: string;
    up: string;
    down: string;
    delete: string;
    save: string;
  };
  onChange: (entries: string[]) => void;
  AfterRenderer?: React.ComponentType<AfterRendererProps>;
};

const ListForm = ({
  entries,
  text,
  onChange,
  AfterRenderer,
}: ListFormProps): React.ReactElement => {
  const [count, setCount] = useState<number>(entries.length);

  const { formState, register, handleSubmit, getValues, setValue } =
    useForm<ListFormData>({ defaultValues: { entries } });

  const handleDelete = (index: number) => () => {
    const newEntries = [...getValues("entries")];
    newEntries.splice(index, 1);
    setValue(`entries.${index}`, "");
    setValue("entries", newEntries);
    setCount(count - 1);
  };

  const handleAdd = () => {
    setValue(`entries.${count + 1}`, "");
    setCount(count + 1);
  };

  const handleUp = (index: number) => () => {
    const newEntries = [...getValues("entries")];
    const [entry] = newEntries.splice(index, 1);
    newEntries.splice(index - 1, 0, entry);
    setValue("entries", newEntries);
  };

  const handleDown = (index: number) => () => {
    const newEntries = [...getValues("entries")];
    const [entry] = newEntries.splice(index, 1);
    newEntries.splice(index + 1, 0, entry);
    setValue("entries", newEntries);
  };

  return (
    <form onSubmit={handleSubmit(onChange)}>
      <VStack spacing={2}>
        {Array(count)
          .fill(null)
          .map((_, index) => (
            <HStack key={index}>
              <Input size="xs" {...register(`entries.${index}`)} />
              <ButtonGroup isAttached>
                <IconButton
                  aria-label={text.up}
                  onClick={handleUp(index)}
                  disabled={index === 0}
                  size="xs"
                >
                  <ChevronUpIcon />
                </IconButton>
                <IconButton
                  aria-label={text.down}
                  onClick={handleDown(index)}
                  disabled={index === count - 1}
                  size="xs"
                >
                  <ChevronDownIcon />
                </IconButton>
                <IconButton
                  aria-label={text.delete}
                  onClick={handleDelete(index)}
                  disabled={count < 2}
                  size="xs"
                >
                  <DeleteIcon />
                </IconButton>
              </ButtonGroup>
              {AfterRenderer && <AfterRenderer index={index} />}
            </HStack>
          ))}
        <ButtonGroup isAttached>
          <Button onClick={handleAdd} size="xs" leftIcon={<AddIcon />}>
            {text.add}
          </Button>
          <Button
            type="submit"
            size="xs"
            leftIcon={<CheckIcon />}
            disabled={!formState.isDirty}
          >
            {text.save}
          </Button>
        </ButtonGroup>
      </VStack>
    </form>
  );
};

export default ListForm;
