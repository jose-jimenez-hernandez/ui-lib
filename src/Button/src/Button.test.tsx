import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Button.stories';

const { VariantPrimary, VariantSecondary, VariantTertiary, VariantLink, StateDisabled, StateLoading } =
  composeStories(stories);

it('renders correctly', () => {
  const variantPrimary = render(<VariantPrimary />).baseElement;
  const variantSecondary = render(<VariantSecondary />).baseElement;
  const variantTertiary = render(<VariantTertiary />).baseElement;
  const variantLink = render(<VariantLink />).baseElement;
  const stateDisabled = render(<StateDisabled />).baseElement;
  const stateLoading = render(<StateLoading />).baseElement;

  expect(variantPrimary).toMatchSnapshot();
  expect(variantSecondary).toMatchSnapshot();
  expect(variantTertiary).toMatchSnapshot();
  expect(variantLink).toMatchSnapshot();
  expect(stateDisabled).toMatchSnapshot();
  expect(stateLoading).toMatchSnapshot();
});

test('should get the primary button with default args', () => {
  render(<VariantPrimary />);
  const buttonElement = screen.getByText('Settle Primary Button');
  expect(buttonElement).not.toBeNull();
});

test('should get a primary button overriding props', () => {
  render(<VariantPrimary>Hello world</VariantPrimary>); // you can override props and they will get merged with values from the Story's args
  const buttonElement = screen.getByText('Hello world');
  expect(buttonElement).not.toBeNull();
});

test('should be able to response to mouse event', () => {
  const mockHandler = jest.fn();
  render(<VariantPrimary onClick={mockHandler} onMouseMove={mockHandler} />);
  const target = screen.getByText('Settle Primary Button');
  fireEvent.click(target);
  fireEvent.mouseMove(target);

  expect(mockHandler).toBeCalledTimes(2);
});

test('should get a disabled button', () => {
  render(<StateDisabled />);
  const buttonElement = screen.getByText('Settle Disabled Button');
  expect(buttonElement).toBeDisabled();
});

test('should get a loading button', () => {
  const { container } = render(<StateLoading />);
  const result = container.querySelector('svg');

  expect(result).not.toBeNull();
});
