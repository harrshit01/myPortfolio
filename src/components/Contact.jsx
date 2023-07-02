import React, { useState } from 'react';
import cp from "../assets/cp.png";
import toast from "react-hot-toast";

import { db } from '../firebase';
import {addDoc,collection} from "firebase/firestore";

const Contact = () => {
  const [name , setname]= useState();
  const [email , setemail]= useState();
  const [message , setmessage]= useState();
  const [disablebtn, setdisablebtn]= useState(false);

  const submithandler =async (e)=>{
    e.preventDefault();
    setdisablebtn(true);
    // console.log(name , email, message);
    try {
      await addDoc(collection(db,"users"),{name,email,message});
    toast.success("Message Sent");

      setemail("");
      setmessage("");
      setname("");
      

    } catch (error) {
      toast.error("Sorry there was some issue , Please try again");
      console.log(error);
      
    }
    setdisablebtn(false);
    

  };
  return (
    <div className="contactpage" id='contact'>
        <section>
          <form onSubmit={submithandler}>
           <h2>Contact me</h2>

           <input type="text" placeholder='Your name' required 
           value={name}
           onChange={(e)=>setname(e.target.value)}
           />

           <input type="email" placeholder='Your email' required
           value={email}
           onChange={(e)=>setemail(e.target.value)}/>

           <input type="text" placeholder='message' required
           value={message}
           onChange={(e)=>setmessage(e.target.value)}/>

           <button className={disablebtn? "disablebtn":""} type='submit'>Send</button>
           </form>

        </section>
        <aside>
            <img src={cp} alt="graphics for contact page" />
        </aside>

    </div>
  )
}

export default Contact;