import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import Dropdown from '../Dropdown';
import DropdownDoc from './Dropdown.stories.mdx';
import DropdownItem from '../DropdownItem';

const items = [
  { id: '1', name: 'Wade Cooper' },
  { id: '2', name: 'Arlene Mccoy' },
  { id: '3', name: 'Devon Webb' },
  { id: '4', name: 'Tom Cook' },
  { id: '5', name: 'Tanya Fox' },
  { id: '6', name: 'Hellen Schmidt' },
  { id: '7', name: 'Caroline Schultz' },
  { id: '8', name: 'Mason Heaney' },
  { id: '9', name: 'Claudie Smitham' },
  { id: '10', name: 'Emil Schaefer' },
];

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      page: (DropdownDoc as any).parameters?.docs.page,
    },
  },
};

const DropdownTemplate: Story = (args: any) => (
  <div className="flex justify-end">
    <Dropdown {...args}>
      {items &&
        items.map((item) => (
          <DropdownItem key={item.id} label={item.name} separator={true} value={item}></DropdownItem>
        ))}
    </Dropdown>
  </div>
);

export const DefaultDropdown = DropdownTemplate.bind({});
DefaultDropdown.args = {};
