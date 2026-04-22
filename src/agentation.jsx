import React from "react";
import ReactDOM from "react-dom/client";
import { Agentation } from "agentation";

const rootElement = document.getElementById("agentation-root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      {import.meta.env.DEV ? (
        <Agentation
          endpoint="http://localhost:4747"
          onSessionCreated={(sessionId) => {
            console.log("Agentation session started:", sessionId);
          }}
        />
      ) : null}
    </React.StrictMode>,
  );
}
