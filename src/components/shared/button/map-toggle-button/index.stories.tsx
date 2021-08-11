import { Meta, Story } from '@storybook/react';
import React from 'react';
import MapToggleButton from '.';
import { MapToggleButtonProps } from './props';

//👇 This default export determines where your story goes in the story list
export default {
    title: 'button/MapToggleButton',
    component: MapToggleButton
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<MapToggleButtonProps> = (args: MapToggleButtonProps) => <MapToggleButton {...args} />;

export const MapToggleButtonPrimary = Template.bind({});
MapToggleButtonPrimary.args = {
    height: '50px',
    width: '46px'
}