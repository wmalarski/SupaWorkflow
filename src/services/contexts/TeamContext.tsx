import { PostgrestError } from "@supabase/supabase-js";
import { createContext, ReactNode, useContext, useMemo } from "react";
import { useSelectTeam } from "../data/team/selectTeam";
import { defaultTeam } from "../helpers/defaults";
import { Team } from "../types";

export type TeamContextValue = {
  team: Team;
  isInitialized: boolean;
};

export const TeamContext = createContext<TeamContextValue>({
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
  onError?: (err: PostgrestError) => void;
};

export const TeamContextProvider = ({
  teamId,
  children,
  enabled,
  fallback,
  initialData,
  onError,
}: TeamContextProviderProps): React.ReactElement => {
  const { data } = useSelectTeam(
    { id: teamId },
    { initialData, enabled, onError }
  );

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
