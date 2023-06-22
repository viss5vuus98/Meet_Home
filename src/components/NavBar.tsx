import  React  from 'react';
import styles from '../styles/navBar.module.scss'
import logoWhite from '../assets/images/logo-white.svg'
import logo from '../assets/images/logo.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSearch, fas } from '@fortawesome/free-solid-svg-icons';
import { faBell, faStar } from '@fortawesome/free-regular-svg-icons';
const NavBar: React.FC = () => {
  return (
    <>
      <div className={styles.m_nav}>
        <a className={styles.m_nav_logo}>
          <img src={logoWhite} alt="logo" />
        </a>
        <div className={styles.m_nav_title}>
          <span>讓每個人都能找到好工作</span>
        </div>
      </div>
      <header className={styles.nav_container}>
        <nav className={styles.navbar}>
          <div className={styles.navbar_sub}>
            <div className='nav-home-img'>
              <img src={logo} alt='home' />
              <a></a>
            </div>
            <div className={styles.navbar_sub_links}>
              <div className='nav-link'>
                <a href="">精選專欄</a>
              </div>
              <div className='nav-link'>
                <a href="">討論區</a>
              </div>
              <div className={styles.navbar_bg_link}>
                <a href="">活動積分｜好書限時拿</a>
              </div>
              <div className={styles.nav_select}>
                <a href="">比薪水</a>
                <FontAwesomeIcon icon={faChevronDown} className={styles.navItem_icon} />                
              </div>
            </div>
          </div>
          <div className={styles.nav_main}>
              <div className={styles.navItem_share}>
                <FontAwesomeIcon icon={faChevronDown} className={styles.navItem_icon} />
                <a href="">分享面試</a>
              </div>
              <button><FontAwesomeIcon icon={faSearch} className={styles.navItem_icon}/></button>
              <button><FontAwesomeIcon icon={faBell} className={styles.navItem_icon}/></button>
              <button><FontAwesomeIcon icon={faStar} className={styles.navItem_icon}/>50</button>
              <button className={styles.person_name}>奕翔</button>
              <button className={styles.person_gift}>面試福袋</button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;