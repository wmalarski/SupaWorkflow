import React from "react";
import { OrganizationSwitch } from "../../../organisms";
import {
  GetOrganizationProps,
  getOrganizationProps,
  OrganizationContextProvider,
} from "../../../utils";

const OrganizationPage = ({
  member,
  organization,
  profile,
}: GetOrganizationProps): JSX.Element => (
  <OrganizationContextProvider
    member={member}
    organization={organization}
    profile={profile}
  >
    <OrganizationSwitch />
  </OrganizationContextProvider>
);

export const getServerSideProps = getOrganizationProps;

export default OrganizationPage;
