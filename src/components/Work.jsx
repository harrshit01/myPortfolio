import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assets/data.json";
// import { AiOutlineSisternode } from "react-icons/ai";

const Work = () => {
  return (
    <div id="work">
        <h2>Work</h2>
        <section>
            
            <Carousel
             showArrows={false}
             showIndicators={false}
             showStatus={false}
             showThumbs={false}
             interval={2000}
             infiniteLoop={true}
             autoPlay={true}>

            {
                data.projects.map((i)=>(
                    <div key={i.title} className="workitem">

                    
                    <img src={i.imgSrc} alt={i.title} />
                    <aside>
                        <h3>{i.title}</h3>
                        <p>{i.description}</p>
                        <a href={i.url} target="blank">View Demo</a>
                    </aside>
                    </div>
                    
                ))
            }
            </Carousel>
            
        </section>
    </div>
  )
}

export default Work