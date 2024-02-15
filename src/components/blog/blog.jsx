import React from 'react'
import Image from 'next/image';
import './blog.css'
import Img1 from '@/asset/blog1.jpg'
import Img2 from '@/asset/blog2.jpg'
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
function blog() {
  return (
    <>
    <div class="container pb-5">
<div class="row justify-content-center">
<div class="col-xl-8">
<div class="section_tittle text-center">
<h2>Our Blog</h2>
</div>
</div>
</div>
<div class="row">
<div class="col-sm-6">
<div class="single-home-blog">
<div class="card">
<Image   className='img-fluid' src={Img1}/>
<div class="card-body">

<h5 class="card-title">First cattle which earth unto let health for
can get and see what you </h5>
<ul>
<li> <span><CiUser /></span>Nazif the unfortunate</li>
<li> <span>< CiBookmark/></span>Clinic, doctors</li>
</ul>
</div>
</div>
</div>
</div>
<div class="col-sm-6">
<div class="single-home-blog">
<div class="card">
<Image  className='img-fluid' src={Img2}/>
<div class="card-body">

<h5 class="card-title">First cattle which earth unto let health for
can get and see what you </h5>
<ul>
<li> <span><CiUser /></span>Bashir jibrin</li>
<li> <span>< CiBookmark/></span>Clinic, doctors</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
    </>
  )
}

export default blog