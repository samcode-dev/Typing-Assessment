import { useContext } from "react";
import styles from "../styles/Home.module.scss";
import Head from "next/head";
import { globalContext } from "../context/globalContext";
import Navbar from "../components/Body";



export default function Home() {
  return (
    <div>
      <div>
        <Head>
          <title>Typing Speed test App</title>
          <meta name="description" content="By Samuel Oluwatimileyin" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />

        </Head>

        <Navbar />
      </div>
        
    </div>
    
  );
}
