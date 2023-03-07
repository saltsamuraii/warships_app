import React from 'react';
import { render, screen, waitFor, } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './header';

describe('Header', () => {
    const handleToggleTheme = jest.fn()

  it('render component with light theme', () => {
    render(<Header theme="light" handleToggleTheme={handleToggleTheme} />);

    expect(screen.getByText('World of Warships')).toBeInTheDocument();
    expect(screen.getByAltText('light-theme-icon')).toBeInTheDocument();
    expect(handleToggleTheme).not.toHaveBeenCalled();
  });

  it('render component with dark theme', () => {
    render(<Header theme="dark" handleToggleTheme={handleToggleTheme} />);

    expect(screen.getByAltText('dark-theme-icon')).toBeInTheDocument();
    expect(handleToggleTheme).not.toHaveBeenCalled();
  });

  it('calls handleToggleTheme when theme is switched', async () => {
    render(<Header theme="light" handleToggleTheme={handleToggleTheme} />);

    await waitFor(() => {
        userEvent.click(screen.getByRole('switch'));
        expect(handleToggleTheme).toHaveBeenCalled();
    })
  });
});
