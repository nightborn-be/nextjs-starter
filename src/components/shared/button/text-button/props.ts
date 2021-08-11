import { DetailedHTMLProps } from "react";

export interface TextButtonProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	variant?: "primary" | "danger";
	text: string;
	className?: string;
	onClick?: () => void;
}
