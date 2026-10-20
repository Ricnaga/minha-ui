import { render, screen } from '@testing-library/react';
import { InputPassword } from '../InputPassword';

vi.mock('@/hooks', () => ({
  useToggle: vi.fn(() => ({
    isToggle: false,
    handleToggle: vi.fn(),
  })),
}));

vi.mock('@/theme', () => ({
  inputPassword: vi.fn(() => ({
    lockButton: vi.fn(() => 'lock-button-class'),
  })),
}));

vi.mock('@phosphor-icons/react', () => ({
  EyeIcon: vi.fn(() => <span data-testid="eye-icon">Eye</span>),
  EyeSlashIcon: vi.fn(() => <span data-testid="eye-slash-icon">EyeSlash</span>),
}));

vi.mock('src/components/Input', () => ({
  Input: vi.fn(({ endIcon, ...props }) => (
    <div {...props}>
      Input Component
      {endIcon}
    </div>
  )),
}));

describe('InputPassword', () => {
  describe('Snapshot', () => {
    it('should match snapshot', () => {
      const { container } = render(<InputPassword placeholder="Password" />);

      expect(container).toMatchSnapshot();
    });
  });

  it('should render Input component', () => {
    render(<InputPassword placeholder="Enter password" />);

    expect(screen.getByText('Input Component')).toBeInTheDocument();
  });

  it('should render password toggle button', () => {
    render(<InputPassword />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should render EyeSlashIcon by default (password hidden)', () => {
    render(<InputPassword />);

    expect(screen.getByTestId('eye-slash-icon')).toBeInTheDocument();
  });

  it('should pass placeholder to Input', () => {
    render(<InputPassword placeholder="Enter password" />);

    expect(screen.getByText('Input Component')).toHaveAttribute(
      'placeholder',
      'Enter password',
    );
  });

  it('should pass name to Input', () => {
    render(<InputPassword name="password" />);

    expect(screen.getByText('Input Component')).toHaveAttribute(
      'name',
      'password',
    );
  });

  it('should pass id to Input', () => {
    render(<InputPassword id="password-input" />);

    expect(screen.getByText('Input Component')).toHaveAttribute(
      'id',
      'password-input',
    );
  });
});
