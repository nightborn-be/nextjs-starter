import { Story, Meta } from "@storybook/react";
import DropZone from ".";
import { DropZoneProps } from "./props";

export default {
	component: DropZone,
	title: "fields/dropzone",
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<DropZoneProps> = (args) => <DropZone {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
