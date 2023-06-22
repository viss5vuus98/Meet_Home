import  React  from 'react';
import styles from '../styles/mainWrapper.module.scss'
import heroPerson_01 from '../assets/images/heroPerson_01_d.png'
import heroPerson_02 from '../assets/images/heroPerson_02_d.png'

const MainWrapper: React.FC = () => {
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.wrapper_cards}>
        <div className={styles.wrapper_card}>
          <div className={styles.wrapper_card_text_content}>
            <p className={styles.title}>面試心得</p>
            <p className={styles.count}>727,000+</p>
          </div>
        </div>
        <div className={`${styles.wrapper_card} ${styles.wrapper_img_content}`}>
          <div className={styles.wrapper_card_img}>
            <img src={heroPerson_02} alt="" />
          </div>
        </div>
        <div className={`${styles.wrapper_card} ${styles.second_text_content}`}>
          <div className={`${styles.wrapper_card_text_content} ${styles.second_card}`}>
            <p className={styles.title}>精選心得</p>
            <p className={styles.count}>92,000+</p>
          </div>     
        </div>
        <div className={`${styles.wrapper_card} ${styles.wrapper_img_content}`}>
          <div className={`${styles.wrapper_card_img} ${styles.second_card}`}>
            <img src={heroPerson_01}  alt="" />
          </div>     
        </div>         
      </div>
      <div className={styles.main_wrapper_video}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kEO7atwPSkE?start=2" title="YouTube video player" frameBorder={"0"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default MainWrapper;