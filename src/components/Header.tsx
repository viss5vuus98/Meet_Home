import  React  from 'react';
import styles from '../styles/header.module.scss'

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.banner_section}>
        <div className={styles.header_title}>
          <div className={styles.header_title_line}>
            <h1>以</h1>
            <h1 className={styles.header_effect}>資訊對稱</h1>
          </div>
          <h1 className={styles.header_title_line}>翻轉求職市場</h1>
        </div>
        <div>
          <p className={styles.header_word}>嗨！歡迎來到面試趣，</p>
          <p className={styles.header_word}>和我們一起探索各種面試心得吧</p>          
        </div>
      </div>
    </div>
  )
}

export default Header;