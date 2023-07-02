import React from 'react';
import {motion} from "framer-motion";
import Typewriter  from 'typewriter-effect';
import {BsArrowUpRight ,BsChevronDown} from "react-icons/bs";


import {CiTwitter, CiInstagram,CiLinkedin,CiMail,CiPhone} from "react-icons/ci";
import {PiDotsThreeVerticalLight, PiGithubLogo} from "react-icons/pi";


const Home = () => {
    const animations = {
        h1: {
          initial: {
            x: "-100%",
            opacity: 0,
          },
          whileInView: {
            x: 0,
            opacity: 1,
          },
        },
        button: {
          initial: {
            y: "-100%",
            opacity: 0,
          },
          whileInView: {
            y: 0,
            opacity: 1,
          },
        },
      };
  return (
    <>
   
    <div id ='home'className="homecontainer">

   
    
    <div className='home'>
        <motion.h1 {...animations.h1}>
            <b>Hello.</b>
            <br/>
             My name is <strong>Harshit Tyagi</strong>  </motion.h1>
        <motion.h3>I am a Front-End <strong>Web Developer  </strong></motion.h3>

        <Typewriter options={{
            strings:["A Designer", "A developer", "A Creator"],
            loop: true,
            autoStart: true,
            cursor: "",
            wrapperClassName: "typewriter"
        }}
        />

        <motion.div {...animations.button}className='btns'>   
            <a href="mailto:hrsttyagi@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </motion.div>
          <div className='links'>

<PiDotsThreeVerticalLight/>

<PiGithubLogo/>

<CiLinkedin/>



<CiInstagram/>
<CiTwitter/>
<PiDotsThreeVerticalLight/>

</div>
        
        <div className="contactinfo">
            <h3>Contact
            
            </h3>
            <p>
              <CiMail/>
              hrsttyagi@gmail.com</p>
            <p>
              <CiPhone/>
              8954216844</p>
        </div>
    <BsChevronDown className="down"/>
   
  

    </div>
    </div>
    </>
  )
}

export default Home