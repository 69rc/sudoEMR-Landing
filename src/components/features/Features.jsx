import React from 'react';
import Image from 'next/image';
import styles from './features.module.css'; 

import Img1 from '../../asset/blockchain_healthcare_2_prev_ui.svg';
import Img2 from '../../asset/consultations.svg';
import Img3 from '../../asset/consult.svg';

const FeatureCard = ({ imageSrc, title, description }) => (
  <div className={styles.our_features_card}>
    <span className={styles.features_img}>
      <Image width={100} src={imageSrc} />
    </span>
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

const Features = () => {
  return (
    <>
      <section className={`${styles.our_features} mt-5 mb-5`}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xl-12">
              <div className={styles.features_content}>
                <div className="row justify-content-center">
                  <div className="col-xl-8">
                    <h2>Our Features</h2>
                    <div className="row">
                      <div className={`col-lg-6 col-sm-6 ${styles.feature_card}`}>
                        <FeatureCard
                          imageSrc={Img1}
                          title="My Doctor, my Health"
                          description="Yes! You can Book a doctor from anywhere with just a few clicks through our App. Engage with a doctor face to face or using our instant messaging feature."
                        />
                      </div>
                      <div className={`col-lg-6 col-sm-6 ${styles.feature_card}`}>
                        <FeatureCard
                          imageSrc={Img2}
                          title="Online pharmacy and emergency care"
                          description="Buy your medicines with our mobile application with a simple delivery system. Now you can get 24/7 urgent care for yourself or your children and your lovely family"
                        />
                      </div>
                      <div className={`col-lg-6 col-sm-6 ${styles.feature_card}`}>
                        <FeatureCard
                          imageSrc={Img3}
                          title="Your Records are safe"
                          description="All patient data are securely stored on a blockchain network. Your Health status is combined with your Health record in all the Hospitals you have been."
                        />
                      </div>
                      <div className={`col-lg-6 col-sm-6 ${styles.feature_card}`}>
                        <FeatureCard
                          imageSrc={Img3}
                          title="Better Future"
                          description="Darkness multiplies rule Which from without life creature blessed give moveth moveth seas make day which divided our have."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
