import "../styles/globals.scss";
import { useEffect, useRef, useState } from "react";
import { globalContext } from "../context/globalContext";
import { sentences } from "../components/Text";
import Countdown from "react-countdown";



function MyApp({ Component, pageProps }) {

  var randomItem = sentences[Math.floor(Math.random()*sentences.length)];
  

  
  const [time, setTime] = useState(1);
  const [textArea1, setTextArea1] = useState(randomItem);
  // let [point, setPoint] = useState(1)
  let point = useRef(1)
  const [textArea2, setTextArea2] = useState("");
  const [typingSpeed, setTypingSpeed] = useState(0)
  const [timeInput, setTimeInput] = useState()
  const [timer, setTimer] = useState(0)
  const [modal, setModal] = useState(true)
  const [timeModal, setTimeModal] = useState(false)
  const [disable, setDisable] = useState(false);
  return (
    <globalContext.Provider value={{ 
      point,
      textArea1, 
      setTextArea1,
      textArea2, 
      setTextArea2,
      typingSpeed, 
      setTypingSpeed,
      timeInput,
      setTimeInput,
      time, 
      setTime, 
      disable, 
      setDisable,
      modal,
      setModal,
      timeModal, 
      setTimeModal }}>
      <Component {...pageProps} />
    </globalContext.Provider>
  );
}

export default MyApp;
