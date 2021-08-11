import React from "react";
import { SearchFieldProps } from "./props";
import Container from "../../composers/container";
import Loupe from "../../../all/icons/loupe";
import Reset from "../../../all/icons/reset";
import Flex from "../../composers/flex";
import { motion } from "framer-motion";
import { useField, useFormikContext } from "formik";
import { COLORS } from "../../../../constants/colors";
import { FONT_SIZES } from "../../../../constants/font";

const SearchField = ({
	name,
	placeholder,
	className,
	border = false,
	disabled = false,
	disableReset = false,
	...rest
}: SearchFieldProps) => {
	//Attributes
	const [field, meta] = useField(name);
	const { setFieldValue } = useFormikContext();

	// Input is empty
	function isEmpty() {
		return field.value === undefined || field.value.length === 0;
	}

	//Render
	return (
		<Container
			className={`rounded-[10px] bg-[#FFFFFF] pl-4 w-full ${className} 
        ${border ? `focus:outline-none focus:border-[${COLORS.BLACK.T500.hex}] border-solid border-[1px]` : ""}`}
		>
			<Flex type="row" align="center">
				<Container className="pr-[8px]">
					<Loupe height="24px" width="24px" fill={COLORS.GRAY.T500.hex} />
				</Container>
				<input
					type="text"
					placeholder={placeholder}
					className="outline-none border-none w-full bg-transparent"
					disabled={disabled}
					style={{ fontSize: FONT_SIZES.SMALL }}
					{...field}
				/>
				{!disableReset && !isEmpty() && (
					<motion.button
						type="button"
						whileHover={{ scale: 0.9875 }}
						whileTap={{ scale: 1.0125 }}
						className={`pr-4 pl-2`}
						onClick={() => setFieldValue(name, "")}
					>
						<Reset height="16px" width="16px" />
					</motion.button>
				)}
			</Flex>
		</Container>
	);
};

export default SearchField;
