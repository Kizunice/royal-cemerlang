'use client'
import React, {useEffect} from "react";
import {
  Typography,
} from "@material-tailwind/react";
import Subtitle from "../UI/Subtitle";
import Image from 'next/image'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { montserrat } from "@/app/layout";
const variants1 = {
    hidden: { opacity: 0, y:30 },
    visible: {
      opacity: 1,
      y:0,
      transition: {
        duration: 0.5
      },
    },
  };

  const variants2 = {
    hidden: { opacity: 0, y:30 },
    visible: {
      opacity: 1,
      y:0,
      transition: {
        duration: 1
      },
    },
  };

export default function Team() {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
          control.start("visible");
        } else {
          control.start("hidden");
        }
      }, [control, inView]);
    return (
        <section className="bg-white p-8 py-[6rem] lg:px-20 lg:py-[10rem] mx-auto" id="team" >
            <div className="flex flex-col lg:flex-row lg:w-[90%] mx-auto justify-center items-center">
              <motion.div 
                  variants={variants1}
                  ref={ref}
                  initial="hidden"
                  animate={control}  
                  className="flex w-full justify-center items-end">
                  <div className="flex flex-col my-4 xl:w-1/2  justify-center">
                      <Image src="/images/Team-1.png" width={800} height={800} className="rounded-xl" alt="Team Royal Defense"/>
                  </div> 
              </motion.div>
                <motion.div 
                  variants={variants2}
                  ref={ref}
                  initial="hidden"
                  animate={control}
                  className="flex flex-col lg:ml-[-6rem] lg:mr-[8rem] lg:w-[80%]">
                    <Typography 
                      variant="h2"
                      color="white"
                      className={`${montserrat.variable} font-primary text-[#000b37] my-4 leading-snug !text-[30px] lg:!text-[2.8em]`}>
                      We focus on {" "} 
                      <span className="leading-snug text-[#3F3BF2]">synergy</span>, {" "}
                      <span className="leading-snug text-[#3F3BF2]">expertise</span>, and {" "}
                      <span className="leading-snug text-[#3F3BF2]">solidity</span>.
                  </Typography>
                    <Typography
                      variant="lead"
                      className="font-text !text-gray-700 lg:text-md text-base my-4"
                      >
                      Our team is the cornerstone of our success. We are dedicated professionals, 
                      striving for excellence in every solutions. 
                    </Typography>
                    <Typography
                      variant="lead"
                      className="font-text !text-gray-700 lg:text-md text-base"
                      >
                      Our strong management and exceptional leadership guide us in delivering 
                      customer-focused and techno-based solutions. We leverage frontier technology 
                      to meet the evolving needs of our end-users, ensuring they benefit from the 
                      latest advancements. 
                   </Typography>
                </motion.div>




                {/* <div className="realtive flex flex-1 flex-col xl:w-1/2 mb-4 ">
                    <Typography 
                        variant="h1"
                        className="text-primary !font-extrabold mb-10 text-[28px] lg:text-[40px]"
                    > Tentang Kami
                    </Typography>
                    <Typography
                        variant="lead"
                        className="!text-gray-500 text-[18px]"
                    >
                    <span className="font-extrabold text-black">Zerya Fishing</span> merupakan distributor toko pancing yang menyediakan berbagai macam kebutuhan alat pancing mulai dari reel, line, joran aksesoris hingga kebutuhan pendukung untuk memancing.    <br /> <br />  Kami melayani pembelian produk secara grosir maupun eceran. <br /><br />             Produk yang kami sediakan sangat beragam dari berbagai brand yang dapat para pemancing temukan sesuai kebutuhan.
                    </Typography> 
                </div>
                <div className="relative flex flex-col my-4 xl:w-1/2 items-center lg:items-end justify-center">
                    <Image src="/images/team-1.png" width={500} height={500} className="rounded-xl"/>
                </div> */}


                
            </div>           
        </section>
    )
}