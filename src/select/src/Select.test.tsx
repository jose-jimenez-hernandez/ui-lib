import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './stories/Select.stories';

const { DefaultSelect } = composeStories(stories);

it('renders correctly', () => {
  const state = render(<DefaultSelect />).baseElement;

  expect(state).toMatchSnapshot();
});
