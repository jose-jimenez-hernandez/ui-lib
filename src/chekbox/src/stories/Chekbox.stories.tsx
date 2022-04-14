import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import Chekbox from '../Chekbox';
import ChekboxDoc from './Chekbox.stories.mdx';

export default {
  title: 'Components/Chekbox',
  component: Chekbox,
  parameters: {
    docs: {
      page: (ChekboxDoc as any).parameters?.docs.page,
    },
  },
};

const ChekboxTemplate: Story = (args: any) => ( <Chekbox  {...args}/>
);

export const DefaultChekbox = ChekboxTemplate.bind({});
DefaultChekbox.args = {  };
