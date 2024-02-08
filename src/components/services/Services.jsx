import React from 'react'
import Image from 'next/image';
import "./services.css"
import { FaRegFileVideo } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import Img from "@/asset/service.png.webp"
import { SiBlockchaindotcom } from "react-icons/si";
function Services() {
  return (
    <>
    <div className="services mb-5">
    <div class="section_tittle text-center">
    <h2>Our services</h2>
    <p>Extraordinary service, extraordinary you</p>
    </div>
    <div class="row justify-content-center align-items-center services-container d-flex">
<div class="col-lg-3 col-sm-12">
<div class="single_feature">
<div class="single_feature_part">
<span class="single_feature_icon"><FaRegFileVideo/></span>
<h4>Video Chat Support</h4>
<p>Real-time video and audio support to aid communication between Doctors and Patient..</p>
</div>
</div>
<div class="single_feature">
<div class="single_feature_part">
<span class="single_feature_icon"><SiBlockchaindotcom /></span>
<h4>Hospital Management</h4>
<p>Manage patient hospital, clinical and other related data in a timely, effective and efficient manner.</p>
</div>
</div>
</div>
<div class="col-lg-4 col-sm-12 text-center">
<div class="single_feature_img">
<Image src={Img}
height={300}

/>
</div>
</div>
<div class="col-lg-3 col-sm-12">
<div class="single_feature">
<div class="single_feature_part">
<span class="single_feature_icon"><GrUserManager/></span>
<h4>Secured on Blockchain</h4>
<p>Patient medical information is highly encrypted and secured on the Blockchain Technology using NEAR Protocol.</p>
</div>
</div>
<div class="single_feature">
<div class="single_feature_part">
<span class="single_feature_icon"><GrUserManager/></span>
<h4>Better Future</h4>
<p>Darkness multiply rule Which from without life creature blessed
give moveth moveth seas make day which divided our have.</p>
</div>
</div>
</div>
</div>
    </div>
    </>
  )
}

export default Services