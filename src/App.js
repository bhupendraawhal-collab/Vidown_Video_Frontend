import styles from "./App.module.css";
import Header from "./components/Layout/Header";
import React, { Fragment } from "react";
import UserInput from "./components/UserInput/UserInput";
import IndexMessage from "./components/Layout/IndexMessage";
import Footer from "./components/Layout/Footer";
import AdsterraSocialBar from "./components/Ads/AdsterraSocialBar";

function App() {
  return (
    <Fragment>
      <AdsterraSocialBar />
      <div className={styles["main-div"]}>
        <Header />
        <IndexMessage />
        <UserInput />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
