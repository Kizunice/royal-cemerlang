'use client'
import React, {useEffect} from "react";
import { Typography} from "@material-tailwind/react"
import Subtitle from "../UI/Subtitle"
import { ABOUT_IMAGES } from "@/lib/data"
import TabsCustom from "../UI/Tabs";
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

export default function About() {
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
        <section className="bg-white p-6 lg:min-h-[50rem] lg:p-16" id="about" >
            <div className="flex flex-col mb-6 justify-center items-center lg:w-[80%] mx-auto">
                <motion.div 
                    variants={variants1}
                    ref={ref}
                    initial="hidden"
                    animate={control}
                    className="mx-auto text-center mt-6 mb-8 md:mt-0 md:mb-16"
                >
                    <Subtitle text={"About"} />
                    <Typography 
                        variant="h1"
                        color="purple"
                        className="mx-auto my-4 w-full leading-snug !text-3xl lg:max-w-3xl lg:!text-6xl">
                        Synergy of long-time Business Partners
                    </Typography>
                    <Typography
                        variant="lead"
                        className="mx-auto font-sans lg:w-[80%] px-2 !text-gray-500 lg:text-md text-base"
                        >
                        RCT is a good team company for operating as official representative/distributor of manufacturers 
                        and brands that are key players in their industries, ensuring RCT solutions is always provide its 
                        customers the best solution.
                    </Typography>
                </motion.div>

                <motion.div  
                    variants={variants2}
                    ref={ref}
                    initial="hidden"
                    animate={control} 
                    className="flex flex-wrap gap-4 mb-8 mx-auto justify-center items-center">
                    <TabsCustom data={ABOUT_IMAGES} />
                </motion.div>    
            </div>         
        </section>
    )
}

 {/* <Tabs 
    aria-label="Dynamic Tabs" 
    color="default"
    variant="light"
    isVertical={true} 
    items={ABOUT_IMAGES}  
    className="w-[22rem] justify-start"
    classNames={{
        tabContent: "group-data-[selected=true]:bg-[#AE7EDE]/75 px-6 py-4 rounded-lg"
    }} >
    {(item) => (
    <Tab key={item.label} title={item.label} className="mr-4 justify-start py-6 !text-gray-900"  >
        <Card className="m-0">
        <CardBody className="p-0">
            <Image src={item.image} width={350} height={350} />
        </CardBody>
        </Card>  
    </Tab>
    )}
</Tabs> */}