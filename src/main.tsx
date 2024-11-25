import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1>React + Docker + Github actions + Ec2 hm</h1>
  </StrictMode>
);
