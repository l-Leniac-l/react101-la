import { useCalc } from "./hooks/calculadora";

export const CalculadoraHooks = () => {
  const { data, updateData, operation } = useCalc();

  const { value1, value2, result } = data;

  function onChange(e) {
    const field = e.target.name;
    const value = parseInt(e.target.value);
    updateData({
      [field]: value,
    });
  }

  function onClick(e) {
    operation(e.target.name);
  }

  return (
    <div>
      <label for="value1">Valor 1</label>
      <input
        type="text"
        name="value1"
        pattern="[0-9]*"
        onChange={onChange}
        value={value1}
      />
      <br />
      <label for="value1">Valor 2</label>
      <input
        type="text"
        name="value2"
        pattern="[0-9]*"
        onChange={onChange}
        value={value2}
      />

      <button name="sum" onClick={onClick}>
        +
      </button>
      <button name="sub" onClick={onClick}>
        -
      </button>
      <button name="mul" onClick={onClick}>
        *
      </button>
      <button name="div" onClick={onClick}>
        /
      </button>
      <br />
      <br />

      <h1>{result}</h1>
    </div>
  );
};
