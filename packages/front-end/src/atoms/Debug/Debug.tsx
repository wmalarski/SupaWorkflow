import React from "react";

export type DebugProps<T> = {
  value: T;
};

function Debug<T>({ value }: DebugProps<T>): React.ReactElement | null {
  return process.env.NODE_ENV === "development" ? (
    <pre>{JSON.stringify(value, null, 2)}</pre>
  ) : null;
}

export default Debug;
