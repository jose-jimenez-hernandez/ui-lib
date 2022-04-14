import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './stories/Dropdown.stories';

const { DefaultDropdown } =
  composeStories(stories);

it('renders correctly', () => {
  const state = render(<DefaultDropdown />).baseElement;

  expect(state).toMatchSnapshot();
});
