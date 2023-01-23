
import './App.css';
import Info from "./Components/Info"
import About from "./Components/About"
import Interest from "./Components/Interest"
import Footer from "./Components/Footer"
import { useEffect } from 'react';
import { useState } from 'react';
import React from 'react';


function App() {

  const [theme, themeState] = useState("dark-theme")





  function toggle() {

    if (theme === "white-theme") {
      themeState("dark-theme")
    }
    else {
      themeState("white-theme")
    }

  }

//   useEffect(function () {
// // console.log(document.getElementById)
//     document.getElementsByClassName('dark-theme').className=theme ;
//   }, [theme])

  return (
    <div id="container">
      <div className={theme}>
        <Info updateClick={toggle}/>
        <About />
        <Interest />
        <Footer />
      </div>
    </div>

  );
}

export default App;
