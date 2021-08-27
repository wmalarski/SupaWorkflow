import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import React from "react";
import { BreadcrumbLink } from "../../../../atoms";
import { DashboardTab, paths, useText } from "../../../../utils";
import { getTabText } from "./DashboardHeaderView.utils";

export type DashboardHeaderViewProps = {
  tab: DashboardTab | null;
};

const DashboardHeaderView = ({
  tab,
}: DashboardHeaderViewProps): JSX.Element => {
  const text = useText();

  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href={paths.home}>
          {text("navigationHome")}
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href={paths.dashboard()} nextProps={{ shallow: true }}>
          {text("navigationDashboard")}
        </BreadcrumbLink>
      </BreadcrumbItem>
      {tab && (
        <BreadcrumbItem>
          <BreadcrumbLink
            href={paths.dashboard(tab)}
            nextProps={{ shallow: true }}
          >
            {getTabText(tab, text)}
          </BreadcrumbLink>
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  );
};

export default DashboardHeaderView;
