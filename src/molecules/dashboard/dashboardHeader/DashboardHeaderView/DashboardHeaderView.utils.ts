import { mapRoute, MapRouteReturn, UseTextFnc } from "../../../../utils";

export type MapRouteToLinksArgs = {
  route: string;
  path: string;
  text: UseTextFnc;
};

export const mapRouteToLinks = ({
  route,
  path,
  text,
}: MapRouteToLinksArgs): MapRouteReturn[] =>
  route
    .split("/")
    .reduce<string[]>((prev, curr) => {
      const acc = prev.length === 0 ? curr : `${prev[prev.length - 1]}/${curr}`;
      return [...prev, acc];
    }, [])
    .reduce<MapRouteReturn[]>((prev, curr) => {
      const link = mapRoute({ path, text, route: curr });
      return link ? [...prev, link] : prev;
    }, []);
