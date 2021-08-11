import { DetailedHTMLProps } from "react";

export interface SearchFieldProps
	extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	name: string;
	placeholder: string;
	border?: boolean;
	disabled?: boolean;
	disableReset?: boolean;
}
