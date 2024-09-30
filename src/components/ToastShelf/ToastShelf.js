import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider/ToastProvider";
import styles from "./ToastShelf.module.css";

// screenreader //
// The <ol> should have the specified role / aria tags
// The toast's content should be prefixed with the variant, using the VisuallyHidden component.
// NOTE: The diff above shows an error toast, but the prefix should be dynamic, based on the variant.
// The “Dismiss message” content in the close button should be moved to an aria-label. aria-live should also be set to "off".


function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper} aria-labelledby="modal-heading" aria-describedby="modal-content">
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast id={toast.id} variant={toast.variant}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
