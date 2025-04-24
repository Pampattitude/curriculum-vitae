import "./index.css";
import App from "./App.tsx";
import { createRoot } from "preact/compat/client";

createRoot(document.getElementById("root")!).render(<App />);
