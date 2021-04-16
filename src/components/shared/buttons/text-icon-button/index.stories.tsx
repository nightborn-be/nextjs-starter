import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import TextIconButton from "./index"
import TextIconButtonProps from "./props"

export default {
  title: "Components/Shared/Buttons/TextIconButton",
  component: TextIconButton,
} as Meta

const Template: Story<TextIconButtonProps> = (args) => <TextIconButton {...args} />

// Default scenario
export const Default = Template.bind({})

Default.args = {
  children: 'Rechercher',
  type: 'primary',
  className: '',
  src: '/search.png',
  variant: 'left'
}