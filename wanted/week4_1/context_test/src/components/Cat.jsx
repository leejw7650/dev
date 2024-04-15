import React, { useContext } from "react";
import MyStore from "../store/store";

const Cat = () => {
  const { name } = useContext(MyStore);
  return <h1>{name}</h1>;
};

export default Cat;
