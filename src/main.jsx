import { createRoot } from "react-dom/client";
import "./normalize.css";
import { App } from "./router/App";


createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);
