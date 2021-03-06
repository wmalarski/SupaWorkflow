import { Heading, HStack } from "@chakra-ui/react";
import { Link } from "atoms";
import React from "react";
import { paths, useText } from "utils";

const LandingHeaderView = (): React.ReactElement => {
  const text = useText();

  return (
    <HStack spacing={5}>
      <Link href={paths.home}>
        <Heading size="md">{text("appName")}</Heading>
      </Link>
      <Link href={paths.dashboard()}>{text("navigationOrganizations")}</Link>
    </HStack>
  );
};

export default LandingHeaderView;
