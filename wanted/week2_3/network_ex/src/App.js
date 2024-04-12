import "./App.css";
import React, { useEffect } from "react";
import axios from "axios";

function App() {
  // useEffect(() => {
  //   const sleepData = async () => {
  //     let data = await fetch("http://localhost:5001/sleep_times");

  //     return data;
  //   };
  //   console.log(sleepData());
  // }, []);

  // const addSleepData = async (sleep_data) => {
  //   let data = await fetch("http://localhost:5001/sleep_times", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(sleep_data),
  //   });

  //   console.log(data);
  // };

  // // addSleepData({
  // //   day: "목",
  // // });

  useEffect(() => {
    axios({
      method: "get",
      url: "",
    });
  });

  return (
    <div className="App">
      <div>s</div>
    </div>
  );
}

export default App;
