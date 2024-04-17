import Calculator from "./components/Calculator";

function App() {
  const apiKey = process.env.apikey;
  console.log("apiKey : ", apiKey);
  return (
    <div className="App">
      <Calculator></Calculator>
    </div>
  );
}

export default App;
