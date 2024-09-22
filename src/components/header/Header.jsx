
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import creatorPic from '../../assets/creator-pic.jpeg'

import React from 'react'

function Header() {

    
  const[isMenuClicked,setMenuClicked] = useState(false);

  const [currentTab ,setCurrentTap] = useState("home");


  const handleTabClick = (tab)=>{
    setCurrentTap((va)=>tab);
    setMenuClicked((state)=>!state);
  }
  const handleMenuClick = ()=>{

      setMenuClicked((state)=>!state);
  }
  return (
    <>
     {
        isMenuClicked ?
            <GiHamburgerMenu className="fixed right-5 top-5 z-[100] scale-150 lg:hidden cursor-pointer text-white" onClick={handleMenuClick} />
            : <ImCross className="fixed right-5 top-5 z-[100] scale-150 lg:hidden cursor-pointer text-white" onClick={handleMenuClick} />
    }
    <header className={`z-200 w-[90%] px-10 lg:w-1/4 h-screen absolute ${isMenuClicked ? "-left-full" : "left-0 z-40 sticky "} duration-500 lg:sticky top-0 bg-gray-800`}>
    
    <div className="flex w-full h-full flex-col items-center pt-10 space-y-6">
    <div className="border-8 border-yellow-300 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg overflow-hidden transition-transform transform hover:scale-105">
<img 
src={creatorPic} 
alt="Creator Pic" 
className="w-full h-full object-cover rounded-full border-4 border-white shadow-md" 
/>
</div>

        <h1 className="text-3xl font-semibold text-white">Gaurav</h1>
        <h2 className="text-xl font-medium text-gray-400">React and Flutter Developer</h2>

        <div className="flex flex-col w-full space-y-3 px-10 mt-5">
            <a href='#home' className={`flex justify-center  px-6 py-2 bg-gray-700 text-white rounded-3xl hover:bg-indigo-700 transition duration-300 ${currentTab=="home"?"bg-indigo-500":""}`} onClick={()=>handleTabClick("home")}>Home</a>
            <a href="#work"className={`flex justify-center  px-6 py-2 bg-gray-700 text-white rounded-3xl hover:bg-indigo-700 transition duration-300 ${currentTab=="work"?"bg-indigo-500":""}`} onClick={()=>handleTabClick("work")}>Work</a>
            <a href="#skill"className={`flex justify-center  px-6 py-2 bg-gray-700 text-white rounded-3xl hover:bg-indigo-700 transition duration-300 ${currentTab=="skill"?"bg-indigo-500":""}`} onClick={()=>handleTabClick("skill")}>Skill</a>
            <a href="#education" className={`flex justify-center  px-6 py-2 bg-gray-700 text-white rounded-3xl hover:bg-indigo-700 transition duration-300 ${currentTab=="education"?"bg-indigo-500":""}`} onClick={()=>handleTabClick("education")}>Education</a>

            <a href="#contact" className={`flex justify-center  px-6 py-2 bg-gray-700 text-white rounded-3xl hover:bg-indigo-700 transition duration-300 ${currentTab=="contact"?"bg-indigo-500":""}`} onClick={()=>handleTabClick("contact")}>Contact</a>
        </div>
    </div>
</header>
    </>
    
  )
}

export default Header