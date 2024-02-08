import React from 'react'
import "./footer.css"
import Image from 'next/image';
import Logo from "@/asset/logo.png"
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
<div class="social_logo">
<a href="#"><i class="ti-facebook"></i></a>
<a href="#"> <i class="ti-twitter"></i> </a>
<a href="#"><i class="ti-instagram"></i></a>
<a href="#"><i class="ti-skype"></i></a>
</div>
</div>
<div class="col-xl-2 col-sm-6 col-md-4 single-footer-widget">
<h4>Quick Links</h4>
<ul>
<li><a href="#">About us</a></li>
<li><a href="#">Department</a></li>
<li><a href="#"> Online payment</a></li>
<li><a href="#">Careers</a></li>
<li><a href="#">Department</a></li>
</ul>
</div>
<div class="col-xl-2 col-sm-6 col-md-4 single-footer-widget">
<h4>Explore</h4>
<ul>
<li><a href="#">In the community</a></li>
<li><a href="#">IU health foundation</a></li>
<li><a href="#">Family support </a></li>
<li><a href="#">Business solution</a></li>
<li><a href="#">Community clinic</a></li>
</ul>
</div>
<div class="col-xl-2 col-sm-6 col-md-6 single-footer-widget">
<h4>Resources</h4>
<ul>
<li><a href="#">Lights were season</a></li>
<li><a href="#"> Their is let wherein</a></li>
<li><a href="#">which given over</a></li>
<li><a href="#">Without given She</a></li>
<li><a href="#">Isn two signs think</a></li>
</ul>
</div>
</div>
</div>
<div className="foot  text-center bg-dark">Copyright ©2024 All rights reserved | Bashir muhammad jibrin</div>
</div>
  
    </>
  )
}

export default footer