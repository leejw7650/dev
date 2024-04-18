import Calculator from "./components/Calculator";

function App() {
  const apiKey = process.env.REACT_APP_API;
  console.log("apiKey : ", apiKey);
  return (
    <div className="App">
      <Calculator></Calculator>
    </div>
  );
}

export default App;
