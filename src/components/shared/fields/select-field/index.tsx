import React from "react";
import { SelectFieldProps } from "./props";
import Container from "../../composers/container";
import Select, { components } from "react-select";
import Flex from "../../composers/flex";
import Check from "../../../all/icons/check";
import { customStyles } from "./styles";
import ArrowDown from "../../../all/icons/arrow-down";
import Reset from "../../../all/icons/reset";
import { useField, useFormikContext } from "formik";
import { COLORS } from "../../../../constants/colors";
import Paragraph from "../../text/paragraph";
import { FONT_SIZES, FONT_WEIGHT } from "../../../../constants/font";

// Dropdown button
const DropdownIndicator = (props: any) => {
	return (
		components.DropdownIndicator && (
			<components.DropdownIndicator {...props}>
				<ArrowDown
					fill={COLORS.GRAY.T500.hex}
					height="10px"
					width="10px"
					className={props.selectProps.menuIsOpen ? "rotate-180 transform" : ""}
				/>
			</components.DropdownIndicator>
		)
	);
};

// Clear button
const ClearIndicator = (props: any) => {
	return (
		components.ClearIndicator && (
			<components.ClearIndicator {...props}>
				<Reset fill={COLORS.GRAY.T500.hex} height="14px" width="14px" />
			</components.ClearIndicator>
		)
	);
};

const SelectField = ({ name, list, placeholder, icon, className, isMulti = false, ...rest }: SelectFieldProps) => {
	//Attributes
	const [field, meta] = useField(name);
	const { setFieldValue } = useFormikContext<any>();

	const { Option } = components;

	const IconOption = (props: any) => (
		<Option {...props}>
			<Flex justify="between" align="center">
				<Flex type="row" className="space-x-2">
					{icon !== undefined && icon}
					<Paragraph size={FONT_SIZES.SMALL} weight={FONT_WEIGHT.REGULAR} color={COLORS.BLACK.T500}>
						{props.data.label}
					</Paragraph>
				</Flex>
				{props.isSelected && <Check height={"16px"} width={"16px"} fill={COLORS.GRAY.T500.hex} />}
			</Flex>
		</Option>
	);

	//Render
	return (
		<Container className="w-full">
			<Select
				styles={customStyles}
				placeholder={placeholder}
				options={list}
				components={{
					Option: IconOption,
					DropdownIndicator,
					ClearIndicator,
				}}
				isMulti={isMulti}
				hideSelectedOptions={!isMulti}
				value={list ? list.find((option: any) => option.value === field.value) : ""}
				onChange={(option: any) => setFieldValue(field.name, option)}
			/>
		</Container>
	);
};

export default SelectField;
