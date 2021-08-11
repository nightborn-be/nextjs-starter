import { DetailedHTMLProps } from "react";

export interface IconButtonProps
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon:
    | "filter"
    | "empty_heart"
    | "full_heart"
    | "trashcan"
    | "folder"
    | "download"
    | "add"
    | "edit"
    | "save"
    | "cross"
    | "options"
    | "add_blue"
    | "upload"
    | "earth"
    | "list"
    | "black_heart";
  iconSize?: "small" | "medium" | "large";
  shape?: "square" | "round";
  height?: string;
  width?: string;
}
