export function initFocusMode() {
  if (typeof document === "undefined") return;

  const className = "focus-mode--keyboard";

  const handleMouseDown = () => {
    document.documentElement.classList.remove(className);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Tab") {
      document.documentElement.classList.add(className);
    }
  };

  document.addEventListener("mousedown", handleMouseDown);
  document.addEventListener("keydown", handleKeyDown);

  // Optional cleanup for callers that care
  return () => {
    document.removeEventListener("mousedown", handleMouseDown);
    document.removeEventListener("keydown", handleKeyDown);
  };
}




