import React from "react";
import Container from "./index";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Components/Shared/Composers/Container",
  component: Container,
} as Meta

const Template: Story = (args: any) => <Container {...args} />

// Default scenario
export const Default = Template.bind({});

Default.args = {
    className: 'bg-gray-200 rounded-lg p-2',
    children: "hello",
    type: '3xl'
}