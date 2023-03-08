import React from 'react';
import { render, screen } from '@testing-library/react';
import AmftendoApp from './AmftendoApp';

test('renders learn react link', () => {
	render(<AmftendoApp />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
