import { Center, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "../../../../atoms";
import { paths, useText } from "../../../../utils";

const DashboardCornerView = (): JSX.Element => {
  const text = useText();

  return (
    <Center>
      <Link href={paths.home}>
        <Heading size="md">{text("appName")}</Heading>
      </Link>
    </Center>
  );
};

export default DashboardCornerView;
