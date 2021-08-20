import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Page from "../Page/Page";

export type GridTemplateProps = {
  corner?: React.ReactNode;
  sideBar?: React.ReactNode;
  header?: React.ReactNode;
  children?: React.ReactNode;
};

const GridTemplate = ({
  corner,
  children,
  header,
  sideBar,
}: GridTemplateProps): JSX.Element => {
  return (
    <Page>
      <Grid templateRows="auto 1fr" templateColumns="auto 1fr">
        <GridItem
          borderColor="gray"
          borderBottomWidth={1}
          borderRightWidth={1}
          padding={1}
        >
          {corner}
        </GridItem>
        <GridItem borderColor="gray" borderBottomWidth={1} padding={1}>
          {header}
        </GridItem>
        <GridItem borderColor="gray" borderRightWidth={1} padding={1}>
          {sideBar}
        </GridItem>
        <GridItem borderColor="gray" padding={1}>
          {children}
        </GridItem>
      </Grid>
    </Page>
  );
};

export default GridTemplate;
