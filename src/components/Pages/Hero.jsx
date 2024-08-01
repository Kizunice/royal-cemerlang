'use client'
import {
  Button,
  Typography,
} from "@material-tailwind/react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { montserrat } from "@/app/layout";

const variants = {
    hidden: { 
        opacity: 0,
        y: 30
    },
    show: {
      opacity: 1,
      y:0,
      transition: {
        staggerChildren: 0.3,
        duration: 1,
      },
    },
  };

export default function HeroPage() {
    return (
        <section className="wrapper">
            <div className="flex flex-col h-[90vh] justify-center items-center">
                <motion.div 
                    className="px-6 text-center mt-[-4em] md:mt-[-2em]"
                    variants={variants}
                    initial="hidden"
                    animate="show"
                >    
                    <Typography
                    variant="h1"
                    color="white"
                    className={`${montserrat.variable} font-primary mx-auto mb-2 lg:mb-4 font-semibold w-full !text-[36px] lg:max-w-4xl lg:!text-[50px]`}
                    >
                        INNOVATING TECHNOLOGIES:
                    </Typography>
                    <Typography
                        variant="h1"
                        color="white"
                        className={`${montserrat.variable} font-primary mx-auto font-semibold leading-loose text-[#476CFF] text-lg lg:!text-4xl lg:max-w-3xl uppercase mt-2 lg:mt-4`}
                    >
                        Pushing the boundaries of <br /> what possible.
                    </Typography>
                
                
                    {/* <div className="mt-8 grid w-full place-items-start md:justify-center">
                    <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
                        <Button
                        color="white"
                        variant="outlined"
                        className="w-full px-4 md:w-[12rem] cursor-none"
                        >
                            <Link href="/" scroll={true} className="cursor-none" onClick={(e) => {
                                setTimeout(() => {
                                document.getElementById("about") &&
                                    document
                                    .getElementById("about")
                                    .scrollIntoView({ behavior: "smooth"});
                                }, 500)
                                }} 
                            >
                                get started
                            </Link>
                        </Button>
                    </div>
                    </div> */}
                </motion.div>
            </div>           
        </section>
    )
}