import React, { useEffect, useState } from "react";
import "./job.modules.css";

const Job = ({ data }) => {
  const [dataJobs, setDataJobs] = useState(data);
  const [filterData, setFilterData] = useState([]);

  const handleChange = (e) => {
    const value = e.target.textContent;

    const filterJobs = dataJobs.filter(
      (job) => 
        job.role === value ||
        job.level === value ||
        job.languages?.includes(value) ||
        job.tools?.includes(value)
    );
    setDataJobs(filterJobs);
    setFilterData(() => {
      if (!filterData.includes(value)) {
        return [...filterData, value];
      } else {
        return [...filterData];
      }
    });
  };

  const clearFilter = () => {
    setFilterData([]);
    setDataJobs(data);
  };

  /* const testClear = (e) => {
    const textJob = e.target.parentElement.childNodes[0].textContent; // python

    // comienza a filtrar del arreglo original data todos aquellos objetos que tengan de valor python. Lo que yo necesito es que en dataJobs se queden aquellos objetos que coincidan con los filtros aplicados.

    const filteredJobs = data.filter(
      (job) =>
        job.role !== textJob &&
        job.level !== textJob &&
        !job.languages?.includes(textJob) &&
        !job.tools?.includes(textJob)
    );
    setDataJobs([...dataJobs, ...filteredJobs].sort((a, b) => a.id - b.id));
    setFilterData(...[filterData.filter((item) => item !== textJob)]);

    
  }; */
 
  return (
    <>
      <>
        {filterData.length > 0 && (
          <div className="filter-buttons">
            <div className="filter-left-side">
              {filterData.map((item, id) => (
                <span key={id}>
                  {item}
                  <button onClick={(e) => testClear(e)}>x</button>
                </span>
              ))}
            </div>
            <div className="filter-right-side">
              <button onClick={clearFilter}>clear</button>
            </div>
          </div>
        )}
      </>
      {dataJobs?.map((item, index) => (
        <article
          className={`container ${item.featured ? "border-left" : ""}`}
          key={index}
        >
          <div className="left-side">
            <div className="image-container">
              <img src={item.logo} alt={item.company} />
            </div>
            <div>
              <div className="info-container">
                <span className="first-span">{item.company}</span>
                <span className={item.new ? "second-span" : ""}>
                  {item.new ? "New!" : ""}
                </span>
                <span className={item.featured ? "third-span" : ""}>
                  {item.featured ? "Featured" : ""}
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
              <button onClick={(e) => handleChange(e)} key={id}>
                {item}
              </button>
            ))}
          </div>
        </article>
      ))}
    </>
  );
};

export default Job;
