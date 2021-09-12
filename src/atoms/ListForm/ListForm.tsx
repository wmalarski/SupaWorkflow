import { Button } from "@chakra-ui/button";
import { ChevronDownIcon, ChevronUpIcon, DeleteIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import { HStack } from "@chakra-ui/layout";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export type ListFormData = {
  entries: string[];
};

export type ListFormProps = {
  entries: string[];
  addText: string;
  saveText: string;
  onChange: (entries: string[]) => void;
};

const ListForm = ({
  entries,
  addText,
  saveText,
  onChange,
}: ListFormProps): React.ReactElement => {
  const [count, setCount] = useState<number>(entries.length);

  const { register, handleSubmit, getValues, setValue } = useForm<ListFormData>(
    { defaultValues: { entries } }
  );

  const handleDelete = (index: number) => () => {
    const newEntries = [...getValues("entries")];
    newEntries.splice(index, 1);
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
      {Array(count)
        .fill(null)
        .map((_, index) => (
          <HStack key={index}>
            <Input {...register(`entries.${index}`)} />
            <Button onClick={handleUp(index)} disabled={index === 0}>
              <ChevronUpIcon />
            </Button>
            <Button onClick={handleDown(index)} disabled={index === count - 1}>
              <ChevronDownIcon />
            </Button>
            <Button onClick={handleDelete(index)} disabled={count < 2}>
              <DeleteIcon />
            </Button>
          </HStack>
        ))}
      <Button onClick={handleAdd}>{addText}</Button>
      <Button type="submit">{saveText}</Button>
    </form>
  );
};

export default ListForm;
