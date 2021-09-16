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
  teamId: number;
  children: ReactNode;
  fallback?: ReactNode;
  enabled?: boolean;
  initialData?: Team;
};

export const TeamContextProvider = ({
  teamId,
  children,
  enabled,
  fallback,
  initialData,
}: TeamContextProviderProps): React.ReactElement => {
  const { data } = useSelectTeam({ id: teamId }, { initialData, enabled });

  const teamValue = useMemo(
    () => data && { team: data, isInitialized: true },
    [data]
  );

  return teamValue ? (
    <TeamContext.Provider value={teamValue}>{children}</TeamContext.Provider>
  ) : (
    <>{fallback}</>
  );
};

export default TeamContext;
