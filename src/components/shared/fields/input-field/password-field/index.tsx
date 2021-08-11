import React, { useState } from "react";
import { InputPasswordFieldProps } from "./props";
import Container from "../../../composers/container";
import { useField } from "formik";
import { COLORS } from "../../../../../constants/colors";
import Paragraph from "../../../text/paragraph";
import { FONT_SIZES } from "../../../../../constants/font";
import Flex from "../../../composers/flex";
import { motion } from "framer-motion";
import EyeShow from "../../../../all/icons/eye-show";
import EyeHide from "../../../../all/icons/eye-hide";
import string from "../../../../../utils/string";

const InputPasswordField = ({ name, type, placeholder, disabled }: InputPasswordFieldProps) => {
	// Attributes
	const [isEyeClicked, setIsEyeClicked] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const [isFocused, setIsFocused] = useState(false);
	const [{ onBlur, ...rest }, meta] = useField(name);

	// Functions
	function getBorderColor() {
		if (isHovered || isFocused) {
			return COLORS.BLACK.T500.hex;
		}
		if (meta.touched && meta.error) {
			return COLORS.DANGER.T500.hex;
		}

		return COLORS.BLACK.T50.hex;
	}

	// Render
	return (
		<Container>
			<Container
				className={`shadow-none bg-white appearance-none outline-none rounded-[10px] ${
					!string.isNullOrUndefined(meta.value) ? "py-[4px]" : "py-[11.5px]"
				} px-3 w-full`}
				style={{ borderColor: getBorderColor(), borderWidth: 1, cursor: disabled ? "not-allowed" : undefined }}
			>
				<Flex>
					<Flex type="col">
						{!string.isNullOrUndefined(meta.value) && (
							<Paragraph color={COLORS.GRAY.T500} size={FONT_SIZES.TINY}>
								{placeholder}
							</Paragraph>
						)}
						<input
							autoComplete={"none"}
							onBlur={(e) => {
								setIsFocused(false);
								onBlur(e);
							}}
							onFocus={() => setIsFocused(true)}
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
							disabled={disabled}
							type={isEyeClicked ? "text" : "password"}
							placeholder={placeholder}
							className={`shadow-none appearance-none outline-none leading-5 bg-transparent`}
							style={{ fontSize: FONT_SIZES.SMALL }}
							{...rest}
						/>
					</Flex>
					<motion.button
						whileHover={{ scale: 0.9875 }}
						whileTap={{ scale: 1.0125 }}
						className="-ml-8"
						onClick={() => setIsEyeClicked((isEyeClicked) => !isEyeClicked)}
					>
						<Flex align="center">
							{isEyeClicked ? (
								<EyeShow height={"20px"} width={"20px"} />
							) : (
								<EyeHide height={"20px"} width={"20px"} />
							)}
						</Flex>
					</motion.button>
				</Flex>
			</Container>

			{meta.touched && meta.error && (
				<Paragraph color={COLORS.DANGER.T500} size={FONT_SIZES.EXTRA_SMALL} className="m-1">
					{meta.error}
				</Paragraph>
			)}
		</Container>
	);
};

export default InputPasswordField;
