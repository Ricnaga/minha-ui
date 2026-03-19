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
  it('should render correctly', () => {
    const { container } = render(<TestDateRangePicker />);
    expect(container).toMatchSnapshot();
  });

  it('should render input', () => {
    render(<TestDateRangePicker />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
