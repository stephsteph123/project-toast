import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ children, variant, index, list, setList }) {
  let newVariant = styles[variant];
  let Icon = ICONS_BY_VARIANT[variant];

  function handleCancel(index) {
    let newArr = [];
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      if (element !== list[index]) {
        newArr.push(element);
      }
    }
    setList(newArr);
  }

  return (
    <div className={`${styles.toast} ${newVariant}`}>
      <div className={styles.iconContainer}>
        <Icon />
      </div>
      <p className={styles.content}>{children}</p>
      <button
        onClick={() => handleCancel(index)}
        className={styles.closeButton}
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
