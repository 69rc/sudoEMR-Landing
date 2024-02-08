import React from 'react'
import "./features.css"
import Image from 'next/image';
import Img1 from '../../asset/blockchain_healthcare_2_prev_ui.svg'
import Img2 from '../../asset/consultations.svg'
import Img3 from '../../asset/consult.svg'

function Features() {
  return (
    <>

<section class="our_features mt-5 mb-5">
<div class="container">
<div class="row justify-content-center text-center">
<div class="col-xl-12">
<div class="features_content">
<div class="row justify-content-center">
<div class="col-xl-8">
<h2>Our Features</h2>
<div class="row">
<div class="col-lg-6 col-sm-6">
<div class="our-features-card">
<span class="features-img">< Image width={100} src={Img1}/></span>
<h4>My Doctor, my Health
</h4>
<p>Yes! You can Book a doctor from anywhere with just a few clicks through our App. Engage with a doctor face to face or using our instant messaging feature.</p>
</div>
</div>
<div class="col-lg-6 col-sm-6">
<div class="our-features-card">
<span class="features-img">< Image width={100} src={Img2}/></span>
<h4>Online pharmacy and emergency care</h4>
<p>Buy your medicines with our mobile application with a simple delivery system. Now you can get 24/7 urgent care for yourself or your children and your lovely family</p>
</div>
</div>
<div class="col-lg-6 col-sm-6">
<div class="our-features-card">
<span class="features-img">< Image width={100} src={Img3}/></span>
<h4>Your Records are safe</h4>
<p>All patient data are secured stored on a blockchain network. Your Health status are combined with your Health record in all the Hospitals you have been..</p>
</div>
</div>
<div class="col-lg-6 col-sm-6">
<div class="our-features-card">
<span class="features-img">< Image width={100} src={Img3}/></span>
<h4>Better Future</h4>
<p>Darkness multiply rule Which from without life creature blessed
give moveth moveth seas make day which divided our have.</p>
</div>
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
  )
}

export default Features