import React from "react"
import Switch from "./index"
import { Story, Meta } from "@storybook/react/types-6-0"

export default {
  title: "Components/Shared/Controls/Switch",
  component: Switch,
} as Meta

const Template: Story = (args: any) => <Switch {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {
    value: true,
    onChange: () => {}
}