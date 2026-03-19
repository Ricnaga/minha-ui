import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import { DatePicker } from '..';

const TestDatePicker = () => {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <DatePicker dateValue={date} onDateChange={setDate}>
      <button>Open</button>
    </DatePicker>
  );
};

describe('DatePicker', () => {
  describe('Rendering', () => {
    it('should render date picker with input', () => {
      render(<TestDatePicker />);
      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute('readonly');
    });
  });

  describe('State', () => {
    it('should render with null date value', () => {
      render(<TestDatePicker />);
      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
    });

    it('should render with date value', () => {
      const TestWithDate = () => {
        const [date, setDate] = useState<Date | null>(new Date(2024, 0, 15));
        return (
          <DatePicker dateValue={date} onDateChange={setDate}>
            <button>Open</button>
          </DatePicker>
        );
      };
      render(<TestWithDate />);
      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
      expect(input).toHaveValue(
        new Date(2024, 0, 15).toLocaleDateString('pt-BR'),
      );
    });
  });
});
