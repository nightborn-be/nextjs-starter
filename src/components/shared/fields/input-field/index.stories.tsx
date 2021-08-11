import { Meta, Story } from "@storybook/react";
import React from "react";
import InputField from ".";
import { InputFieldProps } from "./props";

//👇 This default export determines where your story goes in the story list
export default {
	title: "fields/inputs/InputField",
	component: InputField,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<InputFieldProps> = (args: InputFieldProps) => <InputField {...args} />;

export const InputFieldPrimary = Template.bind({});
InputFieldPrimary.args = {
	name: "email",
	placeholder: "email",
	type: "email",
};
