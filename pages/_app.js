import "../styles/globals.scss";
import '../styles/styl.css'

import { useEffect, useRef, useState } from "react";
import { globalContext } from "../context/globalContext";
import { paragraphs } from "../Data/data";



function MyApp({ Component, pageProps }) {

 
  
  let text = useRef(paragraphs)
  return (
    <globalContext.Provider value={{
      text
      
    }}>
      <Component {...pageProps} />
    </globalContext.Provider>
  );
}

export default MyApp;
