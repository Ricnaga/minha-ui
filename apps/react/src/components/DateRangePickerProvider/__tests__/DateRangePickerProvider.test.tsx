import { render, screen } from '@testing-library/react';
import { DateRangePickerProvider } from '..';
import { vi } from 'vitest';

describe('DateRangePickerProvider', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <DateRangePickerProvider dateValue={null} onRangeDateChange={vi.fn()}>
        <div>Content</div>
      </DateRangePickerProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render children', () => {
    render(
      <DateRangePickerProvider dateValue={null} onRangeDateChange={vi.fn()}>
        <div>Content</div>
      </DateRangePickerProvider>,
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
