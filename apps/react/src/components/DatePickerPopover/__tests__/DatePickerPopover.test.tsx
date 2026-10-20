import { render, screen } from '@testing-library/react';
import { DatePickerProvider } from '../../DatePickerProvider/DatePickerProvider';
import { DatePickerPopover } from '..';
import { vi } from 'vitest';
import { freezeDate, restoreDate } from '../../../test-utils/date';

describe('DatePickerPopover', () => {
  beforeEach(() => freezeDate());
  afterEach(() => restoreDate());

  it('should match snapshot', () => {
    const { container } = render(
      <DatePickerProvider dateValue={null} onDateChange={vi.fn()}>
        <DatePickerPopover />
      </DatePickerProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render input', () => {
    render(
      <DatePickerProvider dateValue={null} onDateChange={vi.fn()}>
        <DatePickerPopover />
      </DatePickerProvider>,
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
