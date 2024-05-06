'use client'
import React from "react";
import {
  Button,
  Typography,
} from "@material-tailwind/react";
import ParticlesComponent from "../UI/Particles";

export default function Hero() {
  
    return (
        <section className="wrapper">
            <div className="flex flex-col h-[90vh] justify-center items-center">
                <div className="px-6 text-center">    
                    <Typography
                    variant="h1"
                    color="white"
                    className="mx-auto my-6 w-full leading-snug !text-4xl lg:max-w-3xl lg:!text-7xl"
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
                        color="gray"
                        className="w-full px-4 md:w-[12rem]"
                        >
                        get started
                        </Button>
                    </div>
                    </div>
                </div>
            </div>           

        </section>
    )
}