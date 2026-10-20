import { render, screen } from '@testing-library/react';
import { CardBody } from '..';

describe('CardBody', () => {
  it('should render card body correctly', () => {
    const { container } = render(<CardBody />);
    expect(container).toMatchSnapshot();
  });

  it('should render children', () => {
    render(
      <CardBody>
        <div>Body Content</div>
      </CardBody>,
    );
    expect(screen.getByText('Body Content')).toBeInTheDocument();
  });
});
