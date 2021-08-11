import { Meta, Story } from '@storybook/react';
import React from 'react';
import IconMapButton from '.';
import { IconMapButtonProps } from './props';

//👇 This default export determines where your story goes in the story list
export default {
    title: 'button/IconMapButton',
    component: IconMapButton
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<IconMapButtonProps> = (args: IconMapButtonProps) => <IconMapButton {...args} />;

export const AgencyIconMapButton = Template.bind({});
AgencyIconMapButton.args = {
    icon: 'agency'
}

export const SellerIconMapButton = Template.bind({});
SellerIconMapButton.args = {
    icon: 'seller'
}