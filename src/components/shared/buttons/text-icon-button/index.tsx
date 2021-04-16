import { motion } from "framer-motion";
import Image from "next/image";
import TextIconButtonProps from "./props";

export default function TextIconButton({
  className = "",
  children,
  type = "primary",
  src="",
  variant='left',
  ...rest
}: TextIconButtonProps) {

  if(variant == 'right') {
    return (
      <motion.button
        {...rest}
        whileHover={{scale: 0.9875}} 
        whileTap={{scale: 1.0125}}
        className={`py-2 px-4 flex flex-row flex-1 shadow text-base rounded-md bg-primary text-white items-center font-semibold justify-center outline-none ${className}`}
      >
        {children}
        <div className="w-[16px] h-[16px] ml-2">
          <Image src={src} width={16} height={16} />
        </div>
      </motion.button>
    );
  }

  return (
    <motion.button
      {...rest}
      whileHover={{scale: 0.9875}} 
      whileTap={{scale: 1.0125}}
      className={`py-2 px-4 flex flex-row flex-1 shadow text-base rounded-md bg-primary text-white items-center font-semibold justify-center outline-none ${className}`}
    >
      <div className="w-[16px] h-[16px] mr-2">
        <Image src={src} width={16} height={16} />
      </div>
      {children}
    </motion.button>
  );
}
