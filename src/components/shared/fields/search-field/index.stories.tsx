import { Meta, Story } from '@storybook/react';
import React from 'react';
import SearchField from '.';
import { SearchFieldProps } from './props';

//👇 This default export determines where your story goes in the story list
export default {
    title: 'fields/SearchField',
    component: SearchField
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<SearchFieldProps> = (args: SearchFieldProps) => <SearchField {...args} />;

export const SearchFieldPrimary = Template.bind({});
SearchFieldPrimary.args = {
    value: '' ,
    placeholder: 'Entrez une région'
}