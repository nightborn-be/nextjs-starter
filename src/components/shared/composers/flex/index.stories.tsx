import React from "react"
import Flex from "./index"
import { Story, Meta } from "@storybook/react/types-6-0"

export default {
  title: "Components/Shared/Composers/Flex",
  component: Flex,
} as Meta

const Template: Story = (args: any) => <Flex {...args} />

// Default scenario
export const Default = Template.bind({});

Default.args = {
    children: (
      <div>
        test
      </div>
    ),
    type: 'row',
    justify: 'between',
    align:  'center'
}