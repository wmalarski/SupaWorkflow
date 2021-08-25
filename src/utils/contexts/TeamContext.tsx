import { createContext, ReactNode, useContext, useMemo } from "react";
import { defaultTeam, Team } from "../../services";
import { useSelectTeam } from "../../services/data/team/selectTeam";

export type TeamContextValue = {
  team: Team;
  isInitialized: boolean;
};

const TeamContext = createContext<TeamContextValue>({
  team: defaultTeam,
  isInitialized: false,
});

export const useTeamContext = (): Team => {
  const value = useContext(TeamContext);
  if (!value.isInitialized) throw "Team Context not initialized";
  return value.team;
};

export type TeamContextProviderProps = {
  team: Team;
  children: ReactNode;
  enabled?: boolean;
};

export const TeamContextProvider = ({
  team,
  children,
  enabled,
}: TeamContextProviderProps): JSX.Element => {
  const { data } = useSelectTeam(
    { id: team.id },
    { initialData: team, enabled }
  );

  const value = useMemo(
    () => ({ team: data ?? team, isInitialized: true }),
    [data, team]
  );

  return <TeamContext.Provider value={value}>{children}</TeamContext.Provider>;
};

export default TeamContext;
