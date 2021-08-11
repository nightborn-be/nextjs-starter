import { COLORS } from "../../../../constants/colors";
import { FONT_SIZES, FONT_WEIGHT } from "../../../../constants/font";
import ParagraphProps from "./props";

export default function Paragraph({ children, size = FONT_SIZES.REGULAR, weight = FONT_WEIGHT.REGULAR, color = COLORS.BLACK.T500, className }: ParagraphProps) {
	return (
		<p className={className} style={{ color: color.hex, fontSize: size, fontWeight: weight }}>
			{children}
		</p>
	);
}
