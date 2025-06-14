import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";


export const Spin = ({ children, width = "100%", height = "100%" }) => {
     const ref = useRef(null);
     const isInView = useInView(ref, {margin: "0px 0px -50px 0px"});

     useEffect(() => {
          console.log(isInView);
     }, [isInView]);

     return (
          <div ref={ref} /*style={{position: "relative", width, height, overflow: "hidden"}}*/>
               <motion.div
                    //style={{position: "relative", width, height, overflow: "hidden"}}
                    variants={{
                         hidden: {opacity: 0, scale: 0.5}, 
                         visible: {opacity: 1, scale: 1}}}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: 0.15}}
               >{children}</motion.div>
          </div>
     );
}