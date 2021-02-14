import React from "react";
import styles from "./button.module.scss";

export default function Button(props) {
  return (
    <a href={props.jobURL} className={styles.btn} target="_blank">
      <span>View Job</span>
    </a>
  );
}
