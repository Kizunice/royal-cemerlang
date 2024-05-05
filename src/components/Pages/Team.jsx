'use client'
import React from "react";
import {
  Typography,
} from "@material-tailwind/react";
import Subtitle from "../UI/Subtitle";
import Image from 'next/image'
export default function Team() {
    return (
        <section className="">
            <div className="flex flex-col max-w-[1440px] p-10 mx-auto lg:px-20 xl:max-h-[700px] lg:py-20 xl:flex-row mt-8">
                <div className="max-w-[70%] justify-start items-start text-left px-6">
                    <Subtitle text={"Team"} />
                    <Typography 
                        variant="h2"
                        color="white"
                        className="max-w-[80%] my-4 leading-snug !text-2xl lg:!text-4xl">
                        We keep our team reasonably small, but we focus on {" "} 
                        <span className="leading-snug text-[#3F3BF2]">synergy</span>, {" "}
                        <span className="leading-snug text-[#3F3BF2]">complementarity</span>{" "}, and {" "}
                        <span className="leading-snug text-[#3F3BF2]">teamwork</span>
                    </Typography>
                    <Typography
                        variant="lead"
                        className="max-w-[80%] !text-gray-500 lg:text-md text-base"
                        >
                        RCT is managed by an experienced, dynamic and multicultural group of 
                        people with diversified backgrounds in Defense, IT, Telecommunication, Engineering, 
                        Oild and Gas, Business Management, International Organizations, etc. 
                    </Typography>
                    
                </div>
                <div className="flex flex-col justify-start">
                    <Image src="/images/team-1.png" width={280} height={200} alt="Team RCT" />
                </div>

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