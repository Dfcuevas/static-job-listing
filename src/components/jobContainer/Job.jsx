import React, { useState } from "react";
import styles from "./job.modules.css";

const Job = ({ data }) => {
  return data?.map((item, index) => (
    <article
      className={`container ${item.featured ? "border-left" : undefined}`}
      key={index}
    >
      <div className="left-side">
        <div className="image-container">
          <img src={item.logo} alt={item.company} />
        </div>
        <div>
          <div className="info-container">
            <span className="first-span">{item.company}</span>
            <span className={item.new ? "second-span" : undefined}>
              {item.new ? "New!" : undefined}
            </span>
            <span className={item.featured ? "third-span" : undefined}>
              {item.featured ? "Featured" : undefined}
            </span>
          </div>

          <p className="position-container">{item.position}</p>

          <div className="features-container">
            <ul>
              <li className="no-list">{item.postedAt}</li>
              <li>{item.contract}</li>
              <li>{item.location}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="right-side">
        <button>{item.role}</button>
        <button>{item.level}</button>
        {[...item.languages, ...item.tools].map((item, id) => (
          <button key={id}>{item}</button>
        ))}
      </div>
    </article>
  ));
};

export default Job;
