import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const TemplateButton: Story = (args) => <Button {...args} />;

export const DefaultButton = TemplateButton.bind({});
DefaultButton.args = { children: "Settle Default Button" };

export const DisabledButton = TemplateButton.bind({});
DisabledButton.args = { disabled: true, children: "Settle Disabled Button" };
