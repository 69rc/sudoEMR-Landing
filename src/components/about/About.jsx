import "./about .css"
import Image from 'next/image';
import Hero from '../../asset/top_service.png.webp';

function About() {
  return (
    <>
    <section class="about_us mb-5 d-flex ">
<div class="container ">
<div class="row justify-content-between align-items-center">
<div class="col-md-6 col-lg-6">
<div class="about_us_img">
<Image src={Hero}/>
</div>
</div>
<div class="col-md-6 col-lg-5">
<div class="about_us_text">
<h2>About us</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
do eiusmod tempor incididunt ut labore et dolore magna aliqua
Quis ipsum suspendisse ultrices gravida. Risus cmodo viverra
maecenas accumsan lacus vel</p>
<button className="btns"> learn more</button>
</div>
</div>
</div>
</div>
</section>
    </>
  )
}

export default About