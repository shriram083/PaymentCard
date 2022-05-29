import React from 'react'
import styles from "../styles/Card.module.css";
const Card = (props) => {
    let data = props.cardData
  return (
    <div className={styles.container} style={{backgroundColor:(props.i%2===1? 'whitesmoke':'orange')}}>
        <div className={styles.header}>
            <h2>{data.date}</h2>
            <img src={data.img} alt="logo" />
        </div>
        <div className={styles.caseStudy}>Case Study</div>
        <div className={styles.title}><h1>{data.title}</h1></div>
        <div className={styles.footer}>
            <h2>{data.details.join(' - ')}</h2>
            <div><h2>{'->'}</h2></div>
        </div>
    </div>
  )
}

export default Card