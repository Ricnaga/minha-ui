import type { Meta, StoryObj } from "@storybook/react-vite";
import * as PhosphorIcons from "@phosphor-icons/react";

interface IconEntry {
  name: string;
  Icon: React.ComponentType<{ className?: string; size?: number | string }>;
}

const iconEntries: IconEntry[] = Object.entries(PhosphorIcons)
  .filter(([name, icon]) => {
    const isIcon = typeof icon === "function" && name.endsWith("Icon") && !name.startsWith("duotone");
    return isIcon;
  })
  .map(([name, icon]) => ({ name, Icon: icon as IconEntry["Icon"] }));

const meta: Meta = {
  title: "Icons/All",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Catálogo de todos os ícones do Phosphor Icons. Use o nome do ícone para importá-lo.",
      },
    },
  },
};

export default meta;

export const AllIcons: StoryObj = {
  render: () => (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-4 p-4">
      {iconEntries.map(({ name, Icon }) => (
        <div
          key={name}
          className="flex flex-col items-center justify-center gap-2 rounded-lg border p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800"
        >
          <Icon className="size-8" />
          <span className="text-center text-xs font-medium text-neutral-600 dark:text-neutral-400">
            {name.replace("Icon", "")}
          </span>
        </div>
      ))}
    </div>
  ),
};
