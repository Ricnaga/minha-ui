import { render, screen } from '@testing-library/react';
import { DateRangePickerProvider } from '../../DateRangePickerProvider/DateRangePickerProvider';
import { DateRangePickerPopover } from '..';
import { vi } from 'vitest';

describe('DateRangePickerPopover', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <DateRangePickerProvider dateValue={null} onRangeDateChange={vi.fn()}>
        <DateRangePickerPopover />
      </DateRangePickerProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render inputs', () => {
    render(
      <DateRangePickerProvider dateValue={null} onRangeDateChange={vi.fn()}>
        <DateRangePickerPopover />
      </DateRangePickerProvider>,
    );
    expect(screen.getAllByRole('textbox')).toHaveLength(1);
  });
});
