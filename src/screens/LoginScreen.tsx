import { Pane, Dialog } from "evergreen-ui";
import React from "react";

export function LoginScreen() {
  return (
    <Pane>
      <Dialog isShown={true} title="Sign In" hasClose={false}>
        Hello World
      </Dialog>
    </Pane>
  );
}
