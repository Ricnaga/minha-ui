import { render, screen } from '@testing-library/react';
import { CardHeader } from '..';

describe('CardHeader', () => {
  it('should render card header correctly', () => {
    const { container } = render(<CardHeader />);
    expect(container).toMatchSnapshot();
  });

  it('should render children', () => {
    render(
      <CardHeader>
        <div>Header Content</div>
      </CardHeader>,
    );
    expect(screen.getByText('Header Content')).toBeInTheDocument();
  });
});
