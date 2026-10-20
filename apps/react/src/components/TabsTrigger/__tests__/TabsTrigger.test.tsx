import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { Tabs } from '../../Tabs/Tabs';
import { TabsList } from '../../TabsList/TabsList';
import { TabsTrigger } from '..';

describe('TabsTrigger', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Tabs value="tab-1" onTabChange={vi.fn()}>
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
      </Tabs>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render trigger button', () => {
    render(
      <Tabs value="tab-1" onTabChange={vi.fn()}>
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        </TabsList>
      </Tabs>,
    );
    expect(screen.getByRole('tab')).toBeInTheDocument();
  });
});
