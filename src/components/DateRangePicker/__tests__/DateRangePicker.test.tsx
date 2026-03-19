import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import { DateRangePicker } from '..';

type DateRange = {
  from: Date | null;
  to: Date | null;
};

const TestDateRangePicker = () => {
  const [range, setRange] = useState<DateRange | null>(null);

  return (
    <DateRangePicker dateValue={range} onRangeDateChange={setRange}>
      <button>Open</button>
    </DateRangePicker>
  );
};

describe('DateRangePicker', () => {
  describe('Rendering', () => {
    it('should render date range picker with input', () => {
      render(<TestDateRangePicker />);
      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute('readonly');
    });
  });

  describe('State', () => {
    it('should render with null range value', () => {
      render(<TestDateRangePicker />);
      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
      expect(input).toHaveValue('');
    });

    it('should render with range value', () => {
      const TestWithRange = () => {
        const [range, setRange] = useState<DateRange | null>({
          from: new Date(2024, 0, 1),
          to: new Date(2024, 0, 15),
        });
        return (
          <DateRangePicker dateValue={range} onRangeDateChange={setRange}>
            <button>Open</button>
          </DateRangePicker>
        );
      };
      render(<TestWithRange />);
      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
      expect(input).toHaveValue('01/01/2024 - 15/01/2024');
    });
  });
});
