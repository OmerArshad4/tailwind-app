import "./index.css";
import App from "./App";
import React from "react";
import { StrictMode } from "react"
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { store } from "./Redux/configureStore";
import reportWebVitals from "./reportWebVitals";
import '@fontsource/dm-sans/400.css'; // Normal
import '@fontsource/dm-sans/700.css'; // Bold
import "@fontsource/oswald/400.css"; // Regular
import "@fontsource/oswald/600.css"; // Semi-bold
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

reportWebVitals();
