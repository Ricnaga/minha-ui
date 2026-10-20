import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { Tabs } from '../../Tabs/Tabs';
import { TabsPanels } from '..';
import { TabsPanel } from '../../TabsPanel/TabsPanel';

describe('TabsPanels', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Tabs value="tab-1" onTabChange={vi.fn()}>
        <TabsPanels>
          <TabsPanel value="tab-1">Content 1</TabsPanel>
        </TabsPanels>
      </Tabs>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render panel content', () => {
    render(
      <Tabs value="tab-1" onTabChange={vi.fn()}>
        <TabsPanels>
          <TabsPanel value="tab-1">Panel Content</TabsPanel>
        </TabsPanels>
      </Tabs>,
    );
    expect(screen.getByText('Panel Content')).toBeInTheDocument();
  });
});
