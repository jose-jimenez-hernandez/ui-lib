import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import Spinner from './Spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    color: { control: 'select', options: ['primary-500', 'red-500', 'black', 'white-500'] },
  },
};

// Create a master template for mapping args to render the Button component
const TemplateButton: Story = (args) => <Spinner {...args} />;

export const DefaultButton = TemplateButton.bind({});

export const DisabledButton = TemplateButton.bind({});
