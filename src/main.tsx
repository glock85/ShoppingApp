import React from "react";
import ReactDOM from "react-dom/client";
import Shopping from "./Shopping.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Shopping />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
