import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ message, variant, handleDismiss }) {
  let newVariant = styles[variant];
  let Icon = ICONS_BY_VARIANT[variant];

  return (
    <div className={`${styles.toast} ${newVariant}`}>
      <div className={styles.iconContainer}>
        <Icon />
      </div>
      <p className={styles.content}>{message}</p>
      <button onClick={() => handleDismiss()} className={styles.closeButton}>
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
