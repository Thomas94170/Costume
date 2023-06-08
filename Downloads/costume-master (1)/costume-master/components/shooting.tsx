import React from "react";
import Image from 'next/image'
import armure from '../images/armure.jpg'
import dia from '../images/dia-de-los-muertos.jpg'
import kimono from '../images/kimono.jpg'
import samurai from '../images/samurai.jpg'
import tailor from '../images/tailor.jpg'
import styles from './page.module.css'


export default function Shooting(){
    return(
        <>
        <section className="shooting">
          <div className=" ">
            
          
          <div className="parent">
            <div className="div1 img"> 
            <Image 
  style={{
    backgroundSize: 'cover',
    width: '100%',
    height: '100%'
  }} 
  src={tailor}
  alt ='cover' 
/>
            </div>
            <div className="div2 img"> 
          
            </div>
            <div className="div3 img">
          

            </div>
            <div className="div4 img">
           
            </div>
            <div className="div5 img"> 
           
            </div>
          </div>
          </div>
        </section>
        </>
    )
}

