import React from "react";
import { CreateTemplate } from "../../../../molecules";
import { UserNavigation } from "../../../../organisms";
import Page from "../../../../templates/Page/Page";
import { OrganizationContextProvider } from "../../../../utils/organization/OrganizationContext";
import { ProfileContextProvider } from "../../../../utils/profile/ProfileContext";
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
    <ProfileContextProvider profile={profile}>
      <OrganizationContextProvider organization={organization} member={member}>
        <Page header={<UserNavigation />}>
          <CreateTemplate />
        </Page>
      </OrganizationContextProvider>
    </ProfileContextProvider>
  );
};

export const getServerSideProps = organizationProtectedRoute;

export default OrganizationNewTemplate;
