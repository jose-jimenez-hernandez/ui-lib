import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import Button from './Button';
import { ButtonVariantType } from './ButtonType';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'base', 'lg', 'xl'] },
    variant: {
      table: {
        disable: true,
      },
    },
  },
};

// Create a master template for mapping args to render the Button component
const AllVariantsButtonTemplate: Story = (args) => (
  <>
    <div className="mt-2 flex justify-between w-full">
      <Button text=" Settle primary button" {...args} variant={ButtonVariantType.PRIMARY} />
      <Button text=" Settle secondary button" {...args} variant={ButtonVariantType.SECONDARY} />
      <Button text=" Settle tertiary button" {...args} variant={ButtonVariantType.TERTIARY} />
      <Button text=" Settle link button" {...args} variant={ButtonVariantType.LINK} />
    </div>
  </>
);

const TemplateButton: Story = (args) => <Button {...args} />;

export const All = AllVariantsButtonTemplate.bind({});
All.args = { text: 'Settle Default Button' };

export const VariantPrimary = TemplateButton.bind({});
VariantPrimary.args = { text: 'Settle Primary Button', variant: 'primary' };

export const VariantSecondary = TemplateButton.bind({});
VariantSecondary.args = { text: 'Settle Secondary Button', variant: 'secondary' };

export const VariantTertiary = TemplateButton.bind({});
VariantTertiary.args = { text: 'Settle Tertiary Button', variant: 'tertiary' };

export const VariantLink = TemplateButton.bind({});
VariantLink.args = { text: 'Settle Link Button', variant: 'link' };

export const StateDisabled = TemplateButton.bind({});
StateDisabled.args = { disabled: true, text: 'Settle Disabled Button', variant: 'primary' };
StateDisabled.parameters = {
  controls: { exclude: /.*/, hideNoControlsWarning: true },
};

export const StateLoading = TemplateButton.bind({});
StateLoading.args = { loading: true, text: 'Settle Loading Button', variant: 'primary' };
StateLoading.parameters = {
  controls: { exclude: /.*/, hideNoControlsWarning: true },
};
