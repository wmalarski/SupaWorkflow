import React from "react";
import { CreateTemplate } from "../../../../molecules";
import { OrganizationLayout } from "../../../../organisms";
import {
  OrganizationContextProvider,
  organizationProtectedRoute,
  OrganizationProtectedRouteProps,
} from "../../../../utils";

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
      <OrganizationLayout>
        <CreateTemplate />
      </OrganizationLayout>
    </OrganizationContextProvider>
  );
};

export const getServerSideProps = organizationProtectedRoute();

export default OrganizationNewTemplate;
