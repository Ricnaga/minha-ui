import { render, screen } from '@testing-library/react';
import { DatePickerProvider } from '..';
import { vi } from 'vitest';

describe('DatePickerProvider', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <DatePickerProvider dateValue={null} onDateChange={vi.fn()}>
        <div>Content</div>
      </DatePickerProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render children', () => {
    render(
      <DatePickerProvider dateValue={null} onDateChange={vi.fn()}>
        <div>Content</div>
      </DatePickerProvider>,
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
