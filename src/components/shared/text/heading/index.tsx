import { useTranslation } from "react-i18next";
import { COLORS } from "../../../../constants/colors";
import { FONT_WEIGHT } from "../../../../constants/font";
import { HeadingProps } from "./props";

const Heading = ({ type, children, color = COLORS.BLACK.T500, className }: HeadingProps) => {
	const { t } = useTranslation("common");

	function renderHeading(): React.ReactElement {
		switch (type) {
			case 1:
				return (
					<h1
						style={{ fontWeight: FONT_WEIGHT.SEMI_BOLD, color: color.hex }}
						className={`text-[28px] leading-8 ${className}`}
					>
						{t(children)}
					</h1>
				);
			case 2:
				return (
					<h2
						style={{ fontWeight: FONT_WEIGHT.SEMI_BOLD, color: color.hex }}
						className={`text-[24px] leading-6 ${className}`}
					>
						{t(children)}
					</h2>
				);
			case 3:
				return (
					<h3
						style={{ fontWeight: FONT_WEIGHT.SEMI_BOLD, color: color.hex }}
						className={`text-[20px] leading-5 ${className}`}
					>
						{t(children)}
					</h3>
				);
			case 4:
				return (
					<h4
						style={{ fontWeight: FONT_WEIGHT.SEMI_BOLD, color: color.hex }}
						className={`text-[14px] leading-3 ${className}`}
					>
						{t(children)}
					</h4>
				);
			case 5:
				return (
					<h5
						style={{ fontWeight: FONT_WEIGHT.BOLD, color: color.hex }}
						className={`text-[30px] ${className}`}
					>
						{t(children)}
					</h5>
				);

			default:
				return <h1 className={`text-[40px] font-semibold ${className}`}>{t(children)}</h1>;
		}
	}

	return <>{renderHeading()}</>;
};

export default Heading;
