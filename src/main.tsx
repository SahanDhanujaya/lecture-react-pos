import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router.tsx";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { OrderContextProvider } from "./context/OrderContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <OrderContextProvider>
        <RouterProvider router={router} />
        <Toaster />
      </OrderContextProvider>
    </ThemeProvider>
  </StrictMode>,
);
