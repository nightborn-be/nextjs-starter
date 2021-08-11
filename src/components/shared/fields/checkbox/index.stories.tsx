import React from "react";
import { Story, Meta } from "@storybook/react";
import Checkbox from ".";
import { CheckboxProps } from "./props";

export default {
  component: Checkbox,
  title: "fields/checkbox",
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  value: false,
};
