import { render, screen } from '@testing-library/react';
import { DatePickerProvider } from '../../DatePickerProvider/DatePickerProvider';
import { DatePickerInput } from '..';
import { vi } from 'vitest';

describe('DatePickerInput', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <DatePickerProvider dateValue={null} onDateChange={vi.fn()}>
        <DatePickerInput />
      </DatePickerProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render input', () => {
    render(
      <DatePickerProvider dateValue={null} onDateChange={vi.fn()}>
        <DatePickerInput />
      </DatePickerProvider>,
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
