import { useState, useContext } from "react";
import styles from "../styles/Home.module.scss";
import { globalContext } from "../context/globalContext";


const Preview = () => {
    const {point, setPoint, textArea1, textArea2, setTextArea1} = useContext(globalContext)

    const text  = textArea1.split('')
    const userInput = textArea2.split('')


    
    return (
        <div className={styles.div}>
            {
                text.map((s, i) => {
                    let color;
                    if (i < userInput.length) {
                        color = s === userInput[i] ? '#dfffa0' : 'rgb(134, 48, 48)'
                        // s === userInput[i] && setPoint(point + 1) 
                    }
                    return <span style={{backgroundColor: color}} key={i}>{s}</span>
                })
            }
        </div>

    )
}

export default Preview