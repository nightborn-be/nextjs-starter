export default interface TextButtonProps {
    children?: string;
    className?: string;
    onClick?: () => void;
    type?: "primary" | "secondary" | "success" | "danger";
}