  
import { DetailedHTMLProps } from "react";

export interface MapToggleButtonProps extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> {
    height?: string,
    width?: string
}