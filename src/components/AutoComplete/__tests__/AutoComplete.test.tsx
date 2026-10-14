import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import type { SelectOptions } from '../../Select';
import { AutoComplete } from '..';

const OPTIONS: SelectOptions[] = [
  { key: '1', value: 'Banana' },
  { key: '2', value: 'Maçã' },
  { key: '3', value: 'Laranja' },
];

describe('AutoComplete', () => {
  describe('Rendering', () => {
    it('should render a combobox', () => {
      render(<AutoComplete options={OPTIONS} />);

      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('should keep the listbox hidden while closed', () => {
      render(<AutoComplete options={OPTIONS} />);

      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('should open the listbox on focus', async () => {
      const user = userEvent.setup();
      render(<AutoComplete options={OPTIONS} />);

      await user.click(screen.getByRole('combobox'));

      expect(screen.getByRole('listbox')).toBeInTheDocument();
      expect(screen.getAllByRole('option')).toHaveLength(OPTIONS.length);
    });
  });

  describe('Filtering', () => {
    it('should filter options while typing', async () => {
      const user = userEvent.setup();
      render(<AutoComplete options={OPTIONS} />);

      await user.type(screen.getByRole('combobox'), 'an');

      expect(screen.getAllByRole('option')).toHaveLength(2);
      expect(
        screen.getByRole('option', { name: 'Banana' }),
      ).toBeInTheDocument();
      expect(
        screen.queryByRole('option', { name: 'Maçã' }),
      ).not.toBeInTheDocument();
    });

    it('should render the empty message when nothing matches', async () => {
      const user = userEvent.setup();
      render(<AutoComplete options={OPTIONS} emptyMessage="Nada encontrado" />);

      await user.type(screen.getByRole('combobox'), 'zzz');

      expect(screen.getByRole('listbox')).toBeInTheDocument();
      expect(screen.getByText('Nada encontrado')).toBeInTheDocument();
      expect(screen.queryAllByRole('option')).toHaveLength(0);
    });
  });

  describe('Selection', () => {
    it('should select an option on click and close the list', async () => {
      const user = userEvent.setup();
      const handleSelect = vi.fn();
      render(<AutoComplete options={OPTIONS} onSelect={handleSelect} />);

      const input = screen.getByRole('combobox');
      await user.click(input);
      await user.click(screen.getByRole('option', { name: 'Laranja' }));

      expect(handleSelect).toHaveBeenCalledWith(OPTIONS[2]);
      expect(input).toHaveValue('Laranja');
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('should select the highlighted option with the keyboard', async () => {
      const user = userEvent.setup();
      const handleSelect = vi.fn();
      render(<AutoComplete options={OPTIONS} onSelect={handleSelect} />);

      const input = screen.getByRole('combobox');
      await user.type(input, 'ban');
      await user.keyboard('{Enter}');

      expect(handleSelect).toHaveBeenCalledWith(OPTIONS[0]);
      expect(input).toHaveValue('Banana');
    });

    it('should move the highlight with the arrow keys', async () => {
      const user = userEvent.setup();
      render(<AutoComplete options={OPTIONS} />);

      await user.click(screen.getByRole('combobox'));
      await user.keyboard('{ArrowDown}{ArrowDown}');

      const options = screen.getAllByRole('option');
      expect(options[1]).toHaveAttribute('aria-selected', 'true');
    });

    it('should close the list on Escape', async () => {
      const user = userEvent.setup();
      render(<AutoComplete options={OPTIONS} />);

      await user.click(screen.getByRole('combobox'));
      await user.keyboard('{Escape}');

      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
  });

  describe('Value handling', () => {
    it('should fill the input from defaultValue', () => {
      render(<AutoComplete options={OPTIONS} defaultValue="Ma" />);

      expect(screen.getByRole('combobox')).toHaveValue('Ma');
    });

    it('should emit every typed value through onInputChange', async () => {
      const user = userEvent.setup();
      const handleInputChange = vi.fn();
      render(
        <AutoComplete options={OPTIONS} onInputChange={handleInputChange} />,
      );

      await user.type(screen.getByRole('combobox'), 'ba');

      expect(handleInputChange).toHaveBeenLastCalledWith('ba');
    });

    it('should respect a controlled value', async () => {
      const user = userEvent.setup();

      function Harness() {
        const [value, setValue] = useState('');
        return (
          <AutoComplete
            options={OPTIONS}
            value={value}
            onInputChange={setValue}
          />
        );
      }

      render(<Harness />);

      const input = screen.getByRole('combobox');
      await user.type(input, 'ba');

      expect(input).toHaveValue('ba');

      await user.click(screen.getByRole('option', { name: 'Banana' }));

      expect(input).toHaveValue('Banana');
    });
  });

  describe('Disabled state', () => {
    it('should not open nor type when disabled', async () => {
      const user = userEvent.setup();
      render(<AutoComplete options={OPTIONS} isDisabled />);

      const input = screen.getByRole('combobox');
      await user.click(input);
      await user.type(input, 'ba');

      expect(input).toBeDisabled();
      expect(input).toHaveValue('');
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
  });

  describe('Clear button', () => {
    it('should only appear when there is a query (single)', async () => {
      const user = userEvent.setup();
      render(<AutoComplete options={OPTIONS} />);

      expect(
        screen.queryByRole('button', { name: 'Limpar' }),
      ).not.toBeInTheDocument();

      const input = screen.getByRole('combobox');
      await user.type(input, 'ba');

      await user.click(screen.getByRole('button', { name: 'Limpar' }));

      expect(input).toHaveValue('');
    });
  });

  describe('Multiple', () => {
    it('should add a chip on select and keep the list open', async () => {
      const user = userEvent.setup();
      const handleValuesChange = vi.fn();
      render(
        <AutoComplete
          options={OPTIONS}
          isMultiple
          onValuesChange={handleValuesChange}
        />,
      );

      const input = screen.getByRole('combobox');
      await user.click(input);
      await user.click(screen.getByRole('option', { name: 'Banana' }));

      expect(handleValuesChange).toHaveBeenCalledWith([OPTIONS[0]]);
      expect(screen.getByText('Banana')).toBeInTheDocument();
      expect(screen.getByRole('listbox')).toBeInTheDocument();
      expect(input).toHaveValue('');
    });

    it('should hide selected options from the list', async () => {
      const user = userEvent.setup();
      render(<AutoComplete options={OPTIONS} isMultiple />);

      await user.click(screen.getByRole('combobox'));
      await user.click(screen.getByRole('option', { name: 'Banana' }));

      expect(
        screen.queryByRole('option', { name: 'Banana' }),
      ).not.toBeInTheDocument();
      expect(screen.getByRole('option', { name: 'Maçã' })).toBeInTheDocument();
    });

    it('should remove a chip through its button', async () => {
      const user = userEvent.setup();
      render(
        <AutoComplete
          options={OPTIONS}
          isMultiple
          defaultValues={[OPTIONS[0]]}
        />,
      );

      await user.click(screen.getByRole('button', { name: 'Remover Banana' }));

      expect(
        screen.queryByRole('button', { name: 'Remover Banana' }),
      ).not.toBeInTheDocument();
    });

    it('should clear the query and every chip', async () => {
      const user = userEvent.setup();
      render(<AutoComplete options={OPTIONS} isMultiple />);

      const input = screen.getByRole('combobox');
      await user.type(input, 'ba');
      await user.click(screen.getByRole('option', { name: 'Banana' }));
      await user.type(input, 'ma');
      await user.click(screen.getByRole('option', { name: 'Maçã' }));

      expect(screen.getByText('Banana')).toBeInTheDocument();
      expect(screen.getByText('Maçã')).toBeInTheDocument();

      await user.click(screen.getByRole('button', { name: 'Limpar' }));

      expect(
        screen.queryByRole('button', { name: 'Remover Banana' }),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByRole('button', { name: 'Remover Maçã' }),
      ).not.toBeInTheDocument();
      expect(input).toHaveValue('');
    });

    it('should respect controlled values', async () => {
      const user = userEvent.setup();

      function Harness() {
        const [values, setValues] = useState<SelectOptions[]>([]);
        return (
          <AutoComplete
            options={OPTIONS}
            isMultiple
            values={values}
            onValuesChange={setValues}
          />
        );
      }

      render(<Harness />);

      await user.click(screen.getByRole('combobox'));
      await user.click(screen.getByRole('option', { name: 'Banana' }));

      expect(screen.getByText('Banana')).toBeInTheDocument();
    });
  });
});
