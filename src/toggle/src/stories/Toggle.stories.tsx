import { Story } from '@storybook/react';
import Toggle from '../Toggle';
import ToggleDoc from './Toggle.stories.mdx';
import { SIZE } from '../@settle-ui/utils';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      page: (ToggleDoc as any).parameters?.docs.page,
    },
  },
};

const hideControls = {
  controls: { exclude: /.*/, hideNoControlsWarning: true },
};

const ToggleTemplate: Story = (args: any) => <Toggle {...args} />;

export const $PlayWithMe = ToggleTemplate.bind({});

export const StateOn = ToggleTemplate.bind({});
StateOn.args = { value: true };
StateOn.parameters = hideControls;

export const StateDisabled = ToggleTemplate.bind({});
StateDisabled.args = { disabled: true };
StateDisabled.parameters = hideControls;

export const Label = ToggleTemplate.bind({});
Label.args = { label: 'Toggle label' };
Label.parameters = hideControls;

const ToggleSizeTemplate: Story = () => (
  <div className="flex gap-4">
    <Toggle label="small" size={SIZE.SM} />
    <Toggle label="default" size={SIZE.BASE} />
  </div>
);

export const Size = ToggleSizeTemplate.bind({});
Size.parameters = hideControls;

const ToggleIconTemplate: Story = () => (
  <div className="flex gap-4">
    <Toggle label="switch on" icon={true} checked={true} />
    <Toggle label="switch off" icon={true} />
  </div>
);

export const Icons = ToggleIconTemplate.bind({});
Icons.parameters = hideControls;
