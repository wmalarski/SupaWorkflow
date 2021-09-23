import { Center, Heading, VStack } from "@chakra-ui/react";
import { Link } from "atoms";
import React from "react";
import { paths, useText } from "utils";

const LandingTopView = (): React.ReactElement => {
  const text = useText();

  return (
    <Center h="70vh">
      <VStack>
        <Heading size="4xl">{text("appName")}</Heading>
        <Link href={paths.signUp}>{text("signUpHeader")}</Link>
      </VStack>
    </Center>
  );
};

export default LandingTopView;
