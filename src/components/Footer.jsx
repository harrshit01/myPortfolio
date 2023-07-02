import React, { useState } from 'react'
import {VscSend} from "react-icons/vsc";

import {CiTwitter, CiInstagram,CiLinkedin} from "react-icons/ci";
import { db } from '../firebase';
import { addDoc,collection } from 'firebase/firestore';
import { toast } from 'react-hot-toast';

const Footer = () => {
    const[email, setemail] =useState();
   const sendEmail= async()=>{
    try {
       
        await addDoc(collection(db, "People in Touch"),{email});
        setemail("");
        if(email===""){
            toast.error("Please Enter your email");
        }
        else{
            toast.success("Thanks for Connecting");
        }
        
    } catch (error) {
        console.log(error);
        toast.error("Something's Wrong. Please try again");
        
    }
   }
    
  return (
    <footer>
        <div>
        <div className='getintouch'>
            <h3>Get in touch</h3>
            <input id="email" type="email" placeholder='Your Email' value={email} onChange={(e)=>setemail(e.target.value)}/>
            <button onClick={sendEmail}><VscSend/></button>
        </div>
        <div className='letschat'>
            <h3>Let's chat</h3>
            <div>
            <a href="https://www.instagram.com/_harrshit_/">
                <CiInstagram/>
            </a>
            <a href="https://www.twitter.com" target='blank'>
                <CiTwitter/>
            </a>
            <a href="https://www.linkedin.com/in/harshit-tyagi-67b75424a/" target='blank'>
                <CiLinkedin/>
            </a>
            </div>
        </div>
        </div>
        <aside>
            <p>&copy; 2023 Personal Portfolio , All Rights Reserved</p>
            <a href="/">Terms & Condition</a>
            <a href="/">Privacy Policy</a>
        </aside>
        
    </footer>
  )
}

export default Footer