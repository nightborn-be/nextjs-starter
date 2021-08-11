import { Meta, Story } from '@storybook/react';
import React from 'react';
import IconTextButton from '.';
import { IconTextButtonProps } from './props';

//👇 This default export determines where your story goes in the story list
export default {
    title: 'button/IconTextButton',
    component: IconTextButton
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<IconTextButtonProps> = (args: IconTextButtonProps) => <IconTextButton {...args} />;

export const TrashcanIconTextButton = Template.bind({});
TrashcanIconTextButton.args = {
    icon: 'trashcan',
    height: '56px',
    width: '195px',
    text: 'Delete'
}