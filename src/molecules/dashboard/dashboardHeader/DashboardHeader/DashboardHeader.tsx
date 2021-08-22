import { useRouter } from "next/router";
import React, { useMemo } from "react";
import DashboardHeaderView from "../DashboardHeaderView/DashboardHeaderView";

type ViewProps = React.ComponentProps<typeof DashboardHeaderView>;

export type DashboardHeaderProps = {
  View?: React.ComponentType<ViewProps>;
};

const DashboardHeader = ({
  View = DashboardHeaderView,
}: DashboardHeaderProps): JSX.Element => {
  const router = useRouter();

  const routes = useMemo(
    () =>
      router.route.split("/").reduce<string[]>((prev, acc) => {
        if (prev.length === 0) return [acc];
        return [...prev, `${prev[prev.length - 1]}/${acc}`];
      }, []),
    [router.route]
  );

  return <View routes={routes} currentPath={router.asPath} />;
};

export default React.memo(DashboardHeader);
