"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '../../asset/logo.png';
import { IoMenuOutline } from 'react-icons/io5';
import { IoClose } from "react-icons/io5";
import '@/components/navbar/Navbar.css';

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolling) {
        setScrolling(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolling]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
  };

  return (
    <>
      <div className={`Navbar ${scrolling ? 'Navbar-scrolled' : ''}`}>
        <div className="Navbar-container  ">
          <div className="Navbar-logo">
            <Image src={Logo} width={50} height={50} />
            <h3>SUDO.EMR</h3>
          </div>
          <div className="navlist">
          <div className={`Navbar-links ${isMenuOpen ? 'Navbar-links-open' : ''}`}>
            <a href="/home">Home</a>
            <a href="/About">About</a>
            <a href="/contact">Contact</a>
            <a href="">Features</a>
            <a href="">Blog</a>
            
          </div>
          </div>
          <button className="btns">Contact</button>
         
          <div className="Navbar-hamburger" onClick={toggleMenu}>
           {isMenuOpen ? <IoClose /> :  <IoMenuOutline /> }
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
