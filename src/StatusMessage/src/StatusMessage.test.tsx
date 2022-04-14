import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './stories/StatusMessage.stories';

const { $PlayWithMe } = composeStories(stories);

it('renders correctly', () => {
  const state = render(<$PlayWithMe />).baseElement;

  expect(state).toMatchSnapshot();
});
