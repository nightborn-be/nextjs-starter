import ButtonProps from "./props";
import { useState } from "react";
import { motion } from "framer-motion";
import TextButtonProps from "./props";

export default function TextButton({
  className = "",
  children,
  type = "primary",
  ...rest
}: TextButtonProps) {

  return (
    <motion.button
      {...rest}
      whileHover={{scale: 0.9875}} 
      whileTap={{scale: 1.0125}}
      className={`py-2 px-4 flex flex-row flex-1 shadow text-base rounded-md bg-${type} text-white items-center font-semibold justify-center outline-none ${className}`}
    >
      {children}
    </motion.button>
  );
}
