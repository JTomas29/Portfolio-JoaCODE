import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Splash from "./components/Splash";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // duración del splash (3 segundos)

    return () => clearTimeout(timer);
  }, []);
  
  //  Inicializar AOS
  useEffect(() => {
    AOS.init({
      duration: 800,      // duración de la animación
      once: true,         // anima solo una vez
      easing: "ease-out-cubic",
      offset: 100,        // cuándo empieza la animación
    });
  }, []);

  // Mientras el splash está activo
  if (showSplash) {
    return <Splash />;
  }

  // App normal
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
