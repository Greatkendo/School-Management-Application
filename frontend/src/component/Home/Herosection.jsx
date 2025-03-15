'use client'
// import React from 'react';
// import { Carousel } from 'antd';
// const contentStyle = {
//   margin: 0,
//   height: '40rem',
//   color: '#fff',
//   lineHeight: '40rem',
//   textAlign: 'center',
//   background: '#364d79',
// };
// const HeroSection = () => {
//   const onChange = (currentSlide) => {
//     console.log(currentSlide);
//   };
//   return (
//     <Carousel afterChange={onChange}>
//       <div>
//         <img src="frontend/public/Pic1.jpg" alt="" />
        
//         <h3 style={contentStyle}>1</h3>
//       </div>

//       <div>
//         <img src="https://media.istockphoto.com/id/2031588835/photo/high-school-students-and-teacher-in-computer-lab.jpg?s=612x612&w=0&k=20&c=D_75Oan3Bx6tRa4spty0MOvh4ANUleENXYRiOo1KsFY=  " alt="" />
//         <h3 style={contentStyle}>2</h3>
//       </div>

//       <div>
//         <img src="https://gsis-r2.parallel-technology.com/prod/School-Buses-Banner_iIyDhSJBbM.jpeg" alt="" />
//         <h3 style={contentStyle}>3</h3>
//       </div>

//       <div>
//          <img src="https://gsis-r2.parallel-technology.com/prod/School-Buses-Banner_iIyDhSJBbM.jpeg" alt="" />
//         <h3 style={contentStyle}>4</h3>
//       </div>
//     </Carousel>
//   );
// };
// export default HeroSection;
import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  height: '80vh',
  color: '#fff',
  lineHeight: '80vh',
  textAlign: 'center',
  background: '#364d79',
};
const HeroSection = () => (
  <Carousel autoplay={{
      dotDuration: true,
    }}
    autoplaySpeed={1000}
>
    <div>
      <img className='h-[80vh] w-full ' src="/pic1.jpg" alt="" />
    </div>
    <div>
      <img src="https://media.istockphoto.com/id/2031588835/photo/high-school-students-and-teacher-in-computer-lab.jpg?s=612x612&w=0&k=20&c=D_75Oan3Bx6tRa4spty0MOvh4ANUleENXYRiOo1KsFY=" alt="" />
    </div>
    <div>
      <img src="https://gsis-r2.parallel-technology.com/prod/School-Buses-Banner_iIyDhSJBbM.jpeg" alt="" />
    </div>
    <div>
      <img src="https://gsis-r2.parallel-technology.com/prod/School-Buses-Banner_iIyDhSJBbM.jpeg" alt="" />
    </div>
  </Carousel>
);
export default HeroSection;