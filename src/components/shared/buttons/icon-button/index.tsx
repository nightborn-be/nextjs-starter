import ButtonProps from "./props";
import { useState } from "react";
import { motion } from "framer-motion";
import IconButtonProps from "./props";
import Image from "next/image";

export default function IconButton({
  src="",
  className = "",
  type = "primary",
  width = 35,
  height = 35,
  ...rest
}: IconButtonProps) {

  return (
    <motion.button
      {...rest}
      whileHover={{scale: 0.9875}} 
      whileTap={{scale: 1.0125}}
      className={`p-3 flex flex-row flex-1 shadow text-base rounded-md bg-${type} text-white items-center font-semibold justify-center outline-none ${className}`}
    >
      <div style={{width: width, height: height}}>
        <Image src={src} width={width} height={height} />
      </div>
    </motion.button>
  );
}
