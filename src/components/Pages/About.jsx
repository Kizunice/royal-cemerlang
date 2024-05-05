'use client'
import { Typography,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,} from "@material-tailwind/react"

import Subtitle from "../UI/Subtitle"
import { ABOUT_IMAGES } from "@/lib/data"
import Images from 'next/image'

export default function About() {
    return (
        <section className="bg-white lg:h-[110vh] md:h-[34rem]">
            <div className="flex flex-col my-6">
                <div className="mx-auto justify-center items-center px-6 text-center lg:w-[50%] lg:p-14">
                    <Subtitle text={"About"} />
                    <Typography 
                        variant="h1"
                        color="purple"
                        className="mx-auto my-4 w-full leading-snug !text-2xl lg:max-w-3xl lg:!text-6xl">
                        Synergy of long-time Business Partners
                    </Typography>
                    <Typography
                        variant="lead"
                        className="mx-auto w-full !text-gray-500 lg:text-md text-base"
                        >
                        RCT is a good team company for operating as official representative/distributor of manufacturers 
                        and brands that are key players in their industries, ensuring RCT solutions is always provide its 
                        customers the best solution.
                    </Typography>
                </div>

                <div className="mx-auto justify-center items-center">
                    <Tabs value="Cyber Intelligence & Security" orientation="vertical" className="max-w-[72rem]" >
                        <TabsHeader 
                            className="bg-transparent w-[300px] mr-4" 
                            indicatorProps={{
                                className: "bg-purple-900/10 shadow-none !text-gray-900",
                            }}>
                            {ABOUT_IMAGES.map(({ label, value }) => (
                            <Tab key={value} value={value} className="!justify-start py-3">
                                {label}
                            </Tab>
                            ))}
                        </TabsHeader>
                        <TabsBody>
                            {ABOUT_IMAGES.map(({ value, image }) => (
                            <TabPanel key={value} value={value} className="py-0">
                                <Images src={image} key={value} width={350} height={350} />
                            </TabPanel>
                            ))}
                        </TabsBody>
                    </Tabs>

                </div>
                

            </div>
            
        </section>
    )
}