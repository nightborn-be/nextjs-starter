import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import PopUp from "./index"

export default {
  title: "Components/Shared/PopUp",
  component: PopUp
} as Meta

const Template: Story = (args: any) => <PopUp {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {
    children: "hello",
    isOpen: true,
    onClose: () => {},
    intensity: 4
}