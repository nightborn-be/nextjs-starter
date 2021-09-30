export interface Colors {
	TRANSPARENT: Color;
	BACKGROUND: Color;
	WHITE: Color;
	DANGER: ColorPallet;
	BEIGE: ColorPallet;
	ORANGE: ColorPallet;
	GREEN: ColorPallet;
	BLUE: ColorPallet;
	GREY: ColorPallet;
	BLACK: ColorPallet;
}

export interface ColorPallet {
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
	TRANSPARENT: {
		hex: "transparent",
	},
	BACKGROUND: {
		hex: "#FAFBFC",
	},
	WHITE: {
		hex: "#FFFFFF",
	},
	DANGER: {
		T700: {
			hex: "#923B3B",
		},
		T600: {
			hex: "#C34F4F",
		},
		T500: {
			hex: "#F46363",
		},
		T400: {
			hex: "#F68282",
		},
		T300: {
			hex: "#F8A1A1",
		},
		T200: {
			hex: "#FBC1C1",
		},
		T100: {
			hex: "#FDE0E0",
		},
	},
	BEIGE: {
		T700: {
			hex: "#5C5237",
		},
		T600: {
			hex: "#7B6E4A",
		},
		T500: {
			hex: "#9A895C",
		},
		T400: {
			hex: "#AEA17D",
		},
		T300: {
			hex: "#C2B89D",
		},
		T200: {
			hex: "#D7D0BE",
		},
		T100: {
			hex: "#EBE7DE",
		},
	},
	ORANGE: {
		T700: {
			hex: "#8F5636",
		},
		T600: {
			hex: "#BE7248",
		},
		T500: {
			hex: "#EE8F5A",
		},
		T400: {
			hex: "#F1A57B",
		},
		T300: {
			hex: "#F5BC9C",
		},
		T200: {
			hex: "#F8D2BD",
		},
		T100: {
			hex: "#FCE9DE",
		},
	},
	GREEN: {
		T700: {
			hex: "#1C7F47",
		},
		T600: {
			hex: "#25AA5F",
		},
		T500: {
			hex: "#2ED477",
		},
		T400: {
			hex: "#58DD92",
		},
		T300: {
			hex: "#82E5AD",
		},
		T200: {
			hex: "#ABEEC9",
		},
		T100: {
			hex: "#D5F6E4",
		},
	},
	BLUE: {
		T700: {
			hex: "#265499",
		},
		T600: {
			hex: "#3270CC",
		},
		T500: {
			hex: "#3F8CFF",
		},
		T400: {
			hex: "#65A3FF",
		},
		T300: {
			hex: "#8CBAFF",
		},
		T200: {
			hex: "#B2D1FF",
		},
		T100: {
			hex: "#D9E8FF",
		},
	},
	GREY: {
		T700: {
			hex: "#56596B",
		},
		T600: {
			hex: "#72778E",
		},
		T500: {
			hex: "#8F95B2",
		},
		T400: {
			hex: "#A5AAC1",
		},
		T300: {
			hex: "#BCBFD1",
		},
		T200: {
			hex: "#D2D5E0",
		},
		T100: {
			hex: "#E9EAF0",
		},
	},
	BLACK: {
		T700: {
			hex: "#000000",
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
	},
};
