import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../src/Components/Header/Header';
import EventTablet from '../src/Components/EventTablet/EventTablet';

// 1. Renders the specified component
// 2. Tries to find the text "string" on the screen
// 3. Uses expect() to see if link element specified is in the document

it("Header renders", () => {
    render(<Header />);
    const linkElement = screen.getByText(/Five/i)
    
    expect(linkElement).toBeInTheDocument();
});

it("EventTablet renders", () => {
    render(<EventTablet />);
    const linkElement = screen.getByText(/Upcoming/i)
    
    expect(linkElement).toBeInTheDocument();
});
