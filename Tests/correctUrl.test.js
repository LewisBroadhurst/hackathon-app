import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';

// test('App url is correct', () => {
//     render(<App />);
//     const linkElement = screen.getByText(/Sign in to your account/i);
//     expect(linkElement.href).toContain('localhost:3000');
// })