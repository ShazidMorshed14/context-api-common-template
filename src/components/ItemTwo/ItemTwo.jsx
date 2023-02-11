import React from "react";
import { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

const ItemTwo = () => {
  const { increase, decrease } = useContext(CounterContext);

  return (
    <div>
      <button onClick={(e) => increase(4)}>incriment</button>
      <button onClick={(e) => decrease()}>decriment</button>
    </div>
  );
};

export default ItemTwo;
