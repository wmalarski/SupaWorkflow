import React from "react";
import { CreateOrganization, DashboardCorner } from "../../molecules";
import { UserNavigation } from "../../organisms";
import { FormPage } from "../../templates";
import { RouteProfileContextProvider } from "../../utils";

const NewOrganizationPage = (): JSX.Element => (
  <RouteProfileContextProvider>
    <FormPage corner={<DashboardCorner />} header={<UserNavigation />}>
      <CreateOrganization />
    </FormPage>
  </RouteProfileContextProvider>
);

export default NewOrganizationPage;
