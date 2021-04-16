import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import TextInput from "./index"
import TextInputProps from "./props"

export default {
  title: "Components/Shared/Fields/TextInput",
  component: TextInput,
  argTypes: {
    children: { control: "string" }
  }
} as Meta

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {
    placeholder: 'myInput'
}