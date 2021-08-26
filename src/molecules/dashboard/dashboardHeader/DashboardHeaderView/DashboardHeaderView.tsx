import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { ParsedUrlQuery } from "querystring";
import React, { useMemo } from "react";
import { BreadcrumbLink } from "../../../../atoms";
import { mapRoute, useText } from "../../../../utils";

export type DashboardHeaderViewProps = {
  route: string;
  query: ParsedUrlQuery;
};

const DashboardHeaderView = ({
  route,
  query,
}: DashboardHeaderViewProps): JSX.Element => {
  const text = useText();

  const routes = useMemo(() => mapRoute({ route, query, text }), [route, text]);

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
