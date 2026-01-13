/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";

import { useState } from "react";
import { fn } from "storybook/test";
import { AccordionContent } from "../../AccordionContent";
import { AccordionHeader } from "../../AccordionHeader";
import { AccordionItem } from "../../AccordionItem/AccordionItem";
import { Accordion } from "../Accordion";
import type { AccordionProps } from "../accordion.types";
import { testDefaultAccordion } from "./Accordion.play";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<AccordionProps> = {
  title: "Components/Interação/Accordion",
  component: Accordion,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {
    type: "single",
    onValueChange: fn(),
  },
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["single", "multiple"],
    },
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<AccordionProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    type: "multiple",
  },
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
  play: testDefaultAccordion,
};
