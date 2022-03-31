import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import Button from './Button';
import { ButtonVariantType } from './ButtonType';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'tertiary', 'link'] },
    size: { control: 'select', options: ['xs', 'sm', 'base', 'lg', 'xl'] },
  },
};

// Create a master template for mapping args to render the Button component
const TemplateButton: Story = (args) => (
  <>
    <div className="mt-2 flex justify-between w-full">
      <Button text=" Settle primary button" {...args} variant={ButtonVariantType.PRIMARY} />
      <Button text=" Settle secondary button" {...args} variant={ButtonVariantType.SECONDARY} />
      <Button text=" Settle tertiary button" {...args} variant={ButtonVariantType.TERTIARY} />
      <Button text=" Settle link button" {...args} variant={ButtonVariantType.LINK} />
    </div>
  </>
);

export const DefaultButton = TemplateButton.bind({});
DefaultButton.args = { text: 'Settle Default Button' };

export const DisabledButton = TemplateButton.bind({});
DisabledButton.args = { disabled: true, text: 'Settle Disabled Button', color: 'primary' };
