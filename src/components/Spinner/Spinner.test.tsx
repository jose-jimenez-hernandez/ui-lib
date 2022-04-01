import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Spinner.stories';

const { DefaultSpinner } = composeStories(stories);

it('renders correctly', () => {
  const defaultSpinner = render(<DefaultSpinner />).baseElement;
  expect(defaultSpinner).toMatchSnapshot();
});
