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
  });

  describe('Interactions', () => {
    it('should call onTabChange when clicking a tab', async () => {
      const user = userEvent.setup();
      const { onTabChange } = renderTabs('tab1');

      await user.click(screen.getByText('Tab 2'));
      expect(onTabChange).toHaveBeenCalledWith('tab2');
    });
  });

  describe('Responsividade', () => {
    it('should scroll horizontally on mobile and wrap on sm+', () => {
      renderTabs();
      const tablist = screen.getByRole('tablist');

      expect(tablist).toHaveClass('overflow-x-auto', 'flex-nowrap');
      expect(tablist).toHaveClass('sm:flex-wrap', 'sm:overflow-visible');
    });
  });
});
