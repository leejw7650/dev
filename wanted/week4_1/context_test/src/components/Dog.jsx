import { useContext } from "react";
import MyStore from "../store/store";

const Dog = () => {
  const { setName } = useContext(MyStore);
  return (
    <div>
      <button
        onClick={() => {
          setName("강아지");
        }}
      >
        강아지로 만들기
      </button>
      <button
        onClick={() => {
          setName("고양이");
        }}
      >
        고양이로 만들기
      </button>
    </div>
  );
};

export default Dog;
