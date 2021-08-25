import { Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "../../../../atoms";
import { paths, useText } from "../../../../utils";
import { DashboardTab } from "../../../../utils/routing/types";

const LandingHeaderView = (): JSX.Element => {
  const text = useText();

  return (
    <HStack spacing={5}>
      <Link href={paths.home}>
        <Heading size="md">{text("appName")}</Heading>
      </Link>
      <Link href={paths.dashboard(DashboardTab.dashboard)}>
        {text("navigationOrganizations")}
      </Link>
    </HStack>
  );
};

export default LandingHeaderView;
