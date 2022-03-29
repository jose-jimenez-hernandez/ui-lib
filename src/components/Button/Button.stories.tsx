import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: { control: 'select', options: ['primary', 'red', 'black', 'white'] },
    shape: { control: 'select', options: ['contained', 'outlined', 'text'] },
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const TemplateButton: Story = (args) => <Button {...args} />;

export const DefaultButton = TemplateButton.bind({});
DefaultButton.args = { children: 'Settle Default Button' };

export const DisabledButton = TemplateButton.bind({});
DisabledButton.args = { disabled: true, children: 'Settle Disabled Button', color: 'primary' };
