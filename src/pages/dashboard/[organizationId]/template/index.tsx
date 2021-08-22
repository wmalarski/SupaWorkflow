import React from "react";
import { Debug } from "../../../../atoms";
import { TemplatesList } from "../../../../molecules";
import { UserNavigation } from "../../../../organisms";
import { Page } from "../../../../templates";
import {
  OrganizationContextProvider,
  organizationProtectedRoute,
  OrganizationProtectedRouteProps,
} from "../../../../utils";

const TemplatesPage = ({
  profile,
  member,
  organization,
}: OrganizationProtectedRouteProps): JSX.Element => {
  return (
    <OrganizationContextProvider
      organization={organization}
      member={member}
      profile={profile}
    >
      <Page header={<UserNavigation />}>
        <Debug value={profile} />
        <TemplatesList />
      </Page>
    </OrganizationContextProvider>
  );
};

export const getServerSideProps = organizationProtectedRoute();

export default TemplatesPage;
