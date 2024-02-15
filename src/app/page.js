import React from 'react';
import Navbar from '@/components/navbar/Navbar'
import CustomHome from '../components/Home/Home'
import Service from '@/components/services/Services'
import About from  "@/components/about/About"
import Fetures from  "@/components/features/Features"
import Footer from '@/components/footer/footer';
import Blog from "@/components/blog/blog"
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Home() {
  return (
   <>
   <Navbar/>
   <CustomHome/>
   <About/>
   <Service/>
   <Fetures/>
   <Blog/>
   <Footer/>
   </>
  )
}
