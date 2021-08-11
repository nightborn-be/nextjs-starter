import ContainerProps from "./props";

export default function Container({
	type,
	className,
	style,
	fitHeight,
	background,
	border,
	children,
	...rest
}: ContainerProps) {
	function findWidthClass() {
		switch (type) {
			case "full":
				return "full";
			case "3xl":
				return "[375px]";
			case "2xl":
				return "56";
			case "xl":
				return "48";
			case "lg":
				return "40";
			case "md":
				return "32";
			case "sm":
				return "24";
			case "xs":
				return "16";
		}
	}

	return (
		<>
			<div
				{...rest}
				className={`flex flex-col w-${findWidthClass()} ${className}`}
				style={{
					...style,
					...(fitHeight && { height: "fit-content" }),
					background: background?.hex,
					...(border && {
						borderColor: border?.hex,
						borderWidth: 1,
					}),
				}}
			>
				{children}
			</div>
			<div className="hidden justify-end" />
		</>
	);
}
