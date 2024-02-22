import React from 'react';
import Image from 'next/image';
import { FaRegFileVideo } from 'react-icons/fa';
import { GrUserManager } from 'react-icons/gr';
import { SiBlockchaindotcom } from 'react-icons/si';
import styles from '@/components/services/services.css'

import serviceImage from '@/asset/service.png.webp';

const SingleFeature = ({ icon, title, description }) => (
  <div className={styles.single_feature}>
    <div className={styles.single_feature_part}>
      <span className="single_feature_icon">{icon}</span>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <>
      <div className={`${styles.services} mb-5`}>
        <div className={`${styles.section_tittle} text-center`}>
          <h2>Our services</h2>
          <p>Extraordinary service, extraordinary you</p>
        </div>
        <div className={`${styles.row} justify-content-center align-items-center ${styles.services_container} d-flex`}>
          <div className={`col-lg-3 col-sm-12 ${styles.single_feature}`}>
            <SingleFeature
              icon={<FaRegFileVideo />}
              title="Video Chat Support"
              description="Real-time video and audio support to aid communication between Doctors and Patient."
            />
            <SingleFeature
              icon={<SiBlockchaindotcom />}
              title="Hospital Management"
              description="Manage patient hospital, clinical and other related data in a timely, effective and efficient manner."
            />
          </div>
          <div className={`col-lg-4 col-sm-12 text-center ${styles.single_feature_img}`}>
            <Image src={serviceImage} height={300} />
          </div>
          <div className={`col-lg-3 col-sm-12 ${styles.single_feature}`}>
            <SingleFeature
              icon={<GrUserManager />}
              title="Secured on Blockchain"
              description="Patient medical information is highly encrypted and secured on the Blockchain Technology using NEAR Protocol."
            />
            <SingleFeature
              icon={<GrUserManager />}
              title="Better Future"
              description="Darkness multiply rule Which from without life creature blessed give moveth moveth seas make day which divided our have."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
