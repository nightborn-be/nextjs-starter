import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import TextButton from "./index"
import TextButtonProps from "./props"

export default {
  title: "Components/Shared/Buttons/TextButton",
  component: TextButton,
} as Meta

const Template: Story<TextButtonProps> = (args) => <TextButton {...args} />

// Default scenario
export const Default = Template.bind({})

Default.args = {
  children: 'myButton',
  type: 'primary',
  className: ''
}