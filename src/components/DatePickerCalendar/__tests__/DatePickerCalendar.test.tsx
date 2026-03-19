import { render, screen } from '@testing-library/react';
import { DatePickerProvider } from '../../DatePickerProvider/DatePickerProvider';
import { DatePickerCalendar } from '..';
import { vi } from 'vitest';

describe('DatePickerCalendar', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <DatePickerProvider dateValue={null} onDateChange={vi.fn()}>
        <DatePickerCalendar />
      </DatePickerProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render calendar with navigation', () => {
    render(
      <DatePickerProvider dateValue={null} onDateChange={vi.fn()}>
        <DatePickerCalendar />
      </DatePickerProvider>,
    );
    expect(screen.getByLabelText('previous-month')).toBeInTheDocument();
    expect(screen.getByLabelText('next-month')).toBeInTheDocument();
  });
});
