import React from "react";

interface Props {
  setting: any;
}

export const SettingContext = React.createContext<Props>({
  setting: null,
});

export const TriggerClick = React.createContext<any>({
  click: null,
  setClick: () => {}
})