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
  it('should render correctly', () => {
    const { container } = render(<TestDatePicker />);
    expect(container).toMatchSnapshot();
  });

  it('should render input', () => {
    render(<TestDatePicker />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
