import AboutComponent from '@/components/about/AboutComponent'
import React from 'react'

const About = () => {
  return (
    <div className="min-h-[70vh] pt-28 lg:min-h-[85vh] ">
      <AboutComponent />
      {/* <div className="h-full w-5/6 mx-auto flex justify-center  items-center ">
       <h2 className='headingTwo'>Doing an update...</h2>
      </div> */}
    </div>
  );
}

export default About