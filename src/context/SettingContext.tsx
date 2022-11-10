import React from "react";

interface Props {
  setting: any;
}

export const SettingContext = React.createContext<Props>({
  setting: null,
});
