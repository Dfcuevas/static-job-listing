import React, { useEffect, useState } from "react";
import styles from "./job.modules.css";

const Job = ({ data }) => {

  const [dataJobs, setDataJobs] = useState(data)
  const [filterData, setFilterData] = useState([])

 const handleChange = (e) => {
  const value = e.target.textContent 

  const filterJobs = dataJobs.filter((job) => job.role === value || job.level === value || job.languages?.includes(value) || job.tools?.includes(value))
  setDataJobs(filterJobs)
  setFilterData([
    ...filterData,
    !filterData.includes(value) && value 
  ])
 }
 

console.log(filterData)
  
  return (
    <>
    <div>
      {
        filterData.length > 0 && filterData.map((item, id) => (
          <button key={id}>{item}</button>
        ))
      }
    </div>
    {
dataJobs?.map((item, index) => (
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
      <button onClick={(e) => handleChange(e)}>{item.role}</button>
      <button onClick={(e) => handleChange(e)}>{item.level}</button>
      {[...item.languages, ...item.tools].map((item, id) => (
        <button onClick={(e) => handleChange(e)} key={id}>{item}</button>
      ))}
    </div>
  </article>
))}
    </>
  )
  
  
};

export default Job;
