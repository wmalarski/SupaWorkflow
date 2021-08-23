import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";
import React from "react";

export default function ThemeButton(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode} size="sm" borderRadius="3rem">
      {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
