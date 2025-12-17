/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Accordion } from "../Accordion";
import type { AccordionProps } from "../accordion.types";
import { AccordionItem } from "../../AccordionItem/AccordionItem";
import { AccordionHeader } from "../../AccordionHeader";
import { AccordionContent } from "../../AccordionContent";
import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<AccordionProps> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<AccordionProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>(["item-1"]);

    return (
      <>
        <p>Valor atual: {JSON.stringify(value)}</p>

        <Accordion {...args} value={value} onValueChange={setValue}>
          <div className="my-4">
            <AccordionItem value="item-1">
              <AccordionHeader>Item 1</AccordionHeader>
              <AccordionContent>Conteúdo 1</AccordionContent>
            </AccordionItem>
          </div>

          <AccordionItem value="item-2">
            <AccordionHeader>Item 2</AccordionHeader>
            <AccordionContent>Conteúdo 2</AccordionContent>
          </AccordionItem>
        </Accordion>
      </>
    );
  },
};
