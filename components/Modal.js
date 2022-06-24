import Head from "next/head";
import Image from "next/image";
import { useState, useContext } from "react";
import styles from "../styles/Home.module.scss";
// import first from '../assets/first.svg'
import { globalContext } from "../context/globalContext";


const Modal = () => {
    const {modal, setModal} = useContext(globalContext)
    
    return (
        <div style={!modal ? {visibility: 'hidden'}: {}} className={styles.modal1}>
            <div><h3> Welcome to samtypes</h3> <br /><h3>How it works</h3><br /><br />1. At the left side, you're provided with a random text meanwhile, you can also copy and paste your text in there. <br /><br />2. After that, set your preferred time which can be found at the header. <br /><br /> 3. Your timer start counting down when you click the start button or you start typing. <br /><br /> 4. For each word you type, you have a point and your score is calculated after the time is up; your score will also be calculated when you're done before the time is up. <br /><br />5. Your high score is shown at the top right corner. <br /><br />6. Clicking the reset button will reset the app to the default settings. <br /><br />7. Clicking the instruction button brings up this modal.</div>
            <div onClick={() => setModal(false)} className={styles.ok}>ok</div>
        </div>
        
    )
}

export default Modal