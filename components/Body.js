import { useState, useContext, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { globalContext } from "../context/globalContext";
import dynamic from 'next/dynamic'

// import Preview from "./Preview";
const Preview = dynamic(() => import("./Preview"), {
    ssr: false,
    });

    let disable = false
import Countdown from "react-countdown";

const Completionist = () => <span>Time Up</span>;


const renderer = ({minutes, seconds, completed }) => {
    if (completed) {
        disable = !disable
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    }
  };

const Body = () =>  {
    const {setDisable, point, time, setTime, setTypingSpeed, textArea2, setTextArea2, textArea1, setTextArea1, timeInput, setTimeInput, timeModal, setTimeModal, setModal} = useContext(globalContext)
    const setT = (e) => {
        setTimeInput(e.target.value)
    }

    const changeTextArea1 = (e) => {
        
        setTextArea1(e.target.value)
       
    }



   

    const changeTextArea2 = (e) => {
        const newText = e.target.value
        
            setTextArea2(newText)
        

        // const text  = textArea1.split('')

        // const userInput = textArea2.split('')
        // userInput.map((e, i) => {
            
        //     if (e === userInput[i]) {
        //         return point.current += 1
               
        //     }
        // })
        // console.log(textArea2)

         
    }

    

   

    


   
   

    const reset = () => {
        setTextArea2("")
        setTimeInput()
        setTypingSpeed(0)
        setTime(5)
    }

   

    // const onKeyDown = (e) => {
    //     if (e.keyCode === 8) {
    //         e.preventDefault()
    //     } else if (e.keyCode === 40) {
    //         e.preventDefault()
    //     } else if (e.keyCode === 37) {
    //         e.preventDefault()
    //     } else if (e.keyCode === 39) {
    //         e.preventDefault()
    //     } else if (e.keyCode === 38) {
    //         e.preventDefault()
    //     } else if (e.keyCode === 46) {
    //         e.preventDefault()
    //     } else if (e.keyCode === 35) {
    //         e.preventDefault()
    //     } else if (e.keyCode === 34) {
    //         e.preventDefault()
    //     } else if (e.keyCode === 33) {
    //         e.preventDefault()
    //     }
    // }

    // <Countdown date={Date.now() + 60000 * time} renderer={renderer} />

  
    return (
        <div>
            <div className={styles.boddy}>
                <div className={styles.txt_area}>
                    <Preview />
                    <textarea disabled={disable} value={textArea2} onChange={changeTextArea2} placeholder="Start Typing" name="Input2"></textarea>
                    <div className={styles.buttons}>
                        <div><h3>Paste Text</h3></div>
                        <div onClick={reset}><h3>Reset</h3></div>
                        <div onClick={() => setModal(true)}><h3>Instructions</h3></div>
                    </div>
                </div>
                <div className={styles.timer}><Countdown date={Date.now() + 60000 * time} renderer={renderer} /></div>
                <img width={700} height={80} src='/Hero.svg' alt="hero" />
            </div>
            

            <div style={timeModal ? {visibility: 'visible'}: {visibility: 'hidden'}} className={styles.time}>
                <div>
                    <h1>Input custom time (mins) </h1>
                    <input value={timeInput} onChange={setT} max={60} type="number" name="number" />
                    <h2 onClick={() => setTimeModal(false)}>ok</h2>
                </div>
            </div>
        </div>

        
    )
}

export default Body