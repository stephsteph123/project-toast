import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";
import { ToastContext } from "../ToastProvider/ToastProvider";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, variant, children }) {
  let newVariant = styles[variant];
  let Icon = ICONS_BY_VARIANT[variant];

  const { dismissToast } = React.useContext(ToastContext);

  return (
    <div className={`${styles.toast} ${newVariant}`}>
      <div className={styles.iconContainer}>
        <Icon />
      </div>
      <p className={styles.content}>{children}</p>
      <button onClick={() => dismissToast(id)} className={styles.closeButton}>
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
