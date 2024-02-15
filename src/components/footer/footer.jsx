import React from 'react'
import "./footer.css"
import Image from 'next/image';
import Logo from "@/asset/logo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
function footer() {
  return (
    <>
    <div class="footer pt-5 bg-light">
<div class="container pt-5 pb-5">
<div class="row justify-content-between">
<div class="col-xl-2 col-md-4 col-sm-6 single-footer-widget">
<div className="Navbar-logo">
            <Image src={Logo} width={50} height={50} />
            <h3>SUDO.EMR</h3>
          </div>
          <p>Hospital Management Solution and Healthcare Service Delivery for you</p>
<div class="social_logo">
<a href="#"><i class="ti-facebook"></i></a>
<a href="#"> <i class="ti-twitter"></i> </a>
<a href="#"><i class="ti-instagram"></i></a>
<a href="#"><i class="ti-skype"></i></a>
</div>
</div>
<div class="col-xl-2 col-sm-6 col-md-4 single-footer-widget">
<h4>Address</h4>
<p>Office: Floor 1, African Alliance Building, No 1 Sani Abacha Way, Kano, Nigeria</p>

</div>
<div class="col-xl-2 col-sm-6 col-md-4 single-footer-widget ">
<h4>contact us</h4>
<div className="social-icon">
<FaFacebookF/>
<FaLinkedin />
<FaGithub/>
<FaYoutube />
</div>

</div>

</div>
</div>
<div className="foot  text-center bg-dark">Copyright ©2024 All rights reserved | Bashir muhammad jibrin</div>
</div>
  
    </>
  )
}

export default footer