import { Heading, HStack } from "@chakra-ui/react";
import { Link, ThemeButton } from "atoms";
import React from "react";
import { paths, useText } from "utils";

const AnonHeaderView = (): React.ReactElement => {
  const text = useText();

  return (
    <HStack justifyContent="space-between">
      <HStack spacing={3}>
        <Link href={paths.home}>
          <Heading size="md">{text("appName")}</Heading>
        </Link>
      </HStack>
      <HStack spacing={3}>
        <ThemeButton />
        <Link href={paths.signIn}>{text("signInHeader")}</Link>
        <Link href={paths.signUp}>{text("signUpHeader")}</Link>
      </HStack>
    </HStack>
  );
};

export default AnonHeaderView;
