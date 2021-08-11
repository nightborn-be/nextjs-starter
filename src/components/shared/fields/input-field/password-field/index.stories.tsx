import { Meta, Story } from "@storybook/react";
import React from "react";
import PasswordField from ".";
import { InputPasswordFieldProps } from "./props";

//👇 This default export determines where your story goes in the story list
export default {
	title: "fields/inputs/PasswordField",
	component: PasswordField,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<InputPasswordFieldProps> = (args: InputPasswordFieldProps) => <PasswordField {...args} />;

export const PasswordFieldPrimary = Template.bind({});
PasswordFieldPrimary.args = {
	name: "password",
};
