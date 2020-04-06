import React from "react";

// Old import
// import Cards from "./components/Cards/Cards";
// import CountyPicker from "./components/CountryPicker/CountryPicker";
// import Chart from "./components/Chart/Chart";

import { Cards, Chart, CountryPicker } from "./components";

class App extends React.Component {
  render() {
    return (
      <div>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
