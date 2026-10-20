import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { OtpInput } from '..';

function getFields() {
  return screen.getAllByTestId(/^otp-input-\d+$/) as HTMLInputElement[];
}

describe('OtpInput', () => {
  describe('Rendering', () => {
    it('should render the default amount of fields', () => {
      render(<OtpInput />);
      expect(getFields()).toHaveLength(6);
    });

    it('should render the amount defined by length', () => {
      render(<OtpInput length={4} />);
      expect(getFields()).toHaveLength(4);
    });

    it('should render a group with an accessible label', () => {
      render(<OtpInput aria-label="Código SMS" />);
      expect(
        screen.getByRole('group', { name: 'Código SMS' }),
      ).toBeInTheDocument();
    });

    it('should hide the digits when mask is enabled', () => {
      render(<OtpInput mask defaultValue="123" />);
      expect(getFields()[0]).toHaveAttribute('type', 'password');
    });

    it('should mark fields as invalid', () => {
      render(<OtpInput isInvalid />);
      expect(getFields()[0].className).toContain('border-red-500');
    });

    it('should disable all fields', () => {
      render(<OtpInput disabled />);
      expect(getFields().every((field) => field.disabled)).toBe(true);
    });
  });

  describe('Interactions', () => {
    it('should fill a field and move to the next', async () => {
      const user = userEvent.setup();
      const handleOTPChange = vi.fn();
      render(<OtpInput onOTPChange={handleOTPChange} />);

      const fields = getFields();
      await user.click(fields[0]);
      await user.keyboard('1');

      expect(fields[0]).toHaveValue('1');
      expect(fields[1]).toHaveFocus();
      expect(handleOTPChange).toHaveBeenCalledWith('1');
    });

    it('should navigate with arrow keys', async () => {
      const user = userEvent.setup();
      render(<OtpInput defaultValue="1234" />);

      const fields = getFields();
      await user.click(fields[2]);
      await user.keyboard('{ArrowLeft}');

      expect(fields[1]).toHaveFocus();

      await user.keyboard('{ArrowRight}');
      expect(fields[2]).toHaveFocus();
    });

    it('should clear and go back when backspacing an empty field', async () => {
      const user = userEvent.setup();
      const handleOTPChange = vi.fn();
      render(<OtpInput defaultValue="12" onOTPChange={handleOTPChange} />);

      const fields = getFields();
      await user.click(fields[2]);
      await user.keyboard('{Backspace}');

      expect(fields[1]).toHaveValue('');
      expect(fields[1]).toHaveFocus();
      expect(handleOTPChange).toHaveBeenCalledWith('1');
    });

    it('should fill every field from a paste', async () => {
      const user = userEvent.setup();
      const handleOTPChange = vi.fn();
      render(<OtpInput onOTPChange={handleOTPChange} />);

      const fields = getFields();
      await user.click(fields[0]);
      await user.paste('123456');

      expect(fields.map((field) => field.value)).toEqual([
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
      ]);
      expect(handleOTPChange).toHaveBeenCalledWith('123456');
    });

    it('should keep leading zeros in the emitted value', async () => {
      const user = userEvent.setup();
      const handleOTPChange = vi.fn();
      render(<OtpInput onOTPChange={handleOTPChange} />);

      const fields = getFields();
      await user.click(fields[0]);
      await user.paste('012345');

      expect(handleOTPChange).toHaveBeenCalledWith('012345');
    });
  });
});
