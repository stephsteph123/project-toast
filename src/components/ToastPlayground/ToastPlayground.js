import React from "react";
import Toast from "../Toast";
import Button from "../Button";
import ToastShelf from "../ToastShelf/ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

// Instead of live-editing a single Toast instance, the playground should be used to push new toast messages onto a stack, rendered inside ToastShelf and shown in the corner of the page.
// When “Pop Toast!” is clicked, the message/variant form controls should be reset to their default state (message should be an empty string, variant should be "notice").
// Clicking the “×” button inside the toast should remove that specific toast (but leave the rest untouched).
// A proper <form> tag should be used in the ToastPlayground. The toast should be created when submitting the form.
// There should be no key warnings in the console! Keys should be unique, and you should not use the index.

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [radio, setRadio] = React.useState(VARIANT_OPTIONS[0]);
  const [list, setList] = React.useState([]);

  function handleNewMessage() {
    setList((prev) => [
      ...prev,
      {
        radio: radio,
        message: message,
      },
    ]);
    setRadio(VARIANT_OPTIONS[0]);
    setMessage("");
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
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
            <ToastShelf list={list} setList={setList}></ToastShelf>
            <Button onClick={() => handleNewMessage()}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
