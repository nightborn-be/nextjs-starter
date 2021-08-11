import { motion } from "framer-motion";
import React from "react";
import { IconMapButtonProps } from "./props";
import Image from "next/image";
import Flex from "../../composers/flex";

const IconMapButton = ({ icon, onClick, className, ...rest }: IconMapButtonProps) => {
	return (
		<motion.button
			whileHover={{ scale: 0.9875 }}
			whileTap={{ scale: 1.0125 }}
			className={`${className}`}
			onClick={onClick}
		>
			<Flex align="center">
				<Image src={`/assets/icons/${icon}.svg`} height="40.16px" width="35px" />
			</Flex>
		</motion.button>
	);
};

export default IconMapButton;
