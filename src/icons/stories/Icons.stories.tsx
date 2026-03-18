import type { Meta, StoryObj } from "@storybook/react-vite";
import * as PhosphorIcons from "@phosphor-icons/react";

type IconWeight = "thin" | "light" | "regular" | "bold" | "fill" | "duotone";

interface IconEntry {
  name: string;
  Icon: React.ComponentType<{ className?: string; size?: number | string; weight?: IconWeight }>;
}

const iconEntries: IconEntry[] = Object.entries(PhosphorIcons)
  .filter(([name, icon]) => {
    const isIcon = typeof icon === "object" && icon !== null && name.endsWith("Icon") && !name.startsWith("duotone");
    return isIcon;
  })
  .map(([name, icon]) => ({ name, Icon: icon as IconEntry["Icon"] }));

const meta: Meta<{ weight: IconWeight }> = {
  title: "Icons/All",
  argTypes: {
    weight: {
      control: "select",
      options: ["thin", "light", "regular", "bold", "fill", "duotone"],
      description: "Peso visual do ícone",
    },
  },
  args: {
    weight: "regular",
  },
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

export const AllIcons: StoryObj<{ weight: IconWeight }> = {
  render: ({ weight }) => (
    <div className="grid grid-cols-12 gap-2 p-4">
      {iconEntries.map(({ name, Icon }) => (
        <div
          key={name}
          className="flex flex-col items-center justify-center gap-2 rounded-lg border p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800"
        >
          <Icon weight={weight} className="size-8 text-black dark:text-white" />
          <span className="text-center text-xs font-medium text-neutral-600 dark:text-neutral-400">
            {name.replace("Icon", "")}
          </span>
        </div>
      ))}
    </div>
  ),
};
