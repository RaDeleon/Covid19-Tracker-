import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
// Old import
// import Cards from "./components/Cards/Cards";
// import CountyPicker from "./components/CountryPicker/CountryPicker";
// import Chart from "./components/Chart/Chart";

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
