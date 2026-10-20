import { render, screen } from '@testing-library/react';
import { DateRangePickerProvider } from '../../DateRangePickerProvider/DateRangePickerProvider';
import { DateRangePickerCalendar } from '..';
import { vi } from 'vitest';

describe('DateRangePickerCalendar', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <DateRangePickerProvider dateValue={null} onRangeDateChange={vi.fn()}>
        <DateRangePickerCalendar />
      </DateRangePickerProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render calendars with navigation', () => {
    render(
      <DateRangePickerProvider dateValue={null} onRangeDateChange={vi.fn()}>
        <DateRangePickerCalendar />
      </DateRangePickerProvider>,
    );
    expect(screen.getAllByRole('button')).toHaveLength(44);
  });
});
