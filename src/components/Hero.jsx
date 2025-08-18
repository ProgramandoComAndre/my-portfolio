import React from 'react'
import { BsLinkedin, BsGithub, BsYoutube  } from 'react-icons/bs'
import { FaOrcid } from 'react-icons/fa'
import HeroPic from "../assets/andre.jpg"
const Hero = () => {
  return (
    <section className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
        <div className='lg-w-1/3 ssm:w-fit'>
            <p className="text-4xl mb-5 text-slate-300">I'm</p>
            <h1 className='text-6xl'>André Teixeira</h1>
            <hr/>
            <p className="mt-10 text-xl text-slate-300 font-sans">
                A Junior Software Developer
            </p>
        </div>
        <div className='w-1/3 items-cemter ssm:w-fit'>
            <img src={HeroPic} alt="Andre Teixeira"width={250} height={250} className='rounded-full w-full border-8 border-white'></img>
        </div>
        <div className='w-1/3 ssm:w-fit'>
            <p className='text-4xl mb-4'>About me</p>
            <p className='text-slate-300'>Let's build quality in programming and design with our services</p>
            <button className="bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white">Show more...</button>
            <div className='flex mt-5 space-x-4 cursor-pointer'>
                <BsLinkedin size={40} className='border-4 hover:border-indigo-800 rounded-full'></BsLinkedin>
                <BsYoutube size={40} className='border-4 hover:border-indigo-800 rounded-full'></BsYoutube>
                <BsGithub size={40} className='border-4 hover:border-indigo-800 rounded-full'></BsGithub>
            </div>
        </div>
    </section>
  )
}

export default Hero
