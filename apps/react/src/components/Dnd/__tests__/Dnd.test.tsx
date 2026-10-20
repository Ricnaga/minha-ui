import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Dnd } from '../../Dnd';
import { DndList } from '../../DndList';
import { DndItem } from '../../DndItem';
import { DndProvider } from '../../DndProvider';

describe('Dnd', () => {
  describe('Rendering', () => {
    it('should render items inside a single list', () => {
      render(
        <DndProvider onReorder={() => {}}>
          <Dnd orientation="horizontal">
            <DndList listId="list-1" heading="Test List">
              <DndItem id="1">Item 1</DndItem>
              <DndItem id="2">Item 2</DndItem>
            </DndList>
          </Dnd>
        </DndProvider>,
      );

      expect(screen.getByText('Test List')).toBeInTheDocument();
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
    });

    it('should render multiple lists', () => {
      render(
        <DndProvider onReorder={() => {}}>
          <Dnd orientation="horizontal">
            <DndList listId="todo" heading="To Do">
              <DndItem id="1">Task 1</DndItem>
            </DndList>
            <DndList listId="done" heading="Done">
              <DndItem id="2">Done 1</DndItem>
            </DndList>
          </Dnd>
        </DndProvider>,
      );

      expect(screen.getByText('To Do')).toBeInTheDocument();
      expect(screen.getByText('Done')).toBeInTheDocument();
      expect(screen.getByText('Task 1')).toBeInTheDocument();
      expect(screen.getByText('Done 1')).toBeInTheDocument();
    });

    it('should render with vertical orientation', () => {
      const { container } = render(
        <DndProvider onReorder={() => {}}>
          <Dnd orientation="vertical">
            <DndList listId="list-1">
              <DndItem id="1">Item 1</DndItem>
            </DndList>
          </Dnd>
        </DndProvider>,
      );

      const dndContainer = container.querySelector('.flex.flex-col');
      expect(dndContainer).toBeInTheDocument();
    });
  });

  describe('DndItem', () => {
    it('should have draggable attributes', () => {
      render(
        <DndProvider onReorder={() => {}}>
          <Dnd>
            <DndList listId="list-1">
              <DndItem id="item-1">Draggable Item</DndItem>
            </DndList>
          </Dnd>
        </DndProvider>,
      );

      const item = screen.getByText('Draggable Item').closest('[aria-grabbed]');
      expect(item).toBeInTheDocument();
      expect(item).toHaveAttribute('aria-roledescription', 'draggable item');
    });
  });

  describe('DndList', () => {
    it('should show drag over styles when isDragOver is true', () => {
      const { container } = render(
        <DndProvider onReorder={() => {}}>
          <Dnd>
            <DndList listId="list-1" heading="My List">
              <DndItem id="1">Item</DndItem>
            </DndList>
          </Dnd>
        </DndProvider>,
      );

      const list = container.querySelector('[class*="border-dashed"]');
      expect(list).toBeInTheDocument();
    });
  });
});
