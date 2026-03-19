import { render, screen } from '@testing-library/react';
import { PopoverTrigger } from '..';
import { Button } from '../../Button/Button';

describe('PopoverTrigger', () => {
  it('should render correctly', () => {
    const { container } = render(
      <PopoverTrigger>
        <Button>Trigger</Button>
      </PopoverTrigger>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render trigger button', () => {
    render(
      <PopoverTrigger>
        <Button>Open Popover</Button>
      </PopoverTrigger>,
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
