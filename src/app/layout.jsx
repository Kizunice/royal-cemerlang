'use client'
import '../styles/globals.css';
import React, { useState, useEffect } from "react"
import { Quantico } from 'next/font/google';
import localFont from 'next/font/local'
import FlareCursor from '@/components/UI/FlareCursor';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import ParticlesComponent from '@/components/UI/Particles';
import Loading from './loading';
import ScrollToTopButton from '../components/UI/ScrollToTopButton'

const inter = Quantico({  
  weight: ['400', '700'],
  subsets: ['latin'] 
});

const custom = localFont({src : '../styles/Supermolot.ttf'})



export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <html lang="en">
      <head/>
      <body className={custom.className}>
        {isLoading ? (<Loading/>) : (
          <>
          <FlareCursor />
          <ParticlesComponent/>
          <ScrollToTopButton/>
          <Header/>
          {children}
          <Footer/>
          </>
        )}    
      </body>
    </html>
  );
}
