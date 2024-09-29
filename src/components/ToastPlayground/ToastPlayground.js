import React from "react";
import Toast from "../Toast";
import Button from "../Button";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

// The toast should be hidden by default, but can be shown by clicking the "Pop Toast!” button.
// The toast can be hidden by clicking the “×” button within the toast.

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [radio, setRadio] = React.useState(VARIANT_OPTIONS[0]);
  const [isRendered, setIsRendered] = React.useState(false);

  function handleDismiss() {
    setIsRendered(false);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {isRendered ? (
        <Toast
          message={message}
          variant={radio}
          handleDismiss={handleDismiss}
        />
      ) : (
        ""
      )}
      <div className={styles.controlsWrapper}>
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
                    value={radio}
                    onChange={() => {
                      setRadio(item);
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
            <Button onClick={() => setIsRendered(true)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
