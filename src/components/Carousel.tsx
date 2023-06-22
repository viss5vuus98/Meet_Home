import  React  from 'react';
import { useEffect } from 'react';
import styles from '../styles/carousel.module.scss'
import { gsap } from 'gsap';
import  ihpMarquee_badge  from '../assets/images/ihpMarquee_badge.png'
import  hpMarquee_new from '../assets/images/hpMarquee_new.png'
import jobData from '../api'

type CarouselCardProps = {
  job: string;
  company: string;
  icon: string;
}


const Carousel: React.FC = () => {
  const firstRow = jobData.filter((job) => job.display === 'badge')
  const secondRow = jobData.filter((job) => job.display === 'new')
    
  useEffect(() => {
    gsap.to('.carousel-module__carousel_row____0F6', {
      xPercent: '-40',
      ease: 'none',
      duration: 10,
      repeat: -1,
    });
  }, []);

  return (
    <section className={styles.carousel_container}>
      <div className={styles.carousel_wrapper}>
        <div className={styles.carousel_row}>
          {
            firstRow.map((job) => {
              return <CarouselCard job={job.job} company={job.company} icon={ihpMarquee_badge}/>
            })
          }                                 
        </div>
        <div className={styles.carousel_row}>
          { 
            secondRow.map((job) => {
              return <CarouselCard job={job.job} company={job.company} icon={hpMarquee_new}/>
            }) 
          }                        
        </div>
      </div>
    </section>
  );
}

const CarouselCard: React.FC<CarouselCardProps> = (props) => {
  const { job, company, icon } = props;

  return (
    <div className={styles.carousel_card}>
      <div className={styles.carousel_card_icon}>
        <img src={icon} alt="icon" />
      </div>
      <div className={styles.carousel_card_content}>
        <p className={styles.card_job}>{job}</p>
        <p className={styles.card_company}>{company}</p>
      </div>
    </div>
  );
}


export default Carousel;