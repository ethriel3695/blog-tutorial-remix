import type { PartialStoryFn, Renderer } from "storybook/internal/csf";

export function fullscreenDecorator<const T extends Renderer>(
  Story: PartialStoryFn<T>
) {
  return (
    <div className="relative z-0 h-dvh">
      <Story />
    </div>
  );
}
