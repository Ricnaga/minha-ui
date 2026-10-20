import { render, screen } from '@testing-library/react';
import { CardActions } from '..';

describe('CardActions', () => {
  it('should render card actions correctly', () => {
    const { container } = render(<CardActions />);
    expect(container).toMatchSnapshot();
  });

  it('should render children', () => {
    render(
      <CardActions>
        <div>Action</div>
      </CardActions>,
    );
    expect(screen.getByText('Action')).toBeInTheDocument();
  });
});
