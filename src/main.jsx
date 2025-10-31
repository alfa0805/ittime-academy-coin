import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { StoreProvider } from "./context/StoreContext";
import Background from "./components/Background";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider>
      <Background>
        <App />
      </Background>
    </StoreProvider>
  </React.StrictMode>
);
