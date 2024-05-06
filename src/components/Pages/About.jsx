'use client'
import React from "react";
import { Typography} from "@material-tailwind/react"
import Subtitle from "../UI/Subtitle"
import { ABOUT_IMAGES } from "@/lib/data"
import TabsCustom from "../UI/Tabs";

export default function About() {
    return (
        <section className="bg-white p-6 lg:min-h-[50rem] lg:p-16 md:h-[34rem]">
            <div className="flex flex-col mb-6 justify-center items-center lg:w-[80%] mx-auto">
                <div className="mx-auto text-center mb-16 ">
                    <Subtitle text={"About"} />
                    <Typography 
                        variant="h1"
                        color="purple"
                        className="mx-auto my-4 w-full leading-snug !text-3xl lg:max-w-3xl lg:!text-6xl">
                        Synergy of long-time Business Partners
                    </Typography>
                    <Typography
                        variant="lead"
                        className="mx-auto w-full px-2 !text-gray-500 lg:text-md text-base"
                        >
                        RCT is a good team company for operating as official representative/distributor of manufacturers 
                        and brands that are key players in their industries, ensuring RCT solutions is always provide its 
                        customers the best solution.
                    </Typography>
                </div>

                <div className="flex flex-wrap gap-4 mb-8 mx-auto justify-center items-center">
                    <TabsCustom data={ABOUT_IMAGES} />
                </div>    
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