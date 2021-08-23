import { Container, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Page from "../Page/Page";

export type FormPageProps = {
  corner?: React.ReactNode;
  header?: React.ReactNode;
  children?: React.ReactNode;
};

const FormPage = ({ corner, children, header }: FormPageProps): JSX.Element => {
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
          {header}
        </GridItem>
        <GridItem colSpan={2} padding={50}>
          <Container maxW="xl" centerContent borderWidth={1} padding={50}>
            {children}
          </Container>
        </GridItem>
      </Grid>
    </Page>
  );
};

export default FormPage;
