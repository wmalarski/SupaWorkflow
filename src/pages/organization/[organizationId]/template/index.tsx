import React from "react";
import { Debug } from "../../../../atoms";
import { TemplatesList } from "../../../../molecules";
import { UserNavigation } from "../../../../organisms";
import Page from "../../../../templates/Page/Page";
import { OrganizationContextProvider } from "../../../../utils/organization/OrganizationContext";
import { ProfileContextProvider } from "../../../../utils/profile/ProfileContext";
import {
  organizationProtectedRoute,
  OrganizationProtectedRouteProps,
} from "../../../../utils/routing/protectedRoute";

const TemplatesPage = ({
  profile,
  member,
  organization,
}: OrganizationProtectedRouteProps): JSX.Element => {
  return (
    <ProfileContextProvider profile={profile}>
      <OrganizationContextProvider organization={organization} member={member}>
        <Page header={<UserNavigation />}>
          <Debug value={profile} />
          <TemplatesList />
        </Page>
      </OrganizationContextProvider>
    </ProfileContextProvider>
  );
};

export const getServerSideProps = organizationProtectedRoute;

export default TemplatesPage;
