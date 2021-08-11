import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Heading from "./index";
import { HeadingProps } from "./props";

export default {
	title: "Components/Shared/Text/Heading",
	component: Heading,
	argTypes: {
		children: { control: "string" },
	},
} as Meta;

const Template: Story<HeadingProps> = (args) => {
	return <Heading {...args} />;
};

// Default scenario
export const Default = Template.bind({});

Default.args = {
	children: "Heading 1",
	type: 1,
	className: "",
};
