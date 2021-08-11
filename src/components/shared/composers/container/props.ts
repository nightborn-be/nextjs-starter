import React from "react";
import { Color } from "../../../../constants/colors";

export default interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
	type?: "full" | "3xl" | "2xl" | "xl" | "lg" | "md" | "sm" | "xs";
	children?: any;
	fitHeight?: boolean;
	background?: Color;
	border?: Color;
}
