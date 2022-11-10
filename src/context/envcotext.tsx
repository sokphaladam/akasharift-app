import React from "react";

export const EnvContext = React.createContext<any>({
  env: null,
  setEnv: null,
});
