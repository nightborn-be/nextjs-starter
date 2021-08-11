export default interface FlexProps {
  className?: string;
  type?: "row" | "col";
  align?: "start" | "center" | "end";
  justify?: "start" | "between" | "center" | "end";
  children?: any;
}
