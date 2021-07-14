import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import jest from 'jest'
import App from './App';

describe('<App />',function(){
  it('should be ... when ', () => {
    const {getByTestId} = render(<App />);
    const linkElement = getByTestId("teste-do-botao");
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveTextContent("Action");
  });

  
})

