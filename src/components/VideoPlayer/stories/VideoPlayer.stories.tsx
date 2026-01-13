import type { Meta, StoryObj } from "@storybook/react-vite";

import { VideoPlayer } from "../VideoPlayer";
import type { VideoPlayerProps } from "../video-player.types";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<VideoPlayerProps> = {
  title: "Components/Multimídia/VideoPlayer",
  component: VideoPlayer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {
    thumbnailSrc:
      "https://cruip-tutorials.vercel.app/modal-video/modal-video-thumb.jpg",
    src: "https://cruip-tutorials.vercel.app/modal-video/video.mp4",
    alt: "Exemplo de vídeo",
  },
};

export default meta;
type Story = StoryObj<VideoPlayerProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};
