import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import {
  ColorModeProvider,
  ColorModeScript,
  createLocalStorageManager,
} from "@kobalte/core";
import { ConfigProvider } from "@contexts/ConfigContext";

import "./app.css";

export default function App() {
  const storageManager = createLocalStorageManager("ui-theme");
  return (
    <Router
      root={(props) => (
        <>
          <ColorModeScript storageType={storageManager.type} />
          <ColorModeProvider storageManager={storageManager}>
            <ConfigProvider>
              <Suspense>{props.children}</Suspense>
            </ConfigProvider>
          </ColorModeProvider>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
