import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { BreadcrumbLink } from "../../../../atoms";
import { useText } from "../../../../utils";
import { mapRouteToLinks } from "./DashboardHeaderView.utils";

export type DashboardHeaderViewProps = {
  route: string;
  path: string;
};

const DashboardHeaderView = ({
  route,
  path,
}: DashboardHeaderViewProps): JSX.Element => {
  const text = useText();

  const routes = useMemo(
    () => mapRouteToLinks({ route, path, text }),
    [route, path, text]
  );

  return (
    <Breadcrumb>
      {routes.map((link) => (
        <BreadcrumbItem key={link.href}>
          <BreadcrumbLink href={link.href}>{link.children}</BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

export default DashboardHeaderView;
