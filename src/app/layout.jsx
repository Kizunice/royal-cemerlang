'use client'
import '../styles/globals.css';
import React, { useState, useEffect } from "react"
import { Inter } from 'next/font/google';
import FlareCursor from '@/components/UI/FlareCursor';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import ParticlesComponent from '@/components/UI/Particles';
import Loading from './loading';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <html lang="en">
      <head/>
      <body className={inter.className}>
        {isLoading ? (<Loading/>) : (
          <>
          <FlareCursor />
          <ParticlesComponent/>
          <Header/>
          {children}
          <Footer/>
          </>
        )}    
      </body>
    </html>
  );
}
