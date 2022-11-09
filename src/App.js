import React from "react";
import { userObserver } from "./auth/firebase";
import Register from "./pages/Register";
import AppRouter from "./router/AppRouter";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    userObserver();
  }, []);

  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;
