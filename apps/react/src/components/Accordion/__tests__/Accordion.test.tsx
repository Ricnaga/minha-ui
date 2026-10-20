import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { Accordion } from '..';
import { AccordionContent } from '../../AccordionContent/AccordionContent';
import { AccordionHeader } from '../../AccordionHeader/AccordionHeader';
import { AccordionItem } from '../../AccordionItem/AccordionItem';

describe('Accordion', () => {
  describe('Rendering', () => {
    it('should render accordion correctly', () => {
      const { container } = render(
        <Accordion type="single" onValueChange={vi.fn()}>
          <AccordionItem value="item-1">
            <AccordionHeader>Header 1</AccordionHeader>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
        </Accordion>,
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('Interactions', () => {
    it('should toggle accordion item when clicked', async () => {
      const user = userEvent.setup();
      render(
        <Accordion type="single" onValueChange={vi.fn()}>
          <AccordionItem value="item-1">
            <AccordionHeader>Header 1</AccordionHeader>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
        </Accordion>,
      );

      const header = screen.getByText('Header 1');
      await user.click(header);

      const content = screen.getByText('Content 1').closest('[data-state]')!;
      expect(content).toHaveAttribute('data-state', 'open');
    });

    it('should close previously opened item when opening another', async () => {
      const user = userEvent.setup();
      render(
        <Accordion type="single" onValueChange={vi.fn()}>
          <AccordionItem value="item-1">
            <AccordionHeader>Header 1</AccordionHeader>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionHeader>Header 2</AccordionHeader>
            <AccordionContent>Content 2</AccordionContent>
          </AccordionItem>
        </Accordion>,
      );

      const header1 = screen.getByText('Header 1');
      const header2 = screen.getByText('Header 2');

      await user.click(header1);
      const content1 = screen.getByText('Content 1').closest('[data-state]')!;
      expect(content1).toHaveAttribute('data-state', 'open');

      await user.click(header2);
      const content2 = screen.getByText('Content 2').closest('[data-state]')!;
      expect(content2).toHaveAttribute('data-state', 'open');
      expect(content1).toHaveAttribute('data-state', 'closed');
    });
  });
});
