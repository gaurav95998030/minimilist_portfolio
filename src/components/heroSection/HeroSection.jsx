
import React, { useState } from 'react'
import { MdAttachEmail } from "react-icons/md";
import educationData from '../../data/educationData';
import workData from '../../data/workData';
import { FaUserAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaGoogleScholar } from "react-icons/fa6";
import { FaFileCode } from "react-icons/fa6";
import Header from '../header/Header';
import Skills from '../skills/Skills';
function HeroSection
    () {

    return (
        <section className=" w-full bg-gray-900 flex flex-col lg:flex-row">

            <Header />


            <main className='flex flex-col w-full  '>
                <section id='home' className=" w-full h-screen flex flex-col justify-center items-start px-10  bg-gray-900 text-white">
                    <h1 className="text-5xl  font-bold mb-2">Hello!</h1>

                    <h1 className="text-6xl font-extrabold mb-4">
                        I'm <span className="text-green-500">Gaurav</span>
                    </h1>

                    <p className="text-lg leading-relaxed max-w-3xl">
                        I'm a passionate <span className="text-green-400">Flutter</span> and
                        <span className="text-blue-400"> React</span> developer with a knack for crafting seamless, responsive, and visually appealing mobile and web applications.
                        Focused on delivering user-centric experiences, I blend creativity with cutting-edge technology to bring ideas to life. Whether it's cross-platform mobile
                        apps using Flutter or dynamic web interfaces with React, I’m committed to providing high-quality solutions that leave an impact. Let’s create something amazing together!
                    </p>

                    <div className='flex mt-10 gap-5 justify-center w-[200px] items-center bg-gray-600 py-4 rounded-3xl cursor-pointer hover:bg-gray-500'>
                        <a className='text-bold' href='https://www.linkedin.com/in/gaurav-kumar-451b9426a/' target='_blank'>About me</a>
                        <FaUserAlt />
                    </div>
                </section>

            
                <section id='work' className='  w-full min-h-[200px]  flex flex-col items-center bg-gray-900 text-white'>
                    <div className='border-b-2 pb-3 border-white w-[80%] flex justify-center mb-10'>
                        <h1 className="text-6xl font-extrabold mb-4">
                            My <span className="text-green-500"> Work</span>

                        </h1>
                    </div>
                    <div className='flex flex-wrap gap-5 justify-center'>
                        {workData.map((item) => {
                            return (
                                <div
                                    key={item.index}
                                    className='mb-10 flex flex-col gap-5 w-[300px] min-h-[250px] relative border-l-4 border-white bg-gray-800 p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300'
                                >
                                    <FaFileCode className='text-6xl absolute -left-7 -top-7 text-yellow-400 transition-transform transform hover:scale-110' />

                                    <h1 className='ml-10 text-xl font-bold text-white hover:text-yellow-300 transition-colors duration-200'>
                                        {item.title}
                                    </h1>

                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className='w-full h-auto rounded-lg transition-transform duration-200 transform hover:scale-105'
                                    />

                                    <a
                                        href={item.link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='mt-2 inline-block bg-yellow-400 text-gray-800 font-semibold py-2 px-4 rounded-lg text-center transition-transform duration-200 transform hover:scale-105'
                                    >
                                        Preview
                                    </a>
                                </div>
                            );
                        })}

                    </div>
                </section>

         
                <section id='skill' className=" w-full min-h-[400px] flex flex-col justify-center  items-center px-10  bg-gray-900 text-white">
                <div className='border-b-2 pb-3 border-white w-[80%] flex justify-center mb-10'>
                        <h1 className="text-6xl font-extrabold mb-4">
                            My <span className="text-green-500"> Skills</span>

                        </h1>

                    </div>

                   <Skills/>
                </section>


                
                <section id='education' className='  w-full min-h-screen  flex flex-col items-center bg-gray-900 text-white'>

                    <div className='border-b-2 pb-3 border-white w-[80%] flex justify-center mb-10'>
                        <h1 className="text-6xl font-extrabold mb-4">
                            My <span className="text-green-500">Education</span>

                        </h1>
                    </div>

                    <div className='flex flex-wrap gap-5 justify-center'>
                        {
                            educationData.map((item) => {
                                return <div key={item.index} className='mb-10 flex flex-col gap-5 w-[300px] min-h-[200px] relative border-l-4 border-white bg-gray-800 p-5 rounded-lg shadow-lg'>
                                    <FaGoogleScholar className='text-6xl absolute -left-7 -top-7 text-yellow-300' />
                                    <span className='ml-10 bg-gray-700 h-[40px] p-2 rounded-full text-center text-white font-semibold'>
                                        {item.time}
                                    </span>

                                    <h1 className='ml-10 text-xl font-bold text-white'>
                                        {item.educationTitle}
                                    </h1>

                                    <p className='ml-10 text-gray-300'>
                                        {item.description}                        </p>
                                </div>
                            })
                        }
                    </div>
                </section>
                


                <section id='contact' className='  w-full min-h-screen  flex flex-col items-center bg-gray-900 text-white px-10'>
                    <div className='border-b-2 pb-3 border-white w-[80%] flex justify-center mb-10'>
                        <h1 className="text-6xl font-extrabold mb-4">
                            Contact <span className="text-green-500"> Me</span>

                        </h1>
                    </div>

                    <main className='w-full h-full flex-col gap-10 md:flex-row flex-wrap items-center justify-center p-10 bg-gray-900'>
    <div className='flex flex-col w-full items-start p-6 rounded-lg shadow-lg'>
        <h1 className='text-2xl font-bold mb-5 text-white'>Contact Info:</h1>
        
        <div className='flex items-center gap-4 mb-4'>
            <FaPhoneAlt className='text-yellow-500 text-2xl' />
            <p className='text-white'>+91 8130182719</p>
        </div>
        
        <div className='flex items-center gap-4 mb-4'>
            <MdAttachEmail className='text-yellow-500 text-2xl' />
            <p className='text-white'>gauravkrana97@gmail.com</p>
        </div>
        
        <div className='flex items-center gap-4'>
            <IoLocation className='text-yellow-500 text-2xl' />
            <p className='text-white0'>Gurgaon, India</p>
        </div>
    </div>

    <form className='flex flex-col w-full gap-5  p-6 rounded-lg shadow-lg'>
        <input 
            type="text" 
            placeholder='Name' 
            className='w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-yellow-500 transition duration-200' 
        />
        <input 
            type="email" 
            placeholder='Email' 
            className='w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-yellow-500 transition duration-200' 
        />
        <textarea 
            name='msg' 
            placeholder='Your Message' 
            className='w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-yellow-500 transition duration-200 h-32'
        />
        <button 
            type="submit" 
            className='mt-4 bg-yellow-500 text-white font-semibold py-2 rounded-lg hover:bg-yellow-600 transition duration-200'
        >
            Send Message
        </button>
    </form>
</main>

                </section>

            </main>
        </section>
    )
}

export default HeroSection
