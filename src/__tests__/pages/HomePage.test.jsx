import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from '../../pages/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// Mock the react-redux hooks
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

// Mock the firebase auth module
jest.mock('firebase/auth', () => ({
  signOut: jest.fn(),
  getAuth: jest.fn(() => ({})), 
}));

describe('HomePage component', () => {
  const mockDispatch = jest.fn();
  const mockSignOut = jest.requireMock('firebase/auth').signOut;

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders the HomePage component correctly', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });

  test('renders the button correctly', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(screen.getByRole('button', { name: /about/i })).toBeInTheDocument();
  });

  test('handles sign out correctly', async () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    const signOutButton = screen.getByRole('button', { name: /Logout/i });
    fireEvent.click(signOutButton);

    expect(mockSignOut).toHaveBeenCalled();
  });

  test('navigates to about page on button click', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    const aboutButton = screen.getByRole('button', { name: /about/i });
    fireEvent.click(aboutButton);

    expect(window.location.pathname).toBe('/about');
  });
});

