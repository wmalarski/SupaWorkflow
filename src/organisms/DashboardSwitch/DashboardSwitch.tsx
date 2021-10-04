import { CreateOrganization, ProfileSettings } from "molecules";
import React from "react";
import { ModalLayer } from "templates";
import {
  DashboardDialog,
  DashboardTab,
  paths,
  useDialogParam,
  useTabParam,
} from "utils";
import DashboardLayout from "./DashboardLayout";

const DashboardSwitch = (): React.ReactElement => {
  const tab = useTabParam(DashboardTab);
  const dialog = useDialogParam(DashboardDialog);

  const resetUrl = paths.dashboard({ tab });

  return (
    <>
      <DashboardLayout>
        {!tab && <ProfileSettings />}
        {tab === DashboardTab.profile && <ProfileSettings />}
      </DashboardLayout>
      <ModalLayer isOpen={!!dialog} resetUrl={resetUrl}>
        {dialog === DashboardDialog.new && <CreateOrganization />}
      </ModalLayer>
    </>
  );
};

export default DashboardSwitch;
