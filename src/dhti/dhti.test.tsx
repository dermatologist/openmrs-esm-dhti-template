import React from 'react';
import { render, screen } from '@testing-library/react';
import { useConfig } from '@openmrs/esm-framework';
import { Config } from '../config-schema';
import Dhti from './dhti.component';

const mockUseConfig = useConfig as jest.Mock;

it('displays the expected default text', () => {
  // const config: Config = { casualGreeting: false, whoToGreet: ['World'] };
  // mockUseConfig.mockReturnValue(config);

  render(<Dhti />);

  expect(screen.getByRole('heading', { name: /Submit to LangServe/i })).toBeInTheDocument();
});


