import { Meta, Story } from "@storybook/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Popup from ".";
import { PopupProps } from "./props";

//👇 This default export determines where your story goes in the story list
export default {
	title: "Components/Shared/Composers/Popup",
	component: Popup,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<PopupProps> = (args: PopupProps) => (
	<QueryClientProvider client={new QueryClient()}>
		<Popup {...args}>
			<div>test</div>
		</Popup>
	</QueryClientProvider>
);

export const Property = Template.bind({});
Property.args = {
	isOpen: true,
	onRequestClose: () => {},
	isMobile: true,
};
