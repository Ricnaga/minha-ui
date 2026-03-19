import { render, screen } from '@testing-library/react';
import { RangeCalendar } from '..';
import { vi } from 'vitest';

describe('RangeCalendar', () => {
  it('should match snapshot', () => {
    const { container } = render(<RangeCalendar onDateChange={vi.fn()} />);
    expect(container).toMatchSnapshot();
  });

  it('should render range calendar with navigation', () => {
    render(<RangeCalendar onDateChange={vi.fn()} />);
    expect(screen.getAllByRole('button')).toHaveLength(44);
  });
});
