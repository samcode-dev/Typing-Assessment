import { useContext, useState, useEffect, useRef } from "react";
import styles from "../styles/Home.module.scss";
import { globalContext } from "../context/globalContext";

const Navbar = () => {
  const { text } = useContext(globalContext);
  const [time, setTime] = useState(1);
  const [open, setOpen] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [finished, setFinished] = useState(true)

  let timer;
  let maxTime = 60 * time;
  let timeLeft = maxTime;
  let charIndex = 0;
  let mistakes = 0;
  let isTyping = false;

  let paragraphText = useRef(text);
  const pRef = useRef();
  const inputRef = useRef();
  const wpmRef = useRef();
  const mistakesRef = useRef();
  const cpmRef = useRef();
  const timeRef = useRef();
  const tryAgainRef = useRef();
  const userPreferedInput = useRef();

  const [input, setInput] = useState("");

  const onchangeInput = (e) => {
    setInput(e.target.value);
  };

  const openModal = () => {
    setOpen(!open)
  }

  const changeTime = (e) => {
    setTime(e.target.value);
  };

  const onChange = () => {
    setOpen(!open)
    loadParagraph();
  };

  useEffect(() => {
    inputRef.current.addEventListener("input", initTyping);
    tryAgainRef.current.addEventListener("click", resetGame);
    loadParagraph();
  }, []);

  const loadParagraph = () => {
    // console.log(paragraphText.current.current)
    if (input.length < 1) {
      const ranIndex = Math.floor(
        Math.random() * paragraphText.current.current.length
      );
      pRef.current.innerHTML = "";
      paragraphText.current.current[ranIndex].split("").forEach((char) => {
        let span = `<span>${char}</span>`;
        pRef.current.innerHTML += span;
      });
      pRef.current.querySelectorAll("span")[0].classList.add("active");
      // window.addEventListener('keydown', () => inputRef.current.focus())
      pRef.current.addEventListener("click", () => inputRef.current.focus());
    } else {
      const ranIndex = Math.floor(Math.random() * input.length);
      pRef.current.innerHTML = "";
      input.split("").forEach((char) => {
        let span = `<span>${char}</span>`;
        pRef.current.innerHTML += span;
      });
      pRef.current.querySelectorAll("span")[0].classList.add("active");
      window.addEventListener("keydown", () => inputRef.current.focus());
      pRef.current.addEventListener("click", () => inputRef.current.focus());
    }
  };

  const initTyping = () => {
    setDisabled(!disabled)
    let characters = pRef.current.querySelectorAll("span");
    let typedChar = inputRef.current.value.split("")[charIndex];

    if (charIndex < characters.length - 1 && timeLeft > 0) {
      if (!isTyping) {
        timer = setInterval(initTimer, 1000);
        isTyping = true;
      }

      if (typedChar == null) {
        if (charIndex > 0) {
          charIndex--;
          if (characters[charIndex].classList.contains("incorrect")) {
            mistakes--;
          }
          characters[charIndex].classList.remove("correct", "incorrect");
        }
      } else {
        if (characters[charIndex].innerText == typedChar) {
          characters[charIndex].classList.add("correct");
        } else {
          mistakes++;
          characters[charIndex].classList.add("incorrect");
        }
        charIndex++;
      }

      characters.forEach((span) => span.classList.remove("active"));
      characters[charIndex].classList.add("active");

      let wpm = Math.round(
        ((charIndex - mistakes) / 5 / (maxTime - timeLeft)) * 60 * time
      );
      wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;

      wpmRef.current.innerText = wpm;
      mistakesRef.current.innerText = mistakes;
      cpmRef.current.innerText = charIndex - mistakes;
    } else {
      console.log("ok1");

      clearInterval(timer);

      inputRef.current.value = "";
    }
  };

  const initTimer = () => {
    if (timeLeft > 0) {
      timeLeft--;
      timeRef.current.innerText = timeLeft;
      let wpm = Math.round(
        ((charIndex - mistakes) / 5 / (maxTime - timeLeft)) * 60 * time
      );
      wpmRef.current.innerText = wpm;
    } else {
      console.log("ok2");

      clearInterval(timer);
    }
  };

  const resetGame = () => {
    setDisabled(false)
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inputRef.current.value = "";
    timeRef.current.innerText = timeLeft;
    wpmRef.current.innerText = 0;
    mistakesRef.innerText = 0;
    cpmRef.current.innerText = 0;
  };

  return (
    <div className="body">
      <div className="heada">
        <select disabled={disabled} value={time} onChange={changeTime}  name="time">
          <option value="1">1 mins</option>
          <option value="2">2 mins</option>
          <option value="5">5 mins</option>
          <option value="10">10 mins</option>
        </select>
        <input disabled={disabled}  value={time} onChange={changeTime} placeholder="input time in minutes" type="number" />
        <button disabled={disabled} onClick={openModal} className="heda_button">Input Preferred Text</button>
      </div>
      <div className="wrapper">
        <input className="input-field" ref={inputRef} type="text" />
        <div className="content-box">
          <div className="typing-text">
            <p ref={pRef}></p>
          </div>
          <div className="content">
            <ul className="result-details">
              <li className="time">
                <p>Time Left:</p>
                <span>
                  <b ref={timeRef}>{60 * time}</b>s
                </span>
              </li>
              <li className="mistake">
                <p>Mistakes:</p>
                <span ref={mistakesRef}>{mistakes}</span>
              </li>
              <li className="wpm">
                <p>WPM:</p>
                <span ref={wpmRef}>0</span>
              </li>
              <li className="cpm">
                <p>CPM:</p>
                <span ref={cpmRef}>0</span>
              </li>
            </ul>
            <button ref={tryAgainRef}>Reset</button>
          </div>
        </div>
      </div>
      <div style={open ? {visibility: 'visible'} : {visibility: 'hidden'} } className="input-modal">
        <h3>input Your Text Below</h3>
        <textarea maxLength={400}
          value={input}
          onChange={onchangeInput}
          cols="60"
          rows="10"
        ></textarea>
        <button onClick={onChange}>OK</button>
      </div>


      {/* <div style={finished ? {visibility: 'visible'} : {visibility: 'hidden'} } className="finish-modal">
        <div>
          <h1>Accuracy</h1>
          <h2>{cpmRef.current}</h2>
        </div>
        <div>
          <h1>Speed</h1>
          <h2>{wpmRef.current}</h2>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
