"use client";
import { useState } from "react";
import {FaCrown} from "react-icons/fa"

export default function Team(){

    const isLeader = 1;
    const isAdmin = 1;
    const team=()=>{

    }

    return(
        <div className="flex justify-center items-center h-screen bg-background">
        <div className="w-192">
            <h1 className="sm:text-5xl text-3xl block text-center font-heading text-main">Team Name</h1>
            <h1 className="sm:text-2xl text-2xl block text-center font-heading text-base mt-12">CODE FOR YOUR TEAM IS - <span className="text-main">1234</span></h1>
            <h1 className="sm:text-xl text-base block sm:mx-0 mx-4 text-center font-sub text-base">Only share this code with people you want in your team.</h1>
            <div className="w-192 p-6 mt-12 mb-16">
                <h1 className="sm:text-2xl text-2xl block text-center font-heading text-base">Team Members</h1>
                <div className="grid grid-cols-2 w-full mt-12 md:gap-8 gap-2">
                    <div className="sm:text-xl text-sm text-main font-minecraftia">1.) Utkarsh</div>
                    {isLeader == 1 && isAdmin == 1 &&
                    <div className="sm:text-lg text-lg sm:ml-52 ml-24 text-base text-sub "><FaCrown size={28} /></div>
                    }
                    <div className="sm:text-xl text-sm text-main font-minecraftia">2.) Sarthak</div>
                    {isLeader == 1 && 
                    <div className="sm:text-lg text-sm sm:ml-52 ml-24 text-base text-sub "><button>Kick</button></div>
                    }
                </div>
        </div>
        </div>
        
    </div>
    );
}