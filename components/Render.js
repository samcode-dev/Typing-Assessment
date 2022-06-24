import { useState, useContext, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { globalContext } from "../context/globalContext";

const renderer = ({minutes, seconds, completed }) => {
    {if (completed) {
        disable = false
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    }}
  };