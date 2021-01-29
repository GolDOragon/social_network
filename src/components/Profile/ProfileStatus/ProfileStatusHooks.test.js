import React from 'react';
import { act, create } from 'react-test-renderer';
import ProfileStatusHooks from './ProfileStatusHooks';

describe('ProfileStatus Component', () => {
  test('status from props should be in the state', () => {
    const component = create(<ProfileStatusHooks status="it" />);
    const root = component.root;
    expect(root.props.status).toBe('it');
  });

  test('after creation <span> should be displayed', () => {
    const component = create(<ProfileStatusHooks status="it" />);
    const root = component.root;
    const span = root.findByType('span');
    expect(span).not.toBeNull();
  });

  test(`after creation <input> shouldn't be displayed`, () => {
    const component = create(<ProfileStatusHooks status="it" />);
    const root = component.root;
    expect(() => {
      root.findByType('input');
    }).toThrow();
  });

  test('after creation <span> should be contains correct status', () => {
    const component = create(<ProfileStatusHooks status="it" />);
    const root = component.root;
    const span = root.findByType('span');
    expect(span.children[0]).toBe('it');
  });

  test('should change mode after double click', () => {
    const component = create(<ProfileStatusHooks status="it" />);
    const root = component.root;
    const span = root.findByType('span');
    act(() => {
      span.props.onDoubleClick();
    });
    const input = root.findByType('input');
    expect(input.props.value).toBe('it');
  });

  test('should call callback', () => {
    const mockCallback = jest.fn((status) => status);
    const component = create(
      <ProfileStatusHooks status="it" updateUserStatus={mockCallback} />,
    );
    const root = component.root;
    const span = root.findByType('span');
    act(() => {
      span.props.onDoubleClick();
    });
    const input = root.findByType('input');
    act(() => {
      input.props.onBlur();
    });
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
