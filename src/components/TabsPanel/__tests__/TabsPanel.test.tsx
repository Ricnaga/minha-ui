import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { Tabs } from '../../Tabs/Tabs';
import { TabsPanel } from '..';

describe('TabsPanel', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Tabs value="tab-1" onTabChange={vi.fn()}>
        <TabsPanel value="tab-1">Content 1</TabsPanel>
      </Tabs>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render panel content', () => {
    render(
      <Tabs value="tab-1" onTabChange={vi.fn()}>
        <TabsPanel value="tab-1">Panel Content</TabsPanel>
      </Tabs>,
    );
    expect(screen.getByText('Panel Content')).toBeInTheDocument();
  });
});
