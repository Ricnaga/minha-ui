import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Chip } from '..';

describe('Chip', () => {
  it('should render chip correctly', () => {
    const { container } = render(<Chip>Tag</Chip>);
    expect(container).toMatchSnapshot();
  });

  it('should render chip with text', () => {
    render(<Chip>React</Chip>);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('should call onClick when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Chip onClick={handleClick}>Clickable</Chip>);

    await user.click(screen.getByText('Clickable'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
