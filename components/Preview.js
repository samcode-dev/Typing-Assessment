import { useContext } from "react";
import styles from "../styles/Home.module.scss";
import { globalContext } from "../context/globalContext";



const Preview = () => {
    const {text, setText} = useContext(globalContext) 
    const text1 = text.split("");
    clg(text)
  
    return (
      <MainDiv>
        {text.map((data, index) => {
          let color, bgColor;
  
        //   if (index < props.userInput.length) {
        //     bgColor =
        //       data === props.userInput[index] ? "transparent" : "hsl(0,100%,50%)";
        //     color = data === props.userInput[index] ? "hsl(158,100%,50%)" : null;
        //   }
  
          return (
            <span
              className="textSize"
              key={index}
              style={{ color: color, backgroundColor: bgColor }}
            >
              {data}
            </span>
          );
        })}
      </MainDiv>
    );
  };
  
  export default Preview;