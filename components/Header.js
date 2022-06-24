import Head from "next/head";
import Image from "next/image";
import { useState, useContext } from "react";
import styles from "../styles/Home.module.scss";
// import first from '../assets/first.svg'
import { globalContext } from "../context/globalContext";


const Header = () => {
    const {textArea2, point, typingSpeed, setTypingSpeed, timeInput, timeModal, setTimeModal, setTime, time, disable} = useContext(globalContext)


    const DropOnChange = (e) => {
        
        // setTimeModal(true)
        setTime(timeInput)
    
        setTime(e.target.value)
        
        
        
    }

    const wpm = Math.round((textArea2.length / 5) / time)
    return (
        <div className={styles.header}>
            <Image width={100} height={80} src='/logo.svg' alt="logo" />
            <div>
            <label htmlFor="cars">Time</label>
            <select disabled={disable} value={time} onChange={DropOnChange}  name="time">
                <option value="1">1 mins</option>
                <option value="2">2 mins</option>
                <option value="5">5 mins</option>
                <option value="10">10 mins</option>

            </select>
            </div>
            <h2>Typing speed: {wpm > 0 ? wpm : typingSpeed} wph</h2>     
        </div>
        
    )
}

export default Header