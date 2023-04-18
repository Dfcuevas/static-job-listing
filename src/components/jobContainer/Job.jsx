import React from 'react'
import styles from './job.modules.css'

const Job = ({data}) => {

  console.log(data)
  return (
    data?.map((item, index) => (
      <article key={index}>
        <div>
          <img src={item.logo} alt={item.company} />
        </div>
      </article>
    ))
  )
}

export default Job