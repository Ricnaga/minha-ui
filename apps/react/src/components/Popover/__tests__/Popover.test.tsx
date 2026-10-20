import { render, screen } from '@testing-library/react';
import { Popover } from '..';

describe('Popover', () => {
  it('should render popover correctly when closed', () => {
    const { container } = render(
      <Popover isOpen={false} onPopoverChange={vi.fn()}>
        <button>Trigger</button>
        <div>Content</div>
      </Popover>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render trigger and content when open', () => {
    render(
      <Popover isOpen={true} onPopoverChange={vi.fn()}>
        <button>Trigger</button>
        <div>Content</div>
      </Popover>,
    );
    expect(screen.getByText('Trigger')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
