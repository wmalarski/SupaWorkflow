import { Grid, GridItem, VStack } from "@chakra-ui/react";
import React from "react";
import Header from "../Header/Header";
import Page from "../Page/Page";

export type GridTemplateProps = {
  corner?: React.ReactNode;
  sideBar?: React.ReactNode;
  headerLeft?: React.ReactNode;
  headerRight?: React.ReactNode;
  children?: React.ReactNode;
};

const GridTemplate = ({
  corner,
  children,
  headerLeft,
  headerRight,
  sideBar,
}: GridTemplateProps): JSX.Element => {
  return (
    <Page hideFooter>
      <Grid
        templateRows="auto 1fr"
        templateColumns="auto 1fr"
        h="100vh"
        overflow="hidden"
      >
        <GridItem borderBottomWidth={1} borderRightWidth={1} padding={5}>
          {corner}
        </GridItem>
        <GridItem borderBottomWidth={1} padding={5}>
          <Header left={headerLeft} right={headerRight} />
        </GridItem>
        <GridItem borderRightWidth={1} padding={5}>
          {sideBar}
        </GridItem>
        <GridItem padding={5}>
          <VStack spacing={10}>{children}</VStack>
        </GridItem>
      </Grid>
    </Page>
  );
};

export default GridTemplate;
