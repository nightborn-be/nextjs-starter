import React from "react"
import IconButton from "./index"
import IconButtonProps from "./props"
import { Story, Meta } from "@storybook/react/types-6-0"
export default {
  title: "Components/Shared/Buttons/IconButton",
  component: IconButton,
} as Meta

const Template: Story<IconButtonProps> = (args) => ( 
  <IconButton {...args} />
);

// Default scenario
export const Default = Template.bind({})

Default.args = {
  src: '/search.png',
  type: 'white',
  width: 35,
  height: 35,
  className: ''
}