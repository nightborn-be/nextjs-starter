import { motion } from "framer-motion";
import { TextButtonProps } from "./props";

const TextButton = ({ variant = "primary", text, className, onClick, type = "submit", ...rest }: TextButtonProps) => {
	function GetBtnColor() {
		switch (variant) {
			case "danger":
				return "#F46363";
			case "primary":
				return "#3F8CFF";

			default:
				break;
		}
	}
	return (
		<motion.button style={{ backgroundColor: GetBtnColor() }} whileHover={{ scale: 0.9875 }} whileTap={{ scale: 1.0125 }} className={`h-11 w-full rounded-xl flex justify-center items-center  text-white font-semibold text-base font-poppinsSemiBold ${className}`} onClick={onClick} type={type}>
			{text}
		</motion.button>
	);
};
export default TextButton;
