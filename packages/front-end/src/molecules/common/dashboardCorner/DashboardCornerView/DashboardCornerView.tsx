import { Center, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "../../../../atoms";
import { paths, useText } from "../../../../utils";

const DashboardCornerView = (): React.ReactElement => {
  const text = useText();

  return (
    <Center h="100%">
      <Link href={paths.home}>
        <Heading size="md">{text("appName")}</Heading>
      </Link>
    </Center>
  );
};

export default DashboardCornerView;