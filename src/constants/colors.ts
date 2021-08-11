export interface Colors {
	BACKGROUND: Color;
	DANGER: ColorPallet;
	ORANGE: ColorPallet;
	GREEN: ColorPallet;
	BLUE: ColorPallet;
	GRAY: ColorPallet;
	BLACK: ColorPallet;
}

export interface ColorPallet {
	T50: Color;
	T100: Color;
	T200: Color;
	T300: Color;
	T400: Color;
	T500: Color;
	T600: Color;
	T700: Color;
}

export interface Color {
	hex: string;
}

export const COLORS: Colors = {
	BACKGROUND: {
		hex: "#FAFBFC",
	},
	DANGER: {
		T700: {
			hex: "#1B1A1A",
		},
		T600: {
			hex: "#C54E4E",
		},
		T500: {
			hex: "#F46363",
		},
		T400: {
			hex: "#575656",
		},
		T300: {
			hex: "#818080",
		},
		T200: {
			hex: "#ABABAB",
		},
		T100: {
			hex: "#D5D5D5",
		},
		T50: {
			hex: "#E9EBF2",
		},
	},
	ORANGE: {
		T700: {
			hex: "#1B1A1A",
		},
		T600: {
			hex: "#242323",
		},
		T500: {
			hex: "#EE8F5A",
		},
		T400: {
			hex: "#575656",
		},
		T300: {
			hex: "#818080",
		},
		T200: {
			hex: "#ABABAB",
		},
		T100: {
			hex: "#D5D5D5",
		},
		T50: {
			hex: "#E9EBF2",
		},
	},
	GREEN: {
		T700: {
			hex: "#1B1A1A",
		},
		T600: {
			hex: "#242323",
		},
		T500: {
			hex: "#2ED477",
		},
		T400: {
			hex: "#575656",
		},
		T300: {
			hex: "#818080",
		},
		T200: {
			hex: "#ABABAB",
		},
		T100: {
			hex: "#D5D5D5",
		},
		T50: {
			hex: "#E9EBF2",
		},
	},
	BLUE: {
		T700: {
			hex: "#1B1A1A",
		},
		T600: {
			hex: "#242323",
		},
		T500: {
			hex: "#3F8CFF",
		},
		T400: {
			hex: "#575656",
		},
		T300: {
			hex: "#818080",
		},
		T200: {
			hex: "#ABABAB",
		},
		T100: {
			hex: "#D5D5D5",
		},
		T50: {
			hex: "#E9EBF2",
		},
	},
	GRAY: {
		T700: {
			hex: "#1B1A1A",
		},
		T600: {
			hex: "#242323",
		},
		T500: {
			hex: "#8F95B2",
		},
		T400: {
			hex: "#575656",
		},
		T300: {
			hex: "#818080",
		},
		T200: {
			hex: "#ABABAB",
		},
		T100: {
			hex: "#D5D5D5",
		},
		T50: {
			hex: "#E9EBF2",
		},
	},
	BLACK: {
		T700: {
			hex: "#1B1A1A",
		},
		T600: {
			hex: "#242323",
		},
		T500: {
			hex: "#2D2C2C",
		},
		T400: {
			hex: "#575656",
		},
		T300: {
			hex: "#818080",
		},
		T200: {
			hex: "#ABABAB",
		},
		T100: {
			hex: "#D5D5D5",
		},
		T50: {
			hex: "#E9EBF2",
		},
	},
};
