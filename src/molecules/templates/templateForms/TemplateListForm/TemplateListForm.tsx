import {
  ChevronDownIcon,
  ChevronUpIcon,
  DeleteIcon,
  SmallAddIcon,
} from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import { HStack, VStack } from "@chakra-ui/layout";
import { ButtonGroup, Heading, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useText } from "../../../../utils";

export type ListFormData = {
  entries: string[];
};

export type AfterRendererProps = {
  index: number;
};

export type ListFormProps = {
  heading?: React.ReactNode;
  entries: string[];
  onChange: (entries: string[]) => void;
  AfterRenderer?: React.ComponentType<AfterRendererProps>;
};

const ListForm = ({
  heading,
  entries,
  onChange,
  AfterRenderer,
}: ListFormProps): React.ReactElement => {
  const text = useText();

  const [count, setCount] = useState<number>(entries.length);

  const { register, handleSubmit, getValues, setValue } = useForm<ListFormData>(
    { defaultValues: { entries }, mode: "onChange" }
  );

  const handleDelete = (index: number) => () => {
    const newEntries = [...getValues("entries")];
    newEntries.splice(index, 1);
    setValue(`entries.${index}`, "");
    setValue("entries", newEntries);
    setCount(count - 1);
  };

  const handleAdd = (index: number) => () => {
    const newEntries = [...getValues("entries")];
    newEntries.splice(index + 1, 0, "");
    setValue("entries", newEntries);
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
    <form onChange={handleSubmit(onChange)}>
      <VStack spacing={2}>
        <Heading size="xs">{heading}</Heading>
        {Array(count)
          .fill(null)
          .map((_, index) => (
            <HStack key={index}>
              <Input size="xs" {...register(`entries.${index}`)} />
              <ButtonGroup isAttached>
                <IconButton
                  aria-label={text("upTemplateNodeOption")}
                  onClick={handleUp(index)}
                  disabled={index === 0}
                  size="xs"
                >
                  <ChevronUpIcon />
                </IconButton>
                <IconButton
                  aria-label={text("downTemplateNodeOption")}
                  onClick={handleDown(index)}
                  disabled={index === count - 1}
                  size="xs"
                >
                  <ChevronDownIcon />
                </IconButton>
                <IconButton
                  aria-label={text("addTemplateNodeOption")}
                  onClick={handleAdd(index)}
                  size="xs"
                >
                  <SmallAddIcon />
                </IconButton>
                <IconButton
                  aria-label={text("deleteTemplateNodeOption")}
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
      </VStack>
    </form>
  );
};

export default ListForm;
