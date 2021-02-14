import React from "react";
import styles from "./job-list.module.scss";
import JobItem from "../job-item/job-item";

export default function JobList() {
  return (
    <div className={styles.main_container}>
      <div className={styles.job_list_header}>
        <span>Job Posts: 8</span>
      </div>

      <div className={styles.job_list}>
        <JobItem
          company="Acme inc."
          jobTitle="Senior front-end engineer"
          jobSnippet="Lorem ipsum doloret et min delarus conmiagun di joajnf roarmire con de la tusa"
          jobURL="https://example.com"
        />

        <JobItem
          company="MomCorp"
          jobTitle="Data Analyst"
          jobSnippet="Lorem ipsum doloret et min delarus conmiagun di joajnf roarmire con de la tusa"
          jobURL="https://example.com"
        />

        <JobItem
          company="Weyland"
          jobTitle="Android Developer - Remote"
          jobSnippet="Lorem ipsum doloret et min delarus conmiagun di joajnf roarmire con de la tusa"
          jobURL="https://example.com"
        />

        <JobItem
          company="BlueMoon"
          jobTitle="Full Stack Javascript Developer"
          jobSnippet="Lorem ipsum doloret et min delarus conmiagun di joajnf roarmire con de la tusa"
          jobURL="https://example.com"
        />

        <JobItem
          company="Acme inc"
          jobTitle="Project Manager"
          jobSnippet="Lorem ipsum doloret et min delarus conmiagun di joajnf roarmire con de la tusa"
          jobURL="https://example.com"
        />

        <JobItem
          company="Rundown Agency"
          jobTitle="Marketing Director"
          jobSnippet="Lorem ipsum doloret et min delarus conmiagun di joajnf roarmire con de la tusa"
          jobURL="https://example.com"
        />

        <JobItem
        company="Acme inc"
        jobTitle="Lead Jester"
        jobSnippet="Lorem ipsum doloret et min delarus conmiagun di joajnf roarmire con de la tusa"
        jobURL="https://example.com"
      />

      <JobItem
        company="Acme inc"
        jobTitle="Lead Jester"
        jobSnippet="Lorem ipsum doloret et min delarus conmiagun di joajnf roarmire con de la tusa"
        jobURL="https://example.com"
      />
      </div>

      <div className={styles.job_list_footer}></div>
    </div>
  );
}
