import React from 'react';
import { act, create } from 'react-test-renderer';
import Paginator, { getSlice, getTotalPageCount } from './Paginator';
import PaginatorButton from './PaginatorButton/PaginatorButton';

describe('Paginator', () => {
  describe('Logic', () => {
    describe('getTotalPageCount', () => {
      test('should be defined', () => {
        expect(getTotalPageCount).toBeDefined();
      });

      test('should return number', () => {
        expect(typeof getTotalPageCount(10, 4)).toBe('number');
      });

      test('should return integer', () => {
        const result = getTotalPageCount(10, 4);
        expect(parseInt(result)).toBe(result);
      });

      test.each([
        [[0, 0], null],
        [[0, 5], null],
        [[1, 5], 1],
        [[9, 5], 2],
        [[10, 5], 2],
        [[11, 5], 3],
      ])('for (%s) should return %p', (args, expected) => {
        expect(getTotalPageCount(...args)).toBe(expected);
      });
    });

    describe('getSlice', () => {
      let result;
      beforeEach(() => {
        result = getSlice(10, 6, 10);
      });

      test('should be defined', () => {
        expect(getSlice).toBeDefined();
      });

      test('should return array', () => {
        expect(result).toBeInstanceOf(Array);
      });

      test('should return array of numbers', () => {
        expect(isNumberArray(result)).toBeTruthy();
      });

      test('should return empty array for incorrect arguments', () => {
        expect(getSlice(0, 0, 0)).toEqual([]);
        expect(getSlice(null, null, null)).toEqual([]);
        expect(getSlice(-1, -1, -1)).toEqual([]);
        expect(getSlice()).toEqual([]);
      });

      test('should return all pages, if slice > total page count', () => {
        expect(getSlice(3, 1, 5)).toEqual([1, 2, 3]);
        expect(getSlice(3, 2, 5)).toEqual([1, 2, 3]);
        expect(getSlice(3, 3, 5)).toEqual([1, 2, 3]);
      });

      test(`if previous pages count < half of the slice, should take additional pages from next pages`, () => {
        expect(getSlice(10, 2, 5)).toEqual([1, 2, 3, 4, 5]);
        expect(getSlice(10, 3, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
      });

      test(`if next pages count < half of the slice, should take additional pages from previous pages`, () => {
        expect(getSlice(20, 19, 5)).toEqual([16, 17, 18, 19, 20]);
        expect(getSlice(20, 20, 5)).toEqual([16, 17, 18, 19, 20]);
      });

      test.each([
        [
          [20, 10, 5],
          [8, 9, 10, 11, 12],
        ],
        [
          [20, 10, 4],
          [8, 9, 10, 11],
        ],
        [
          [200, 154, 10],
          [149, 150, 151, 152, 153, 154, 155, 156, 157, 158],
        ],
      ])('should return correct result (%s) => (%s))', (args, expected) => {
        expect(getSlice(...args)).toEqual(expected);
      });
    });
  });

  describe('Component', () => {
    test('should be defined', () => {
      expect(Paginator).toBeDefined();
    });

    describe('rendering', () => {
      let props;
      let component;
      let root;
      beforeEach(() => {
        props = {
          totalItemsCount: 750,
          currentPage: 20,
          itemsPerPage: 10,
          onPageChanged: () => {},
        };
        component = create(<Paginator {...props} />);
        root = component.root;
      });

      describe('page buttons', () => {
        test('should be displayed', () => {
          let buttons;

          expect(() => {
            buttons = root
              .findAllByType(PaginatorButton)
              .filter(
                (btn) => btn.props.text !== 'Prev' && btn.props.text !== 'Next',
              );
          }).not.toThrow();
          expect(buttons.length).toBeGreaterThan(0);
        });

        test('should be displayed correct count of page buttons', () => {
          const { totalItemsCount, itemsPerPage, currentPage } = props;
          const totalPageCount = getTotalPageCount(
            totalItemsCount,
            itemsPerPage,
          );
          const pageButtonsCount = getSlice(totalPageCount, currentPage, 10)
            .length;
          const extremeButtonCount = 2;

          let buttons;
          expect(() => {
            buttons = root
              .findAllByType(PaginatorButton)
              .filter(
                (btn) => btn.props.text !== 'Prev' && btn.props.text !== 'Next',
              );
          }).not.toThrow();
          expect(buttons.length).toBe(pageButtonsCount + extremeButtonCount);
        });
      });

      describe(`'prev' and 'next' buttons`, () => {
        test(`should display only 'prev' button`, () => {
          const component = create(
            <Paginator
              totalItemsCount={100}
              currentPage={10}
              itemsPerPage={10}
              onPageChanged={() => {}}
              sliceSize={5}
            />,
          );
          const root = component.root;
          const prevButton = root.findByProps({ children: 'Prev' });

          expect(prevButton).toBeDefined();
          expect(() => {
            // eslint-disable-next-line no-unused-vars
            const nextButton = root.findByProps({ children: 'Next' });
          }).toThrow();
        });

        test(`should display only 'next' button`, () => {
          const component = create(
            <Paginator
              totalItemsCount={100}
              currentPage={1}
              itemsPerPage={10}
              onPageChanged={() => {}}
              sliceSize={5}
            />,
          );
          const root = component.root;
          const nextButton = root.findByProps({ children: 'Next' });

          expect(nextButton).toBeDefined();
          expect(() => {
            // eslint-disable-next-line no-unused-vars
            const prevButton = root.findByProps({ children: 'Prev' });
          }).toThrow();
        });

        test(`should display 'prev' and 'next' buttons`, () => {
          const root = component.root;

          const prevButton = root.findByProps({ children: 'Prev' });
          const nextButton = root.findByProps({ children: 'Next' });

          expect(nextButton).toBeDefined();
          expect(prevButton).toBeDefined();
        });
      });

      test(`only current page button should has 'disabled' status`, () => {
        const button = root.findByProps({
          className: 'paginator__button paginator__button_disabled',
        });
        expect(button.props.children).toBe(props.currentPage);
      });
    });

    describe('interactivity', () => {
      let mockCallback, props, component, root;
      beforeEach(() => {
        mockCallback = jest.fn();
        props = {
          totalItemsCount: 750,
          currentPage: 20,
          itemsPerPage: 10,
          onPageChanged: mockCallback,
        };

        component = create(<Paginator {...props} />);
        root = component.root;
      });

      test('should run callback on page button click', () => {
        const button1 = root.findByProps({ children: props.currentPage + 1 });
        const button2 = root.findByProps({ children: props.currentPage - 1 });

        act(() => {
          button1.props.onClick();
          button2.props.onClick();
        });

        expect(mockCallback.mock.calls.length).toBe(2);
      });

      test('should run callback with correct page number', () => {
        const pageNumber = props.currentPage + 2;
        const button = root.findByProps({ children: pageNumber });

        act(() => {
          button.props.onClick();
        });

        expect(mockCallback.mock.calls[0][0]).toBe(pageNumber);
      });

      test('current page button should be disabled', () => {
        const { currentPage } = props;

        const button = root.findByProps({ children: currentPage });

        act(() => {
          button.props.onClick();
        });

        expect(mockCallback.mock.calls.length).toBe(0);
      });

      test(`'prev' button should link to previous page`, () => {
        const pageNumber = props.currentPage - 1;
        const button = root.findByProps({ children: 'Prev' });

        act(() => {
          button.props.onClick();
        });

        expect(mockCallback.mock.calls[0][0]).toBe(pageNumber);
      });

      test(`'next' button should link to next page`, () => {
        const pageNumber = props.currentPage + 1;
        const button = root.findByProps({ children: 'Next' });

        act(() => {
          button.props.onClick();
        });

        expect(mockCallback.mock.calls[0][0]).toBe(pageNumber);
      });
    });
  });
});

function isNumberArray(arr) {
  if (!Array.isArray(arr)) return false;
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] !== 'number') return false;
  }
  return true;
}
