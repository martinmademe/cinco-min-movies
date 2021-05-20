import 'react-native';
import 'react-native-gesture-handler/jestSetup';

import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react-native';

import * as RESPONSE from './mockResponse.json';

import App from '../src/App';
import Search from '../src/components/Search';

// Need to mock this to silence warnings
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Make fetch -> resolve mock
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(RESPONSE),
  }),
);

// Clean up after each test to avoid errors
afterEach(cleanup);

describe('App', () => {
  test('renders the App with a search...', () => {
    const { getByTestId } = render(<App />);
    const searchField = getByTestId('search-box');

    expect(searchField).toBeTruthy();
  });

  test('&& the search updates when i type a query...', () => {
    const SEARCH_TERM = 'a film';
    const onChangeTextMock = jest.fn();
    const { getByTestId } = render(
      <Search setSearchText={onChangeTextMock} searchText={SEARCH_TERM} />,
    );

    fireEvent.changeText(getByTestId('search-box'), SEARCH_TERM);
    expect(onChangeTextMock).toHaveBeenCalledWith('a film');
  });

  test('&& a query returns a list of items...', async (done) => {
    const { getByTestId, findAllByTestId } = render(<App />);

    const button = getByTestId('button');
    fireEvent(button, 'press');
    done();

    const listItems = await findAllByTestId('list-item');
    expect(listItems).toHaveLength(3);
  });

  test('|| a query returns an error...', async (done) => {
    // Make fetch -> catch
    fetch.mockImplementationOnce(() => Promise.reject());

    const { getByTestId, findByTestId } = render(<App />);

    const button = getByTestId('button');
    fireEvent(button, 'press');
    done();

    const error = await findByTestId('error');
    expect(error).toBeTruthy();
  });

  test('&& clicking a list item takes you to the detail page', async (done) => {
    const { getByTestId, findByTestId } = render(<App />);

    const button = getByTestId('button');
    fireEvent(button, 'press');
    done();

    const item = await findByTestId('299534');
    fireEvent(item, 'press');
    done();

    const detailView = await getByTestId('detail-view');
    expect(detailView).toBeTruthy();
  });
});
