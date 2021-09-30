// .storybook/preview.js
import { themes } from "@storybook/theming";
import { addDecorator } from "@storybook/react";

import * as nextImage from "next/image";
import { ChakraProvider } from "@chakra-ui/react";

addDecorator((StoryFn) => (
	<ChakraProvider resetCSS>
		<StoryFn />
	</ChakraProvider>
));

// Replace next/image for Storybook
Object.defineProperty(nextImage, "default", {
	configurable: true,
	value: (props) => {
		const { width, height, layout } = props;

		if (layout === "fill") {
			return (
				<img
					style={{
						objectFit: "cover",
						position: "absolute",
						width: "100%",
						height: "100%",
					}}
					{...props}
				/>
			);
		}

		const ratio = (height / width) * 100;

		return (
			<div
				style={{
					paddingBottom: `${ratio}%`,
					position: "relative",
				}}
			>
				<img
					style={{
						objectFit: "cover",
						position: "absolute",
						width: "100%",
						height: "100%",
					}}
					{...props}
				/>
			</div>
		);
	},
});
