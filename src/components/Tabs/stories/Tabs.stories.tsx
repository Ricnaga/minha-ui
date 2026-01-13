/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";

import { useState } from "react";
import { Tabs } from "../Tabs";
import type { TabsProps } from "../tabs.types";

import { TabsTrigger } from "../../TabsTrigger";
import { TabsList } from "../../TabsList";
import { TabsPanels } from "../../TabsPanels";
import { TabsPanel } from "../../TabsPanel";
import { testDefaultTabs } from "./Tabs.play";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<TabsProps> = {
  title: "Components/Interação/Tabs",
  component: Tabs,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "contained", "ghost"],
    },
  },
  args: {
    variant: "default",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("tab-1");

    return (
      <Tabs {...args} value={value} onTabChange={setValue}>
        <TabsList>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab-3">Tab 3</TabsTrigger>
        </TabsList>

        <TabsPanels>
          <TabsPanel value="tab-1">Conteúdo da Tab 1</TabsPanel>
          <TabsPanel value="tab-2">Conteúdo da Tab 2</TabsPanel>
          <TabsPanel value="tab-3">Conteúdo da Tab 3</TabsPanel>
        </TabsPanels>
      </Tabs>
    );
  },
  play: testDefaultTabs,
};
