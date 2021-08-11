import React from "react";
import { Color } from "../../../../constants/colors";
import { FONT_SIZES, FONT_WEIGHT } from "../../../../constants/font";

export default interface ParagraphProps {
	weight?: FONT_WEIGHT;
	size?: FONT_SIZES;
	color?: Color;
	children?: React.ReactElement | string;
	className?: string;
}
