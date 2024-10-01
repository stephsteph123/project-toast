import React from "react";

//   We want to create a new generic hook that makes it easy to listen for keydown events in React. It's up to you to come up with the best “consumer experience”.
// Because this is a generic hook, it shouldn't be stored with the ToastProvider component. Create a new /src/hooks directory, and place your new hook in there.
// The ToastProvider component should use this new hook.
// Make sure there are no ESLint warnings.
// In VSCode, ESLint warnings are shown as squiggly yellow underlines. You can view the warning by hovering over the underlined characters, or by opening the “Problems” tab (⌘ + Shift + M, or Ctrl + Shift + M).

function useKeydown(key, callback) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === key) {
        callback(event)
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, callback]);

}
export default useKeydown;
