import React from "react";
import { motion } from "framer-motion";
import { AiFillIeCircle, AiFillWindows } from "react-icons/ai";
import { SiAltiumdesigner} from "react-icons/si"
const Services = () => {
    const animations={
        whileInView:{
            x:0,
            y:0,
            opacity:1
        },
        one:{
            x: "-100%" ,
            opacity: 0
        },
        two:{
            y:"-100%",
            opacity:0
        },
        three:{
            y:"-100%" ,
            opacity:0   
        },
        four:{
            x:"100%",
            opacity:0
        }
    }
  return (
    <div id="services">
    <h2>Services</h2>
    <section>
      <motion.div
        className="serviceBox1"
        whileInView={animations.whileInView}
        // initial={animations.one}
      >
        <h3>1+</h3>
        <p>Years Experience</p>
      </motion.div>
      <motion.div
        className="serviceBox2"
        whileInView={animations.whileInView}
        // initial={animations.two}
      >
        <AiFillIeCircle />
        <span>Web Development</span>
      </motion.div>
      <motion.div
        className="serviceBox3"
        whileInView={animations.whileInView}
        // initial={animations.three}
        // transition={{
        //     delay:0.1
        // }}
        
      >
        <SiAltiumdesigner />
        <span>Web Designing</span>
      </motion.div>
      <motion.div
        className="serviceBox4"
        whileInView={animations.whileInView}
        // initial={animations.four}
      >
        <AiFillWindows />
        <span>Desktop Development</span>
      </motion.div>
    </section>
  </div>
  )
}

export default Services