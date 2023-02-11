import React, { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

const ItemOne = () => {
  const { count } = useContext(CounterContext);

  return (
    <div>
      <h2>Current Value: {count}</h2>{" "}
    </div>
  );
};

export default ItemOne;
