import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { GlobalStyle } from "./globalStyled.js";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <App />
        </HashRouter>
      </PersistGate>
    </Provider>
    <GlobalStyle />
  </>
);
