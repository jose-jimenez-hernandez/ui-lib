import { Story } from '@storybook/react';
import Select from '../Select';
import SelectOption from '../SelectOption';
import SelectDoc from './Select.stories.mdx';

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
  title: 'Components/Select',
  component: Select,
  parameters: {
    docs: {
      page: (SelectDoc as any).parameters?.docs.page,
    },
  },
};

const SelectTemplate: Story = (args: any) => (
  <Select {...args}>
    {items && items.map((item) => <SelectOption key={item.id} label={item.name} value={item}></SelectOption>)}
  </Select>
);

export const DefaultSelect = SelectTemplate.bind({});
DefaultSelect.args = { placeholder: 'Items ', label: 'Hello' };
