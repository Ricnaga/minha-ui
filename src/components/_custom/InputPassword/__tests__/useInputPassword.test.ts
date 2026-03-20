import { renderHook } from '@testing-library/react';
import { useInputPassword } from '../useInputPassword';

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
  EyeIcon: vi.fn(),
  EyeSlashIcon: vi.fn(),
}));

describe('useInputPassword', () => {
  it('should return inputPasswordProps with type password by default', () => {
    const props = { placeholder: 'Password' };

    const { result } = renderHook(() => useInputPassword(props));

    expect(result.current.inputPasswordProps.type).toBe('password');
    expect(result.current.inputPasswordProps.placeholder).toBe('Password');
  });

  it('should return buttonProps with correct className', () => {
    const { result } = renderHook(() => useInputPassword({}));

    expect(result.current.buttonProps.className).toBe('lock-button-class');
  });

  it('should return buttonProps with onClick handler', () => {
    const { result } = renderHook(() => useInputPassword({}));

    expect(result.current.buttonProps.onClick).toBeDefined();
  });

  it('should return PasswordIcon', () => {
    const { result } = renderHook(() => useInputPassword({}));

    expect(result.current.PasswordIcon).toBeDefined();
  });

  it('should spread all props to inputPasswordProps', () => {
    const props = {
      placeholder: 'Enter password',
      id: 'password-input',
      name: 'password',
    };

    const { result } = renderHook(() => useInputPassword(props));

    expect(result.current.inputPasswordProps.placeholder).toBe(
      'Enter password',
    );
    expect(result.current.inputPasswordProps.id).toBe('password-input');
    expect(result.current.inputPasswordProps.name).toBe('password');
  });

  it('should return all required properties', () => {
    const { result } = renderHook(() => useInputPassword({}));

    expect(result.current).toHaveProperty('inputPasswordProps');
    expect(result.current).toHaveProperty('PasswordIcon');
    expect(result.current).toHaveProperty('buttonProps');
  });
});
