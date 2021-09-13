import { Team } from "../../../../services";

export type JoinTeamIdOptions = {
  teams: Team[];
  ids: number[];
};

export const joinTeamId = ({ teams, ids }: JoinTeamIdOptions): Team[] =>
  ids.flatMap((id) => {
    const team = teams.find((e) => e.id === id);
    return team ? [team] : [];
  });
