/// <reference types="jest" />
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dhti from './dhti.component';
import handleBundle from '../hooks/useBundle';

jest.mock('../hooks/useBundle', () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockHandleBundle = handleBundle as unknown as jest.Mock;

beforeEach(() => {
  jest.resetAllMocks();
});

it('displays the expected default text', () => {
  render(<Dhti />);
  expect(screen.getByRole('heading', { name: /Submit to LangServe/i })).toBeInTheDocument();
});

it('submits message and renders card summary', async () => {
  mockHandleBundle.mockResolvedValueOnce({
    data: { summary: 'High risk for opioid overdose', detail: 'Some detail' },
  });

  render(<Dhti />);

  const textarea = screen.getByRole('textbox');
  const submit = screen.getByRole('button', { name: /submit/i });

  await userEvent.type(textarea, 'hello world');
  await userEvent.click(submit);

  await waitFor(() => {
    expect(mockHandleBundle).toHaveBeenCalledWith('hello world');
  });

  expect(await screen.findByText('High risk for opioid overdose')).toBeInTheDocument();
});

it('falls back to detail when summary is missing', async () => {
  mockHandleBundle.mockResolvedValueOnce({
    data: { detail: 'Only detail available' },
  });

  render(<Dhti />);

  const textarea = screen.getByRole('textbox');
  const submit = screen.getByRole('button', { name: /submit/i });

  await userEvent.type(textarea, 'no summary');
  await userEvent.click(submit);

  expect(await screen.findByText('Only detail available')).toBeInTheDocument();
});

it('clears the input after successful submit', async () => {
  mockHandleBundle.mockResolvedValueOnce({
    data: { summary: 'Card A' },
  });

  render(<Dhti />);

  const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
  const submit = screen.getByRole('button', { name: /submit/i });

  await userEvent.type(textarea, 'message to clear');
  await userEvent.click(submit);

  await screen.findByText('Card A');
  expect(textarea.value).toBe('');
});


