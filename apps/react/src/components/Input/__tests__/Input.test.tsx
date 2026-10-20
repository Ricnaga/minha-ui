import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '..';

describe('Input', () => {
  describe('Rendering', () => {
    it('should render input correctly', () => {
      const { container } = render(<Input placeholder="Enter text" />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Interactions', () => {
    it('should call onChange when typing', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<Input onChange={handleChange} placeholder="Type here" />);

      await user.type(screen.getByRole('textbox'), 'hello');
      expect(handleChange).toHaveBeenCalled();
    });
  });
});
