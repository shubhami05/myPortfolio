import React from 'react';
import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion';
import {styles} from '../style';
import { services } from '../constants';
import {fadeIn,textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => (
 <Tilt className='xs:w-[250px] w-full'>
  <motion.div
  variants={fadeIn("right","spring",index*0.5,0.75)}
  className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
    <div
    option={{
      max:45,scale:1,speed:450,
    }}
    className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
      <img
      src={icon}
      alt={title}
      className='text-white text-[20px] font-bold text-center'/>
      <h3 className='text-white text-[20px] font-bold text-center'>
        {title}
      </h3>
    </div>
  </motion.div>
 </Tilt>
)
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Introduction</h2>
        <h3 className={styles.sectionSubText } style={{fontSize:'26px'}}> Overview</h3>
      </motion.div>
      <motion.p
        variants={fadeIn("","",0.1,1)}
        className='mt-4 text-secondary text-justify text-[17px] max-w-3xl'
      >
        I am a skilled software developer with experience in TypeScript and JavaScript, and expertise in framework like React, Node.js and Three.js. I'm quick learner and collaborate closely with clients to create efficient, scalable and user-friendly solutions that solve real-world problems. Let's work together tobring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index)=>(
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About,"about");