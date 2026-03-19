import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tabs } from '..';
import { TabsList } from '../../TabsList/TabsList';
import { TabsTrigger } from '../../TabsTrigger/TabsTrigger';
import { TabsPanels } from '../../TabsPanels/TabsPanels';
import { TabsPanel } from '../../TabsPanel/TabsPanel';

describe('Tabs', () => {
  const renderTabs = (value: string = 'tab1') => {
    const onTabChange = vi.fn();
    const rendered = render(
      <Tabs value={value} onTabChange={onTabChange}>
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsPanels>
          <TabsPanel value="tab1">Content 1</TabsPanel>
          <TabsPanel value="tab2">Content 2</TabsPanel>
          <TabsPanel value="tab3">Content 3</TabsPanel>
        </TabsPanels>
      </Tabs>,
    );
    return { ...rendered, onTabChange };
  };

  describe('Rendering', () => {
    it('should render tabs correctly', () => {
      const { container } = renderTabs();
      expect(container).toMatchSnapshot();
    });

    it('should render all tab triggers', () => {
      renderTabs();
      expect(screen.getByText('Tab 1')).toBeInTheDocument();
      expect(screen.getByText('Tab 2')).toBeInTheDocument();
      expect(screen.getByText('Tab 3')).toBeInTheDocument();
    });

    it('should render all tab panels', () => {
      renderTabs();
      expect(screen.getByText('Content 1')).toBeInTheDocument();
      expect(screen.getByText('Content 2')).toBeInTheDocument();
      expect(screen.getByText('Content 3')).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('should render with default variant', () => {
      const { container } = render(
        <Tabs value="tab1" onTabChange={vi.fn()} variant="default">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsList>
          <TabsPanels>
            <TabsPanel value="tab1">Content 1</TabsPanel>
          </TabsPanels>
        </Tabs>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should render with ghost variant', () => {
      const { container } = render(
        <Tabs value="tab1" onTabChange={vi.fn()} variant="ghost">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsList>
          <TabsPanels>
            <TabsPanel value="tab1">Content 1</TabsPanel>
          </TabsPanels>
        </Tabs>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should render with contained variant', () => {
      const { container } = render(
        <Tabs value="tab1" onTabChange={vi.fn()} variant="contained">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsList>
          <TabsPanels>
            <TabsPanel value="tab1">Content 1</TabsPanel>
          </TabsPanels>
        </Tabs>,
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('Interactions', () => {
    it('should call onTabChange when clicking a tab', async () => {
      const user = userEvent.setup();
      const { onTabChange } = renderTabs('tab1');

      await user.click(screen.getByText('Tab 2'));
      expect(onTabChange).toHaveBeenCalledWith('tab2');
    });
  });
});
