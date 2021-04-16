import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export default interface TextInputPropsProps
    extends Omit<
        DetailedHTMLProps<
            InputHTMLAttributes<HTMLInputElement>,
            HTMLInputElement
        >,
        "onChange"
    > {
    theme?: "light" | "dark";
    label?: string;
    onChange?(value: string): void;
}
