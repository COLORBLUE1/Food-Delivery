import { createRoot } from "react-dom/client";
import "./normalize.css";
import ContextProvider from "./router/ContextProvider";


createRoot(document.getElementById("root")).render(
  <>
    <ContextProvider />
  </>
);
