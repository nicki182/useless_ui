import React from "react";
const useInput = (
  initialValue: string | number | undefined | readonly string[],
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined,
) => {
  const [value, setValue] = React.useState(initialValue);
  const [changedValue, setChangedValue] = React.useState("");
  const changeValue = (valueToChange: string) => {
    if (!valueToChange) {
      return valueToChange;
    }
    const arrayChars = valueToChange.split("");
    let newValue = "";
    const length = arrayChars.length;
    arrayChars.forEach((c, index) => {
      newValue += arrayChars[length - (index + 1)];
    });
    return newValue;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  React.useEffect(() => {
    console.log(
      "value",
      value,
      "changedValue",
      changedValue,
      "initialValue",
      initialValue,
      "onChange",
      onChange,
      changedValue !== value && value,
    );
    if (changedValue.length !== ((value || "") as string).length && value) {
      const newValue = changeValue(value as string);
      setChangedValue(newValue as string);
      if (onChange) {
        onChange({
          target: { value: newValue },
        } as React.ChangeEvent<HTMLInputElement>);
      }
    }
  }, [value, changedValue, initialValue, onChange]);
  return {
    value: changedValue,
    onChange: handleChange,
  };
};
export default useInput;
