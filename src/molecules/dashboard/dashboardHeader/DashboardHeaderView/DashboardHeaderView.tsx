import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React from "react";
import { useText } from "../../../../utils";
import mapRoute from "../../../../utils/routing/mapRoute";

export type DashboardHeaderViewProps = {
  routes: string[];
  currentPath: string;
};

const DashboardHeaderView = ({
  routes,
  currentPath,
}: DashboardHeaderViewProps): JSX.Element => {
  const text = useText();

  const links = routes.map((route) =>
    mapRoute({ path: currentPath, route, text })
  );

  return (
    <Breadcrumb>
      {links.map(
        (link) =>
          link && (
            <BreadcrumbItem>
              <BreadcrumbLink href={link.href}>{link.children}</BreadcrumbLink>
            </BreadcrumbItem>
          )
      )}
    </Breadcrumb>
  );
};

export default DashboardHeaderView;
