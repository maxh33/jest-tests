import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Tests for App component', () => {
  test('App component should render', () => {
    render(<App />)
    expect(screen.getByText('Add')).toBeInTheDocument();
  })
  test('Should add study Python', () => {
    render(<App />)
    fireEvent.change(screen.getByTestId('task-field'), { 
      target: { 
        value: 'study Python' 
      } 
    })
    fireEvent.click(screen.getByTestId('btn-add'))
    expect(screen.getByText('study Python')).toBeInTheDocument()
  })

})