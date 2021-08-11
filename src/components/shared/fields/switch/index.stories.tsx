import React from "react";
import { Story, Meta } from "@storybook/react";
import SwitchComponent from ".";
import { SwitchComponentProps } from "./props";

//👇 This default export determines where your story goes in the story list
export default {
	title: "fields/switch",
	component: SwitchComponent,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<SwitchComponentProps> = (args: SwitchComponentProps) => <SwitchComponent {...args} />;

export const SwitchButton = Template.bind({});
SwitchButton.args = {
	/*👇 The args you need here will depend on your component */
	value: false,
	onChange: () => {},
};
