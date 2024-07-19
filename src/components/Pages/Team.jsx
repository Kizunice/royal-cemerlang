'use client'
import React, {useEffect} from "react";
import {
  Typography,
} from "@material-tailwind/react";
import Subtitle from "../UI/Subtitle";
import Image from 'next/image'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
        <section className="w-full p-8 lg:p-20 mx-auto">
            <div className="flex flex-col lg:flex-row">
                <motion.div 
                    variants={variants1}
                    ref={ref}
                    initial="hidden"
                    animate={control}  
                    className="lg:w-[50%] justify-start items-start text-left px-6 mb-8">
                    <Subtitle text={"Team"} />
                    <Typography 
                        variant="h2"
                        color="white"
                        className="my-4 leading-snug !text-2xl lg:!text-5xl">
                        We focus on {" "} 
                        <span className="leading-snug text-[#3F3BF2]">synergy</span>, {" "}
                        <span className="leading-snug text-[#3F3BF2]">expertise</span>, and {" "}
                        <span className="leading-snug text-[#3F3BF2]">solidity</span>.
                    </Typography>
                    <Typography
                        variant="lead"
                        className="!text-gray-500 lg:text-md text-base mb-4"
                        >
                        Our team is the cornerstone of our success. We are dedicated professionals, 
                        striving for excellence in every solutions. 
                    </Typography>
                    <Typography
                        variant="lead"
                        className="!text-gray-500 lg:text-md text-base"
                        >
                        Our strong management and exceptional leadership guide us in delivering 
                        customer-focused and techno-based solutions. We leverage frontier technology 
                        to meet the evolving needs of our end-users, ensuring they benefit from the 
                        latest advancements. 
                    </Typography>
                </motion.div>
                <motion.div 
                     variants={variants2}
                     ref={ref}
                     initial="hidden"
                     animate={control}
                    className="flex flex-col justify-center items-center mx-auto">
                    <Image src="/images/team-1.png" width={280} height={200} alt="Team RCT" />
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