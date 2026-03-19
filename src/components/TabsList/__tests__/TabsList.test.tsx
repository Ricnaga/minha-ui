import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { Tabs } from '../../Tabs/Tabs';
import { TabsList } from '..';

describe('TabsList', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Tabs value="tab-1" onTabChange={vi.fn()}>
        <TabsList>
          <button value="tab-1">Tab 1</button>
        </TabsList>
      </Tabs>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render tab list', () => {
    render(
      <Tabs value="tab-1" onTabChange={vi.fn()}>
        <TabsList>
          <button value="tab-1">Tab 1</button>
        </TabsList>
      </Tabs>,
    );
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
  });
});
