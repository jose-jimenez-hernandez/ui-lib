import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './stories/Toggle.stories';

const { $PlayWithMe: DefaultToggle } = composeStories(stories);

it('renders correctly', () => {
  const state = render(<DefaultToggle />).baseElement;

  expect(state).toMatchSnapshot();
});
