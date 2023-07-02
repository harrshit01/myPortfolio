import React, { useState } from 'react';
import {CiMenuFries, CiMail, CiPhone} from "react-icons/ci"
import dp from "../assets/dp.jpeg";
import {AiOutlineClose} from "react-icons/ai";
import {CiMenuBurger} from "react-icons/ci";



const Header = () => {
  const [showinfo, setshowinfo]= useState(false);
  const [showmenuitem, setshowmenuitem]= useState(false);

  

  return (
    <>
    <nav className='header'>
        <button onClick={()=>setshowmenuitem(!showmenuitem)} id='menu'>
        <CiMenuBurger/>
        </button>
        <h2>ॐ</h2>
        <div>
          <a href={"#home"}>Home</a>
      <a href={"#work"}>Work</a>
          <a href={"#services"}>Services</a>
          <a href={"#skill"}>Skills</a>
          <a href={"#contact"}>Contact</a>


            

        </div>
        <CiMenuFries 
        className={showinfo ? "display" :""}
        onClick={()=>setshowinfo(true)}/>
        {/* <a href="mailto:hrsttyagi@gmail.com">Email</a> */}
    </nav>


    <div className={showinfo? "info display": "info"} >
    <AiOutlineClose  onClick={()=>setshowinfo(false)}/>
      <img src={dp} alt="profile of developer" />
      <h3>Harshit Tyagi</h3>
      <a href="mailto:hrsttyagi@gmail.com">Email</a>
      <div>


      <p>
      <CiMail/>
       hrsttyagi@gmail.com
      </p>
      <p>
        <CiPhone/>
        8954216844
      </p>
      </div>
            
      
     

    </div>
    
      <div className={showmenuitem ? "showmenu menuslidedown":"showmenu"}>
      <a onClick={()=>setshowmenuitem(false)} href={"#home"}>Home</a>
      <a onClick={()=>setshowmenuitem(false)} href={"#work"}>Work</a>
          <a onClick={()=>setshowmenuitem(false)} href={"#services"}>Services</a>
          <a onClick={()=>setshowmenuitem(false)} href={"#skill"}>Skills</a>
          <a onClick={()=>setshowmenuitem(false)} href={"#contact"}>Contact</a>


      </div>
    
    </>
  )
}

export default Header