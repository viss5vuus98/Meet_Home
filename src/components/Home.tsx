import  React  from 'react';
import styles from '../styles/home.module.scss'
import NavBar from './NavBar';
import Header from './Header';
import MainWrapper from './MainWrapper';
import Carousel from './Carousel';

const Home: React.FC = () => {
  return (
    <div className="Home">
      <NavBar />
      <div className={styles.header}>
        <div className={styles.header_container}>
          <Header />
          <MainWrapper />
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default Home;