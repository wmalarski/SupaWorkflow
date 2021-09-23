import { Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "../../../../atoms";
import { paths, useText } from "../../../../utils";

const LandingHeaderView = (): React.ReactElement => {
  const text = useText();

  return (
    <HStack spacing={5}>
      <Link href={paths.home}>
        <Heading size="md">{text("appName")}</Heading>
      </Link>
      <Link href={paths.dashboard(null)}>
        {text("navigationOrganizations")}
      </Link>
    </HStack>
  );
};

export default LandingHeaderView;
