import { Center, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "../../../../atoms";
import { paths, useText } from "../../../../utils";

const AnonHeaderView = (): JSX.Element => {
  const text = useText();

  return (
    <HStack justifyContent="space-between">
      <Center>
        <Link href={paths.home}>
          <Heading size="md">{text("appName")}</Heading>
        </Link>
      </Center>
      <HStack>
        <Link href={paths.signIn}>{text("signInHeader")}</Link>
        <Link href={paths.signUp}>{text("signUpHeader")}</Link>
      </HStack>
    </HStack>
  );
};

export default AnonHeaderView;
