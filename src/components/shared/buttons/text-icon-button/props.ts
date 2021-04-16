export default interface TextIconButtonProps {
    src?: string;
    variant: 'left' | 'right';
    children?: string;
    className?: string;
    onClick: () => void;
    type?: "primary" | "secondary" | "success" | "danger";
}