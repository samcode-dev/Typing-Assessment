import { useContext } from "react";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";
import Head from "next/head";
import Body from "../components/Body";
import Modal from "../components/Modal";
import { globalContext } from "../context/globalContext";



export default function Home() {
  const {modal, setModal} = useContext(globalContext)
  return (
    <div>
      <div style={modal ? {filter: 'blur(3px)'}: {}}>
        <Head>
          <title>Typing Speed test App</title>
          <meta name="description" content="By Samuel Oluwatimileyin" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />

        </Head>

        <Header />
        <Body />
      </div>
      <Modal />
        
    </div>
    
  );
}
