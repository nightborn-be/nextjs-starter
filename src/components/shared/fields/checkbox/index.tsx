import Container from "../../composers/container";
import Flex from "../../composers/flex";
import { useState, useEffect } from "react";
import { CheckboxProps } from "./props";
import Ticked from "../../../all/icons/ticked";

const Checkbox = ({ value, onChange }: CheckboxProps) => {
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [outline, setOutline] = useState("border-[#8F95B2]");

  useEffect(() => {
    if (value === false) {
      setBgColor("bg-transparent");
      setOutline("border-[#8F95B2]");
    } else {
      setBgColor("bg-[#3F8CFF]");
      setOutline("border-[#3F8CFF]");
    }
  }, [value]);

  return (
    <Container
      className={`${outline} ${bgColor} border-2 rounded w-[20px] h-[20px] duration-100`}
      onChange={onChange}
    >  
      <Flex align="center" justify="center">
        <Ticked width="11px" height="8px" fill="white" />
      </Flex>
    </Container>
  );
};
export default Checkbox;
