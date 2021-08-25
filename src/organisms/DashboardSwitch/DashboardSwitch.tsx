import React from "react";
import {
  CreateOrganization,
  DashboardCorner,
  DashboardOrganizations,
  DashboardSideBar,
} from "../../molecules";
import ProfileSettings from "../../molecules/profile/profileSettings/ProfileSettings/ProfileSettings";
import { UserNavigation } from "../../organisms";
import { FormPage, GridPage } from "../../templates";
import { DashboardTab } from "../../utils/routing/types";

export type DashboardSwitchProps = {
  tab: DashboardTab | null;
};

const DashboardSwitch = ({ tab }: DashboardSwitchProps): JSX.Element | null => {
  switch (tab) {
    case DashboardTab.dashboard:
      return (
        <GridPage
          corner={<DashboardCorner />}
          header={<UserNavigation />}
          sideBar={<DashboardSideBar />}
        >
          <DashboardOrganizations />
        </GridPage>
      );
    case DashboardTab.new:
      return (
        <FormPage corner={<DashboardCorner />} header={<UserNavigation />}>
          <CreateOrganization />
        </FormPage>
      );
    case DashboardTab.profile:
      return (
        <GridPage
          corner={<DashboardCorner />}
          header={<UserNavigation />}
          sideBar={<DashboardSideBar />}
        >
          <ProfileSettings />
        </GridPage>
      );
    default:
      return null;
  }
};

export default DashboardSwitch;
