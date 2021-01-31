import React from 'react';
import { act, create } from 'react-test-renderer';
import PaginatorButton from './PaginatorButton';

describe('PaginatorButton', () => {
  test('should be defined', () => {
    expect(PaginatorButton).toBeDefined();
  });

  test('should render button', () => {
    const component = create(
      <PaginatorButton text={2} onSelectPage={() => {}} />,
    );
    expect(() => {
      component.root.findByType('button');
    }).not.toThrow();
  });

  test.each([
    [1, '1'],
    [2, '2'],
    ['', ''],
    ['next', 'next'],
  ])('should render correct text', (arg, expected) => {
    const component = create(
      <PaginatorButton text={arg} onSelectPage={() => {}} />,
    );
    const button = component.root.findByType('button');

    expect(button.children[0]).toBe(expected);
  });

  test('should call callback on select page', () => {
    const mockCallback = jest.fn();

    const component = create(
      <PaginatorButton text={2} onSelectPage={mockCallback} />,
    );
    const button = component.root.findByType('button');

    act(() => {
      button.props.onClick();
    });
    expect(mockCallback.mock.calls.length).toBe(1);

    act(() => {
      button.props.onClick();
    });
    expect(mockCallback.mock.calls.length).toBe(2);
  });

  test(`should not call callback if 'disabled'`, () => {
    const mockCallback = jest.fn();
    const component = create(
      <PaginatorButton text={2} onSelectPage={mockCallback} disabled={true} />,
    );

    const button = component.root.findByType('button');

    act(() => {
      button.props.onClick();
    });
    expect(mockCallback.mock.calls.length).toBe(0);
  });

  test(`should has disabled class if 'disabled`, () => {
    const mockCallback = jest.fn();
    const component = create(
      <PaginatorButton text={2} onSelectPage={mockCallback} disabled={true} />,
    );

    const button = component.root.findByType('button');

    expect(button.props.className).toBe(
      'paginator__button paginator__button_disabled',
    );
  });
});
