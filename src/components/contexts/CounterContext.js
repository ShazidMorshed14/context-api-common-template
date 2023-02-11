import { createContext, useState } from "react";

export const CounterContext = createContext();

const CounterContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  const increase = (value) => {
    setCount(count + value);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const value = { loading, setLoading, count, increase, decrease };
  return (
    <CounterContext.Provider value={value}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default CounterContextProvider;
