import { Story } from '@storybook/react';
import { Status } from '../../../utils/types/StatusType';
import StatusMessage from '../StatusMessage';
import StatusMessageDoc from './StatusMessage.stories.mdx';

export default {
  title: 'Components/StatusMessage',
  component: StatusMessage,
  parameters: {
    controls: { exclude: /.*/, hideNoControlsWarning: true },
    docs: {
      page: (StatusMessageDoc as any).parameters?.docs.page,
    },
  },
};

const StatusMessageTemplate: Story = (args: any) => <StatusMessage {...args} />;

export const $PlayWithMe = StatusMessageTemplate.bind({});
$PlayWithMe.parameters = { controls: { exclude: null } };
$PlayWithMe.args = {
  defaultMessage: 'Default status message',
};

const StateTemplate: Story = () => (
  <>
    <StatusMessage defaultMessage="Default status message" status={Status.ERROR} message="Status error message" />
    <StatusMessage defaultMessage="Default status message" status={Status.SUCCESS} message="Status success message" />
    <StatusMessage defaultMessage="Default status message" status={Status.INFO} message="Status info message" />
    <StatusMessage defaultMessage="Default status message" status={Status.DEFAULT} message="Status default message" />
  </>
);

export const States = StateTemplate.bind({});
