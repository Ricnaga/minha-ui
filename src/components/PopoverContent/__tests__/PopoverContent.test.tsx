import { render, screen } from '@testing-library/react';
import { PopoverContent } from '..';

describe('PopoverContent', () => {
  it('should render correctly', () => {
    const { container } = render(<PopoverContent />);
    expect(container).toMatchSnapshot();
  });

  it('should render popover content', () => {
    render(
      <PopoverContent>
        <div>Popover Content</div>
      </PopoverContent>,
    );
    expect(screen.getByText('Popover Content')).toBeInTheDocument();
  });
});
