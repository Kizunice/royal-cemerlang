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
    ListItemSuffix,
} from "@material-tailwind/react"
import Subtitle from "../UI/Subtitle"
import React, { useRef, useState, useLayoutEffect, useCallback } from "react"
import ResizeObserver from "resize-observer-polyfill"
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring
} from "framer-motion"
import { PROJECT } from "@/lib/data"
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Image from "next/image"

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

export default function Project() {
    return (
        <section className="bg-white p-6 lg:min-h-[50rem] lg:p-16">
            <div className="flex flex-col my-4 mx-auto">
                <div className="justify-start items-start text-left px-6 lg:w-[90%] lg:p-14">
                    <Subtitle text={"Project"} />
                    <Typography 
                        variant="h2"
                        color="purple"
                        className="my-4 w-full leading-snug !text-2xl lg:max-w-3xl lg:!text-5xl">
                        RCT solutions are reliable-customer-driven and tailor -made in accordance with local laws.                    
                    </Typography>
                </div>

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
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {PROJECT.map(({title,icon,items}, index) => (
                        <CardProject
                            key={index}
                            title={title}
                            icon={icon}
                            items={items}       
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}