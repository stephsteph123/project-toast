import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ list, setList }) {
  return (
    <ol className={styles.wrapper}>
      {list.map((item, index) => (
        <li className={styles.toastWrapper} key={index}>
          <Toast variant={item.radio} index={index} list={list} setList={setList}>{item.message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
