import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from '../js/App';
import { Provider } from 'react-redux'
import store from '../store';


test('test navbar', () => {
  const { debug, queryByText, getByTestId } = render(
    <Provider store={store}>
      <App/>
    </Provider>
  )
  expect(queryByText(/Musix/)).toBeInTheDocument()
  
  fireEvent.click(getByTestId('myFav'))

  expect(queryByText(/Empty/)).toBeInTheDocument()

  fireEvent.click(getByTestId('home'))

  expect(queryByText(/Server offline/)).toBeInTheDocument()

});
