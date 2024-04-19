import { useDispatch, useSelector } from "react-redux";
import Calculator from "./components/Calculator";
import RequestData from "./network/RequestData";
import { useEffect } from "react";
import { currentExchangeRate } from "./redux/slices/exchange";

function App() {
  const dispatch = useDispatch();
  const base = useSelector((store) => store.exchange.currencyFrom);
  const symbol = useSelector((store) => store.exchange.currencyTo);

  useEffect(() => {
    const fetchData = async () => {
      if (symbol !== "") {
        try {
          // symbol 이 여러개 요청되는 현상 해결 하기
          const result = await RequestData(base, symbol);
          dispatch(currentExchangeRate(result.data.rates[`${symbol}`]));
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    fetchData();
  }, [dispatch, base, symbol]);

  console.log(useSelector((store) => store.exchange.exchangeRate));

  return (
    <div className="App">
      <Calculator></Calculator>
    </div>
  );
}

export default App;
