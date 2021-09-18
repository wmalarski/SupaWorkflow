import { SupabaseRealtimePayload } from "@supabase/supabase-js";
import { useEffect } from "react";
import { supabase } from "../../supabase";
import { Client } from "../../types";

export type UseSubscribeClientArgs = {
  id?: string;
  onChange?: (payload: SupabaseRealtimePayload<Client>) => void;
};

export const useSubscribeClient = ({
  id,
  onChange,
}: UseSubscribeClientArgs): void => {
  useEffect(() => {
    if (!id) return;

    const subscription = supabase
      .from(`client:id=eq.${id}`)
      .on("*", (args) => {
        console.log("useSubscribeClient", { args, id });
        onChange?.(args);
      })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [id, onChange]);
};
