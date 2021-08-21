import React from "react";
import { CreateTemplate } from "../../../../molecules";
import { UserNavigation } from "../../../../organisms";
import Page from "../../../../templates/Page/Page";
import { OrganizationContextProvider } from "../../../../utils/contexts/OrganizationContext";
import {
  organizationProtectedRoute,
  OrganizationProtectedRouteProps,
} from "../../../../utils/routing/protectedRoute";

const OrganizationNewTemplate = ({
  organization,
  profile,
  member,
}: OrganizationProtectedRouteProps): JSX.Element => {
  return (
    <OrganizationContextProvider
      organization={organization}
      member={member}
      profile={profile}
    >
      <Page header={<UserNavigation />}>
        <CreateTemplate />
      </Page>
    </OrganizationContextProvider>
  );
};

export const getServerSideProps = organizationProtectedRoute;

export default OrganizationNewTemplate;
