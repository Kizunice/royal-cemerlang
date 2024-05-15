'use client'
import { useEffect } from "react";
import {
  Button,
  Typography,
} from "@material-tailwind/react";
import { motion, useAnimation } from "framer-motion";
import { Spotlight } from "../UI/Spotlight";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

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
        duration: 1.5,
      },
    },
  };

export default function Hero() {

    return (
        <section className="wrapper">
            <div className="flex flex-col h-[90vh] justify-center items-center">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />
                <motion.div 
                    className="px-6 text-center"
                    variants={variants}
                    initial="hidden"
                    animate="show"
                >    
                    <Typography
                    variant="h1"
                    color="white"
                    className="mx-auto my-6 w-full leading-snug !text-4xl lg:max-w-3xl lg:!text-7xl bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
                    >
                    We offer{" "} <br></br>
                    <span className="leading-snug ">
                    State-of-the art
                    </span>{" "}
                    <span className="leading-snug text-[#3F3BF2]">
                        Technology
                    </span>
                    .
                    </Typography>
                
                    <div className="mt-8 grid w-full place-items-start md:justify-center">
                    <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
                        <Button
                        color="white"
                        variant="outlined"
                        className="w-full px-4 md:w-[12rem]"
                        >
                        <Link href="/#About" scroll={true} >
                            get started
                        </Link>
                        </Button>
                    </div>
                    </div>
                </motion.div>
            </div>           
        </section>
    )
}