import React from "react";
import styles from "./job-item.module.scss";
import Button from "../button/button";

function JobItem(props) {
  return (
    <article className={styles.job_item}>
      <div>
        <div className={styles.company_info_container}>
          <span className={styles.job_item__company}>{props.company}</span>
        </div>
        <a href={props.jobURL} target="_blank">
          <h3 className={styles.job_item__title}>{props.jobTitle}</h3>
        </a>
        <p className={styles.job_item__snippet}>{props.jobSnippet}</p>
        <span className={styles.job_item__date}>Posted on: <span>02/02/2021</span></span>
        <Button jobURL={props.jobURL} />
      </div>
    </article>
  );
}

export default JobItem;
