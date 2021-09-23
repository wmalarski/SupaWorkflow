import React from "react";
import {
  CreateOrganization,
  DashboardOrganizations,
  ProfileSettings,
} from "../../molecules";
import { DashboardTab, useTabParam } from "../../utils";
import DashboardLayout from "./DashboardLayout";

const DashboardSwitch = (): React.ReactElement => {
  const tab = useTabParam(DashboardTab);

  switch (tab) {
    case DashboardTab.new:
      return (
        <DashboardLayout isForm>
          <CreateOrganization />
        </DashboardLayout>
      );
    case DashboardTab.profile:
      return (
        <DashboardLayout>
          <ProfileSettings />
        </DashboardLayout>
      );
    default:
      return (
        <DashboardLayout>
          <DashboardOrganizations />
        </DashboardLayout>
      );
  }
};

export default DashboardSwitch;
