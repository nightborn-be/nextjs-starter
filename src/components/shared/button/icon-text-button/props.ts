  
import { DetailedHTMLProps } from "react";

export interface IconTextButtonProps extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> {
    icon: 'trashcan',
    shape?: 'square',
    height?: string,
    width?: string,
    text: string
}