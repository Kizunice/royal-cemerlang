'use client'
import { 
    Typography, 
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    List,
    ListItem,
    ListItemPrefix,
} from "@material-tailwind/react"
import Subtitle from "../UI/Subtitle"
import React, { useEffect, useState } from "react"
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Image from "next/image"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { montserrat } from "@/app/layout"
import Slider from "react-slick"
import { ABOUT_BANNER } from "@/lib/data"

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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

 

export function CardProject({title, icon, items}) {
    return (
        <Card className="w-full mx-auto max-w-[20rem] h-[28rem] px-4 py-6 bg-[#F4F3FB]">
            <CardHeader floated={false} shadow={false} className="rounded-none bg-[#F4F3FB] ">
                <Image src={icon} width={70} height={70} alt={title} />
            </CardHeader>
            <CardBody className="px-4">
                <Typography className="text-[#3F3BF2] mt-1 mb-2 text-[24px] font-bold">
                {title}
                </Typography>
            </CardBody>
            <CardFooter className="absolute -bottom-0 !p-0 mb-6">
                <List className="p-0">
                {items.map(({project}, index) => (
                    <ListItem key={index} className="group rounded-none py-0.5 text-xs font-small text-blue-gray-700">
                        <ListItemPrefix className="!mr-2">
                            <ChevronDownIcon width={14} height={14}/>
                        </ListItemPrefix>
                        {project}
                    </ListItem>
                ))}
                </List>
            </CardFooter>
        </Card>
    )

}

export default function Solution() {
    const control = useAnimation();
    const [ref, inView] = useInView();
    const [index, setIndex] = useState(true)

    useEffect(() => {
        if (inView) {
          control.start("visible");
        } else {
          control.start("hidden");
        }
      }, [control, inView]);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        pauseOnHover : false,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 8000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
        <section className="w-full h-[100vh]" id="solution" >
            <div className="bg-[#000b37]/60 absolute h-[101vh] w-[100vw] z-10">
                <motion.div 
                    variants={variants1}
                    ref={ref}
                    initial="hidden"
                    animate={control}
                    className="z-40 opacity-100 justify-start items-start text-left px-6 lg:w-[90%] lg:mt-[8rem] lg:px-14">
                        <Typography
                            variant="h1"
                            className={`${montserrat.variable} font-primary text-white my-6 w-full leading-snug text-[30px] lg:max-w-3xl lg:text-4xl`}
                        >
                        AREAS OF FOCUS
                        </Typography>
                        <Typography 
                            variant="h2"
                            className={`${montserrat.variable} font-primary text-white my-4 leading-snug text-xl lg:text-2xl`}>
                            RCT solutions are {" "} 
                            <span className="leading-snug text-[#3F3BF2]">innovative</span>, {" "}
                            <span className="leading-snug text-[#3F3BF2]">reliable</span>, and {" "}
                            <span className="leading-snug text-[#3F3BF2]">user-focused</span> {" "} <br></br>
                            in accordance with local laws. 
                        </Typography>

                        <Slider {...settings} className="mt-12">
                            {ABOUT_BANNER.map((banner,idx)=>(
                                <div key={idx} className="h-[100vh] w-[80%]">
                                    <h1 className="text-white font-bold text-2xl mb-4">{banner.label}</h1>
                                    <div className="flex flex-col lg:flex-row">
                                        <div className="lg:w-[50%] mb-2 pr-4">
                                            <p className="text-gray-200 text-md transition-all ">
                                                {
                                                   index ? banner.value : banner.list.map((list => (
                                                    <li key={list}>{list}</li>
                                                )))
                                                }
                                            </p>
                                            <button 
                                                className="mt-6 px-4 py-2 text-white border border-white" 
                                                onClick={() => {setIndex(!index)}} 
                                            >
                                                read more
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                </motion.div>
            </div>

            <Slider {...settings} className="relative z-0" >
                {ABOUT_BANNER.map((banner,idx)=>(
                     <div key={idx} className="h-[100vh]">
                        <img src={banner.image} alt={banner.label} className="w-[100%] object-cover"/>
                        
                    </div>
                ))}
            </Slider>
        </section>
      
        {/* <section className="w-full p-6 lg:min-h-[50rem] lg:p-16" id="solution" >
            <div className="flex flex-col my-4 mx-auto">
                <motion.div 
                    variants={variants1}
                    ref={ref}
                    initial="hidden"
                    animate={control}
                    className="justify-start items-start text-left px-6 mb-4 lg:w-[90%] lg:mb-8 lg:px-14">
                    <Typography
                        variant="h1"
                        className={`${montserrat.variable} font-primary text-white my-6 w-full leading-snug text-[30px] lg:max-w-3xl lg:text-5xl`}
                    >
                    AREAS OF FOCUS
                    </Typography>
                    <Typography 
                        variant="h2"
                        className={`${montserrat.variable} font-primary text-white my-4 leading-snug text-xl lg:text-2xl`}>
                        RCT solutions are {" "} 
                        <span className="leading-snug text-[#3F3BF2]">innovative</span>, {" "}
                        <span className="leading-snug text-[#3F3BF2]">reliable</span>, and {" "}
                        <span className="leading-snug text-[#3F3BF2]">user-focused</span> {" "} <br></br>
                        in accordance with local laws. 
                    </Typography>
                </motion.div>

                <motion.div 
                    variants={variants2}
                    ref={ref}
                    initial="hidden"
                    animate={control}
                >
                    <Slider {...settings} className="my-4">
                    {ABOUT_BANNER.map((banner)=>(
                        <div className="grid lg:grid-cols-2 lg:gap-4 lg:ml-[3rem]" key={banner.label}>
                            <Image src={banner.image} width={600} height={200} alt={banner.label} />
                            <div className="p-4 lg:ml-[-4rem]">
                                <h1 className="text-white font-bold text-2xl mb-4">{banner.label}</h1>
                                <div className="flex flex-col lg:flex-row">
                                    <p className="lg:w-[50%] text-gray-400 text-md mb-2 pr-4">{banner.value}</p>
                                    <div className="lg:w-[50%] text-gray-400 lg:px-6 lg:pr-8">
                                        {banner.list.map((list => (
                                            <li key={list}>{list}</li>
                                        )))}
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                    </Slider>
                    
                </motion.div>

                
            </div>
        </section> */}
        </>
    )
}

{/* <div className="flex flex-col">
        <h1>{banner.label}</h1>
        <p>{banner.value}</p>
    </div> */}
    {/* <div className="flex-col">
        {banner.list.map((list => (
            <li key={list}>{list}</li>
        )))}
    </div> */}
    
{/* <div className="scroll-container">
                    <motion.section
                    ref={scrollRef}
                    style={{ x: spring }}
                    className="thumbnails-container"
                    >
                    <div className="thumbnails">
                        <div className="thumbnail" />
                        <div className="thumbnail" />
                        <div className="thumbnail" />
                        <div className="thumbnail" />
                        <div className="thumbnail" />
                        <div className="thumbnail" />
                    </div>
                    </motion.section>
                </div>
                <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" /> */}
                
                {/* <motion.div 
                    variants={variants2}
                    ref={ref}
                    initial="hidden"
                    animate={control}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {PROJECT.map(({title,icon,items}, index) => (
                        <CardProject
                            key={index}
                            title={title}
                            icon={icon}
                            items={items}       
                        />
                    ))}
                </motion.div> */}

                
