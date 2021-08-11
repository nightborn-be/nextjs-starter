import { Meta, Story } from '@storybook/react';
import React from 'react';
import IconButton from '.';
import { IconButtonProps } from './props';

//👇 This default export determines where your story goes in the story list
export default {
    title: 'button/IconButton',
    component: IconButton
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<IconButtonProps> = (args: IconButtonProps) => <IconButton {...args} />;

export const AddIconButton = Template.bind({});
AddIconButton.args = {
    icon: 'add'
}

export const CrossIconButton = Template.bind({});
CrossIconButton.args = {
    icon: 'cross',
    shape: 'round',
    height: '30px',
    width: '30px',
    iconSize: 'small'
}

export const DownloadIconButton = Template.bind({});
DownloadIconButton.args = {
    icon: 'download'
}

export const EditIconButton = Template.bind({});
EditIconButton.args = {
    icon: 'edit'
}

export const EmptyHeartIconButton = Template.bind({});
EmptyHeartIconButton.args = {
    icon: 'empty_heart'
}

export const FilterIconButton = Template.bind({});
FilterIconButton.args = {
    icon: 'filter'
}

export const FolderIconButton = Template.bind({});
FolderIconButton.args = {
    icon: 'folder'
}

export const FullHeartIconButton = Template.bind({});
FullHeartIconButton.args = {
    icon: 'full_heart'
}

export const OptionsIconButton = Template.bind({});
OptionsIconButton.args = {
    icon: 'options',
    height: '30px',
    width: '30px',
    iconSize: 'small'
}

export const SaveIconButton = Template.bind({});
SaveIconButton.args = {
    icon: 'save'
}

export const TrashcanIconButton = Template.bind({});
TrashcanIconButton.args = {
    icon: 'trashcan'
}

export const UploadIconButton = Template.bind({});
UploadIconButton.args = {
    icon: 'upload',
    height: '48px',
    width: '92px',
    iconSize: 'large'
}

export const BlackHeartIconButton = Template.bind({});
BlackHeartIconButton.args = {
    icon: 'black_heart',
    shape: 'round',
    height: '30px',
    width: '30px',
    iconSize: 'small'
}