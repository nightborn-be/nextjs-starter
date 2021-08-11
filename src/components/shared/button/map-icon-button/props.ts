  
import { DetailedHTMLProps } from "react";

export interface IconMapButtonProps extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> {
    icon: 'agency' | 'seller'
}