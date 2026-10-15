import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type Dispatch, type SetStateAction } from 'react';
import { Dnd } from '../Dnd';
import { DndList } from '../../DndList';
import { DndItem } from '../../DndItem';
import { DndProvider } from '../../DndProvider';
import type { DndProps } from '../dnd.types';

const meta: Meta<DndProps> = {
  title: 'Components/Interação/Dnd',
  component: Dnd,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
  args: { orientation: 'horizontal' },
};

export default meta;
type Story = StoryObj<DndProps>;

const ITEMS = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

function DndSingleListTemplate(args: DndProps) {
  const [items, setItems] = useState(ITEMS);

  return (
    <DndProvider onReorder={(_, items) => setItems(items)}>
      <Dnd {...args}>
        <DndList listId="list-1" heading="Lista">
          {items.map((item) => (
            <DndItem key={item} id={item}>
              {item}
            </DndItem>
          ))}
        </DndList>
      </Dnd>
    </DndProvider>
  );
}

export const SingleList: Story = {
  render: (args) => <DndSingleListTemplate {...args} />,
};

const TODO_ITEMS = ['Tarefa 1', 'Tarefa 2', 'Tarefa 3'];
const DONE_ITEMS = ['Feito 1', 'Feito 2'];

function DndMultipleListsTemplate(args: DndProps) {
  const [todo, setTodo] = useState(TODO_ITEMS);
  const [done, setDone] = useState(DONE_ITEMS);

  const listSetters: Record<string, Dispatch<SetStateAction<string[]>>> = {
    todo: setTodo,
    done: setDone,
  };

  const handleReorder = (listId: string, items: string[]) => {
    listSetters[listId]?.(items);
  };

  const handleMoveItem = (
    itemId: string,
    fromList: string,
    toList: string,
    toIndex: number,
  ) => {
    listSetters[fromList]?.((prev) => prev.filter((i) => i !== itemId));

    listSetters[toList]?.((prev) => {
      const next = [...prev];
      next.splice(toIndex, 0, itemId);
      return next;
    });
  };

  return (
    <DndProvider onReorder={handleReorder} onMoveItem={handleMoveItem}>
      <Dnd {...args}>
        <DndList listId="todo" heading="A Fazer">
          {todo.map((item) => (
            <DndItem key={item} id={item}>
              {item}
            </DndItem>
          ))}
        </DndList>
        <DndList listId="done" heading="Feito">
          {done.map((item) => (
            <DndItem key={item} id={item}>
              {item}
            </DndItem>
          ))}
        </DndList>
      </Dnd>
    </DndProvider>
  );
}

export const MultipleLists: Story = {
  render: (args) => <DndMultipleListsTemplate {...args} />,
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => <DndSingleListTemplate {...args} />,
};
