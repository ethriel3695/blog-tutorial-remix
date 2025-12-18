import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImagesAppBackground } from "./Slider";
import { fullscreenDecorator } from "./FullScreenDecorator";

const meta: Meta<typeof ImagesAppBackground> = {
  title: "Image Gen/Images App Background",
  component: ImagesAppBackground,
  parameters: {
    fullscreen: true,
  },
  args: {
    opacity: 0.3,
  },
  argTypes: {
    opacity: {
      control: {
        value: 100,
        type: "range",
        min: 0,
        max: 250,
        step: 1,
      },
    },
  },
  decorators: [fullscreenDecorator],
};

export default meta;

type ImagesAppBackgroundStory = StoryObj<typeof ImagesAppBackground>;

export const Default: ImagesAppBackgroundStory = {};
