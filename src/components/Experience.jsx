import React from 'react';
import data from "../assets/data.json";

const Experience = () => {
  return (
    <div id='experience' className='experience'>
        <div className='timeline'>{
            data.projects.map((item,index)=>(

                <TimelineCard 
                key={item.title} 
                title={item.title}
                technologies={item.technologies}
                index={index}


                />
            ))
        }
        </div>

    </div>
  )
}
const TimelineCard=({title,technologies,index})=>(
    <div className={`timelineitem ${index%2===0 ? "timelineleft" : "timelineright"}`}>
        <h3>{title}</h3>
        <p>{technologies}</p>
    </div>
)


export default Experience;