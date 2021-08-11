import React, { useState, useEffect } from "react";
import Container from "../../composers/container";
import { SwitchComponentProps } from "./props";

const Switch = ({ value, onChange }: SwitchComponentProps) => {
  const [align, setAlign] = useState("translate-x-5");
  const [bgColor, setBgColor] = useState("bg-gray-400");

  useEffect(() => {
    if (value == false) {
      setBgColor("bg-gray-400");
      setAlign("translate-x-5");
    } else {
      setBgColor("bg-green-400");
      setAlign("translate-x-0.5");
    }
  }, [value]);

  return (
    <Container>
      <Container
        className={`grid ${bgColor} rounded-full duration-300 h-4 w-[34px]`}
        onChange={onChange}
      >
        <Container
          className={`${align} bg-white rounded-full self-center duration-300 h-3 w-3`}
        ></Container>
      </Container>
    </Container>
  );
};

export default Switch;
