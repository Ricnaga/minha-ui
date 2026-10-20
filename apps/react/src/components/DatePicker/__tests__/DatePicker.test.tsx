import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import { DatePicker } from '..';
import { freezeDate, restoreDate } from '../../../test-utils/date';

const TestDatePicker = () => {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <DatePicker dateValue={date} onDateChange={setDate}>
      <button>Open</button>
    </DatePicker>
  );
};

describe('DatePicker', () => {
  beforeEach(() => freezeDate());
  afterEach(() => restoreDate());

  it('should render correctly', () => {
    const { container } = render(<TestDatePicker />);
    expect(container).toMatchSnapshot();
  });

  it('should render input', () => {
    render(<TestDatePicker />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
