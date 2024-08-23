import React, { useState, useEffect } from "react";
import { SplashScreen } from "./components/SplasScreen";
import { Infoinicial } from "./components/Infoinicial";
import { Singing } from "./components/singin";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState("Infoinicial"); // Estado para controlar la vista actual

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Función para cambiar la vista actual
  const handleNext = () => {
    setCurrentView("Singing");
  };

  // Renderizar el componente adecuado basado en `currentView`
  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : currentView === "Infoinicial" ? (
        <Infoinicial onNext={handleNext} />
      ) : (
        <Singing />
      )}
    </>
  );
};

export default App;
