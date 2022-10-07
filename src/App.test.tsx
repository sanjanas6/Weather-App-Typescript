import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('should render the component', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
// import { render, screen } from '@testing-library/react';
// import App from './App';

// //Parameters: 1- what we want to test 2- Callback function that says how exactly does approach works
// //it can also be used instead of test
// //1. Render a component to be tested
// //2. Find elements we want to interact with
// //3. Interact with relements
// //4. Assure that results are as expected

// test('renders learn react link', () => {

//   render(<App />);
//   //screen looks into components and search for the elements that we want from components
//   const linkElement = screen.getByText(/learn react/i);
//   // const linkElement = screen.
//   //To ensure desried results are achived
//   expect(linkElement).toBeInTheDocument();

// });

