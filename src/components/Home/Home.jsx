import React from 'react'
import Image from 'next/image';
import Hero from '@/asset/banner_img.png.webp'
import "../Home/home.css"

function Home() {
  return (
   <>
   <div className='banner_part'>
  <div className="container d-flex flex-wrap align-items-center mt-5 pt-5 ">
  <div class="col-lg-5 col-xl-5  ">
<div class="banner_text">
<div class="banner_text_iner ">
<h5>We are here for your care</h5>
<h1>Access healthcare from anywhere
</h1>
<p>SUDOEMR is a platform aimed at managing patient hospital/clinical and other related data in a timely, effective and efficient manner.

</p>
<button class="btns">Get started</button>
</div>
</div>
</div>
<div class="col-lg-7">
<div class="banner_img">
<Image src={Hero}/>
</div>
</div>
    
  </div>
  </div>
    
 
  
  
    </>
  )
}

export default Home