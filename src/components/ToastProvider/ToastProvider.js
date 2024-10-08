import React from "react";
import useKeydown from "../../hooks/useKeydown";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: "Oh no!",
      variant: "error",
    },

    {
      id: crypto.randomUUID(),
      message: "Logged in",
      variant: "success",
    },
  ]);

  function createToast(variant, message) {
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];
    setToasts(nextToasts);
  }

  function dismissToast(id) {
    const nextToasts = toasts.filter((toasts) => {
      return toasts.id != id;
    });
    setToasts(nextToasts);
  }


  // React.useEffect(() => {
  //   function handleKeyDown(event) {
  //     if (event.code === "Escape") {
  //       setToasts([])
  //     }
  //   }
  //   window.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);


  const handleEscape = React.useCallback(() => {
    setToasts([])
  },[]);
  
  useKeydown("Escape", handleEscape);


  return (
    <ToastContext.Provider
      value={{
        toasts,
        createToast,
        dismissToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
