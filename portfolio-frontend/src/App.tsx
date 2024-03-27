import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <main>
        <QueryClientProvider client={queryClient}>
          <Routes />
        </QueryClientProvider>
      </main>
    </BrowserRouter>
  );
};
export default App
