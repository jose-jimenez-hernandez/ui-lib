import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './stories/Chekbox.stories';

const { DefaultChekbox } =
  composeStories(stories);

it('renders correctly', () => {
  const state = render(<DefaultChekbox />).baseElement;

  expect(state).toMatchSnapshot();
});
