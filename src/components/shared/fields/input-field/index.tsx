import React, { useState } from "react";
import { InputFieldProps } from "./props";
import Container from "../../composers/container";
import { useField, useFormikContext } from "formik";
import { COLORS } from "../../../../constants/colors";
import Paragraph from "../../text/paragraph";
import { FONT_SIZES } from "../../../../constants/font";
import InputPasswordField from "./password-field";
import string from "../../../../utils/string";
import Flex from "../../composers/flex";
import { motion } from "framer-motion";
import Reset from "../../../all/icons/reset";

const InputField = ({ name, type, placeholder, disabled, disableReset = false, height = "44px" }: InputFieldProps) => {
	// Attributes
	const [isHovered, setIsHovered] = useState(false);
	const [isFocused, setIsFocused] = useState(false);
	const [{ value, onBlur, ...rest }, meta] = useField(name);
	const { setFieldValue } = useFormikContext();

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

	// Input is empty
	function isEmpty() {
		return value === undefined || value.length === 0;
	}

	if (type == "password") {
		return <InputPasswordField name={name} placeholder={placeholder} />;
	}

	// Render
	return (
		<Container type="full" style={{ height }}>
			<Container
				className={`shadow-none bg-white appearance-none outline-none rounded-[10px] h-full ${
					!string.isNullOrUndefined(meta.value) ? "py-[4px]" : "py-[11.5px]"
				} pl-3 w-full`}
				style={{
					borderColor: getBorderColor(),
					borderWidth: 1,
					cursor: disabled ? "not-allowed" : undefined,
				}}
			>
				<Flex type="row" align="center">
					<Container type="full">
						{!string.isNullOrUndefined(meta.value) && (
							<Paragraph color={COLORS.GRAY.T500} size={FONT_SIZES.TINY}>
								{placeholder}
							</Paragraph>
						)}
						<input
							onBlur={(e) => {
								setIsFocused(false);
								onBlur(e);
							}}
							onFocus={() => setIsFocused(true)}
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
							disabled={disabled}
							type={type}
							placeholder={placeholder}
							className={`shadow-none appearance-none outline-none leading-5 bg-transparent w-full`}
							style={{ fontSize: FONT_SIZES.SMALL }}
							value={value}
							{...rest}
						/>
					</Container>
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

			{meta.touched && meta.error && (
				<Paragraph color={COLORS.DANGER.T500} size={FONT_SIZES.EXTRA_SMALL} className="m-1">
					{meta.error}
				</Paragraph>
			)}
		</Container>
	);
};

export default InputField;
