import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Accordion } from '..';
import { AccordionContent } from '../../AccordionContent/AccordionContent';
import { AccordionHeader } from '../../AccordionHeader/AccordionHeader';
import { AccordionItem } from '../../AccordionItem/AccordionItem';

describe('Accordion', () => {
  describe('Single Mode', () => {
    it('should render single mode accordion correctly', () => {
      const { container } = render(
        <Accordion type="single" onValueChange={() => {}}>
          <AccordionItem value="item-1">
            <AccordionHeader>Header 1</AccordionHeader>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
        </Accordion>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should toggle accordion item when clicked', async () => {
      const user = userEvent.setup();
      render(
        <Accordion type="single" onValueChange={() => {}}>
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
        <Accordion type="single" onValueChange={() => {}}>
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

  describe('Multiple Mode', () => {
    it('should render multiple mode accordion correctly', () => {
      const { container } = render(
        <Accordion type="multiple" onValueChange={() => {}}>
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
      expect(container).toMatchSnapshot();
    });

    it('should allow multiple items to be open', async () => {
      const user = userEvent.setup();
      render(
        <Accordion type="multiple" onValueChange={() => {}}>
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
      await user.click(header2);

      const content1 = screen.getByText('Content 1').closest('[data-state]')!;
      const content2 = screen.getByText('Content 2').closest('[data-state]')!;
      expect(content1).toHaveAttribute('data-state', 'open');
      expect(content2).toHaveAttribute('data-state', 'open');
    });

    it('should toggle individual items without affecting others', async () => {
      const user = userEvent.setup();
      render(
        <Accordion type="multiple" onValueChange={() => {}}>
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
      await user.click(header2);
      await user.click(header1);

      const content1 = screen.getByText('Content 1').closest('[data-state]')!;
      const content2 = screen.getByText('Content 2').closest('[data-state]')!;
      expect(content1).toHaveAttribute('data-state', 'closed');
      expect(content2).toHaveAttribute('data-state', 'open');
    });
  });

  describe('Controlled Mode', () => {
    it('should render controlled accordion correctly', () => {
      const { container } = render(
        <Accordion type="single" value={['item-1']} onValueChange={() => {}}>
          <AccordionItem value="item-1">
            <AccordionHeader>Header 1</AccordionHeader>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
        </Accordion>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should open controlled item', () => {
      render(
        <Accordion type="single" value={['item-1']} onValueChange={() => {}}>
          <AccordionItem value="item-1">
            <AccordionHeader>Header 1</AccordionHeader>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
        </Accordion>,
      );

      const content = screen.getByText('Content 1').closest('[data-state]')!;
      expect(content).toHaveAttribute('data-state', 'open');
    });

    it('should close controlled item when value changes', () => {
      const { rerender } = render(
        <Accordion type="single" value={['item-1']} onValueChange={() => {}}>
          <AccordionItem value="item-1">
            <AccordionHeader>Header 1</AccordionHeader>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
        </Accordion>,
      );

      let content = screen.getByText('Content 1').closest('[data-state]')!;
      expect(content).toHaveAttribute('data-state', 'open');

      rerender(
        <Accordion type="single" value={[]} onValueChange={() => {}}>
          <AccordionItem value="item-1">
            <AccordionHeader>Header 1</AccordionHeader>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
        </Accordion>,
      );

      content = screen.getByText('Content 1').closest('[data-state]')!;
      expect(content).toHaveAttribute('data-state', 'closed');
    });
  });

  describe('Variants', () => {
    it('should render with primary variant', () => {
      const { container } = render(
        <Accordion type="single" variant="primary" onValueChange={() => {}}>
          <AccordionItem value="item-1">
            <AccordionHeader>Header 1</AccordionHeader>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
        </Accordion>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should render with secondary variant', () => {
      const { container } = render(
        <Accordion type="single" variant="secondary" onValueChange={() => {}}>
          <AccordionItem value="item-1">
            <AccordionHeader>Header 1</AccordionHeader>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
        </Accordion>,
      );
      expect(container).toMatchSnapshot();
    });
  });
});
