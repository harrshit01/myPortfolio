import React from 'react';
import {RiToolsFill} from "react-icons/ri";
import {MdOutlineWebAsset} from "react-icons/md";
import {PiDatabaseDuotone} from "react-icons/pi"


const Skill = () => {
  return (
    <div className='skillcontainer' id='skill'>
          <h2>Skills</h2>
        <div className='skills'>
        <div>
            <h3>
              <MdOutlineWebAsset/>
              Front-End Technologies 
            </h3>
            <p>HTML, Cascading Style Sheets, Javascript, ReactJS, Redux <br/> ChakraUI, saas, Tailwind css, BootStrap</p>
        </div>
        <div>
            <h3>
            <PiDatabaseDuotone/>
              Back-End Technologies</h3>
            <p>Node.JS, Firebase </p>
        </div>
        <div>
            <h3>
              <RiToolsFill/>
              Tools 
            </h3>
            <p>Git, Github, vercel</p>
        </div>
        </div>
    </div>
  )
}

export default Skill