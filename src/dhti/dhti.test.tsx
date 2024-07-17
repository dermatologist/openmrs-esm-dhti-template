import React from 'react';
import { render, screen } from '@testing-library/react';
import { useConfig } from '@openmrs/esm-framework';
import { Config } from '../config-schema';
import Dhti from './dhti-template.component';

const mockUseConfig = useConfig as jest.Mock;

it('displays the expected default text', () => {
  const config: Config = { casualGreeting: false, whoToGreet: ['World'] };
  mockUseConfig.mockReturnValue(config);

  render(<Dhti />);

  expect(screen.getByRole('heading', { name: /patient search/i })).toBeInTheDocument();
});


