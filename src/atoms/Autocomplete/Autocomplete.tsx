import { ArrowDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormLabel,
  Input,
  List,
  ListItem,
  Stack,
} from "@chakra-ui/react";
import { useCombobox, UseComboboxStateChange } from "downshift";
import React from "react";

export type AutocompleteProps<TData> = {
  items: TData[];
  label: string;
  itemToString: (data: TData | null) => string;
  onInputValueChange: (change: UseComboboxStateChange<TData>) => void;
};

function Autocomplete<TData>({
  items,
  label,
  itemToString,
  onInputValueChange,
}: AutocompleteProps<TData>): React.ReactElement {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items,
    itemToString,
    onInputValueChange,
  });

  console.log({ selectedItem });

  return (
    <Stack>
      <FormLabel {...getLabelProps({})}>{label}</FormLabel>
      <Stack isInline {...getComboboxProps()}>
        <Input {...getInputProps()} />
        <Button {...getToggleButtonProps()}>
          <ArrowDownIcon />
        </Button>
      </Stack>
      <Box pb={4} mb={4}>
        <List
          bg="white"
          borderRadius="4px"
          border={isOpen && "1px solid rgba(0,0,0,0.1)"}
          boxShadow="6px 5px 8px rgba(0,50,30,0.02)"
          position="absolute"
          display="inline-block"
          maxHeight={80}
          overflowY="scroll"
          {...getMenuProps()}
        >
          {isOpen &&
            items.map((item, index) => (
              <ListItem
                px={2}
                py={1}
                width="100%"
                borderBottom="1px solid rgba(0,0,0,0.01)"
                key={itemToString(item)}
                bg={highlightedIndex === index ? "gray.100" : "inherit"}
                {...getItemProps({ item, index })}
              >
                <Box display="inline-flex" alignItems="center">
                  {item}
                </Box>
              </ListItem>
            ))}
        </List>
      </Box>
    </Stack>
  );
}

export default Autocomplete;
