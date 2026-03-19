import { render, screen } from '@testing-library/react';
import { DateRangePickerProvider } from '../../DateRangePickerProvider/DateRangePickerProvider';
import { DateRangePickerInput } from '..';
import { vi } from 'vitest';

describe('DateRangePickerInput', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <DateRangePickerProvider dateValue={null} onRangeDateChange={vi.fn()}>
        <DateRangePickerInput />
      </DateRangePickerProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render inputs', () => {
    render(
      <DateRangePickerProvider dateValue={null} onRangeDateChange={vi.fn()}>
        <DateRangePickerInput />
      </DateRangePickerProvider>,
    );
    expect(screen.getAllByRole('textbox')).toHaveLength(1);
  });
});
