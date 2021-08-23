import React from "react";
import { CreateOrganization, DashboardCorner } from "../../molecules";
import { UserNavigation } from "../../organisms";
import { FormPage } from "../../templates";
import {
  ProfileContextProvider,
  profileProtectedRoute,
  ProfileProtectedRouteProps,
} from "../../utils";

const NewOrganizationPage = ({
  profile,
}: ProfileProtectedRouteProps): JSX.Element => {
  return (
    <ProfileContextProvider profile={profile}>
      <FormPage corner={<DashboardCorner />} header={<UserNavigation />}>
        <CreateOrganization />
      </FormPage>
    </ProfileContextProvider>
  );
};

export const getServerSideProps = profileProtectedRoute;

export default NewOrganizationPage;
