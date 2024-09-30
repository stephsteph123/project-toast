import React from "react";
import Button from "../Button";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider/ToastProvider";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

// Components that require the state should pull it from context with the useContext hook, rather than passing through props.
// As we saw in the “Provider Components” lesson, we can also share functions that allow consumers to alter the state. Consider making functions available that will create a new toast, or dismiss a specific toast.
// This is a “refactor” exercise. The user experience shouldn't change at all.

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

  const { createToast } = React.useContext(ToastContext);

  function handleCreateToast(event) {
    event.preventDefault();

    createToast(variant, message);

    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <div className={styles.controlsWrapper}>
        <form className={styles.controlsWrapper} onSubmit={handleCreateToast}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((item) => {
                return (
                  <label htmlFor={`variant-${item}`} key={`variant-${item}`}>
                    <input
                      id={`variant-${item}`}
                      type="radio"
                      name="variant"
                      value={variant}
                      onChange={() => {
                        setVariant(item);
                      }}
                    />
                    {item}
                  </label>
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <ToastShelf />
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
