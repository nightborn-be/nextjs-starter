export default interface IconButtonProps {
    src: string;
    width: number;
    height: number;
    className?: string;
    onClick: () => void;
    type?: "primary" | "secondary" | "success" | "danger";
}