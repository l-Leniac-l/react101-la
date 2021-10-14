import { useState } from "react";

const initialState = {
  value1: 0,
  value2: 0,
  result: 0,
};

export function useCalc() {
  const [state, setState] = useState(initialState);

  const { value1, value2 } = state;

  function updateData(newState) {
    setState({
      ...state,
      ...newState,
    });
  }

  function operation(op) {
    const operations = {
      sum: () => value1 + value2,
      sub: () => value1 - value2,
      mul: () => value1 * value2,
      div: () => (value1 / value2).toFixed(2),
    };

    const opResult = operations[op];

    updateData({
      result: opResult(),
    });
  }

  return {
    data: state,
    updateData,
    operation,
  };
}
