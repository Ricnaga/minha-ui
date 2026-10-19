import { render, screen } from '@testing-library/react';
import { Calendar } from '..';
import { vi } from 'vitest';

describe('Calendar', () => {
  it('should match snapshot', () => {
    const { container } = render(<Calendar onDateChange={vi.fn()} />);
    expect(container).toMatchSnapshot();
  });

  it('should render calendar with navigation buttons', () => {
    render(<Calendar onDateChange={vi.fn()} />);
    expect(screen.getByLabelText('Mês anterior')).toBeInTheDocument();
    expect(screen.getByLabelText('Próximo mês')).toBeInTheDocument();
  });
});
