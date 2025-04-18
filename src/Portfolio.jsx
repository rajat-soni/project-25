import myProfile from './assets/profile.jpg';
import myProfile1 from './assets/Kate-Sanders.jpg';
import myProfile2 from './assets/James-Lee.jpg';
import myProfile4 from './assets/summ-1.jpg';

import workImage from './assets/management-1.png';
import workImage2 from './assets/management-2.jpg';
import workImage3 from './assets/management-3.png';
import workImage4 from './assets/management-4.png';
import  FeatureProject  from  './FeatureProject.jsx'
import  ProfileFooter  from  './ProfileFooter.jsx'
import  Blog  from  './Blog.jsx'
import  Feature  from  './Feature.jsx'
import  Skill  from  './Skill.jsx'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faJsSquare, faReact, faNode, faNpm, faPhp, faHtml5, faCss3Alt, faLaravel, faGitSquare } from '@fortawesome/free-brands-svg-icons';

// import { faDatabase } from '@fortawesome/free-solid-svg-icons'

import { useState,useEffect } from 'react';
import './Navbar.css';

import { Carousel, Button } from 'react-bootstrap';



const Portfolio = () => {


   

   const [activeIndex, setActiveIndex] = useState(0);
   const totalSlides = 3; // Adjust based on the number of slides you have
 
   // Function to change the slide index
   const handleSelect = (selectedIndex) => {
     setActiveIndex(selectedIndex);
   };
 
   // Auto slide functionality
   useEffect(() => {
     const interval = setInterval(() => {
       setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
     }, 3000); // 3 seconds interval
 
     // Cleanup interval when the component unmounts
     return () => clearInterval(interval);
   }, []);
 

   

      const [isHovered, setIsHovered] = useState(false);
    
      const cardStyleOne = {
         borderLeft: 'none',
         borderTop: '1px',
borderRight: 'none',
borderBottom: 'none',
borderRadius: '3px',
        maxWidth: '946px',
        height: '290px',
        backgroundColor: isHovered ? '#fff ' : '#fff',
        transition: 'transform 0.3s, box-shadow 0.3s', // Smooth transition for hover effect
        transform: isHovered ? 'scale(1.00.1)' : 'scale(1)', // Scale up on hover
        boxShadow: isHovered ? 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px'
        : 'none', // Add shadow on hover
      };



//       const cardStyleListOne = {
//          borderLeft: 'none',
//          borderTop: '1px',
// borderRight: 'none',
// borderBottom: 'none',
// borderRadius: '3px',
//         maxWidth: '946px',
//         height: '200px',
//         backgroundColor: isHovered ? '#fff ' : '#ffff',
//         transition: 'transform 0.3s, box-shadow 0.3s', // Smooth transition for hover effect
//         transform: isHovered ? 'scale(1.00.1)' : 'scale(1)', // Scale up on hover
//         boxShadow: isHovered ? 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px'
//         : 'none', // Add shadow on hover
//       };
   
//       const lastestBlogCardStyle = {
//          borderLeft: 'none',
//          borderTop: '1px',
// borderRight: 'none',
// borderBottom: 'none',
// borderRadius: '3px',
//         maxWidth: '946px',
//         height: '290px',
//         backgroundColor: isHovered ? '#fff ' : '#f98866',
//         transition: 'transform 0.3s, box-shadow 0.3s', // Smooth transition for hover effect
//         transform: isHovered ? 'scale(1.00.1)' : 'scale(1)', // Scale up on hover
//         boxShadow: isHovered ? 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px'
//         : 'none', // Add shadow on hover
//       };
   



// const style = {
// fontSize: '35px', 
// color: '#1995ad',        // Padding inside the box
// // Font size                                                       
// borderRadius: '8px',           // Border radius 
// marginTop: '10px',             // Margin at the top
// marginBottom: '10px',          // Margin at the bottom
// Align: 'center',           // Center text
// // Text color
// };
// const [hovered, setHovered] = useState(false);
// const handleMouseEnter = () => {
// setHovered(true);
// };
// const handleMouseLeave = () => {
// setHovered(false);
// };


// const myCardStyle = {
// border: '0px solid #149ddd',
// borderLeft: 'none',
// borderRadius: '0px',
// transition: '0.6s',
// backgroundColor: hovered ? '#fff ' : '#fff',
// boxShadow: hovered
// ? 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px'
// : 'none',
// paddingBottom: '10px',
// margin: 'px',
// //backgroundColor: '#E8F9FF',
// };




// const heading = {
//    color:'#1995ad',
// }


// const hrStyle = {
// border: 'none',
// height: '3px',
// backgroundColor: '#1995ad', // Change the color to match the theme
// margin: '10px 0', // Add margin to space out the line
// width: hovered ? '100%' : '0', // Animate the width from 0 to 100%
// transition: 'width 0.6s ease', // Add transition on width change
// };

const hstyle ={
    color: '#1995ad',
}

// const hrStyleE = {
//    border: 'none',
//    height: '3px',
//    backgroundColor: '#000', // Change the color to match the theme
//    margin: '10px 0', // Add margin to space out the line
//    width: hovered ? '100%' : '0', // Animate the width from 0 to 100%
//    transition: 'width 0.6s ease', // Add transition on width change
   
//    };


   

return ( 
<div style ={{backgroundColor:'#f1f1f2'}}>
   <div className="container-fluid" >
      <div className='row m-3' style={{backgroundColor:'',padding:'20px'}} >
         
            
               <div className="col-md-3 col-sm-12 col-xl-3 col-lg-3">
                  <img src= {myProfile} alt="profile" style={{width:'100%'}}/>
               </div>
               <div className="col-md-9 col-sm-12 col-xl-9 col-lg-9">
                  <h1 style ={hstyle} >Rajat Soni</h1>
                  <p>Juniour Web Developer </p>
                  <p><i>I'm a full-stack developer specialised in frontend and backend development for complex scalable web apps. I write about web development on my blog and regularly speak at various web conferences and meetups. Want to know how I may help your project? Check out my project case studies and resume.</i></p>
                  <button className="btn btn-primary">Download Resume</button>        <button className="btn btn-dark">Hire Me</button>
               </div>
            </div>
            <div className='row m-3' style={{backgroundColor:'',padding:'20px', marginTop: '300px'}} >
               <div className="col-md-12 col-sm-12 col-xl-12 col-lg-12" style={{backgroundColor:'',padding:'20px', marginTop: '40px'}}>
                  <h1 style ={hstyle}>What I do</h1>
                  <p>Juniour Web Developer </p>
                  <p><i>I have more than 5 years' experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my online resume and project portfolio.</i></p>
               </div>
            </div>
        
         <Skill />
                            
         <div className="col-md-12 col-sm-12 col-xl-12 col-lg-12" style={{backgroundColor:'#',padding:'20px', marginTop: '40px'}}>
            <h1 style ={hstyle}></h1>

            <FeatureProject />
                        
                           <div  style={{ backgroundColor: '#a1d6e2', padding: '20px' }}>

                                 <div className="row m-2 mt-5 mb-5 text-center pt-5 pb-5" >
                                 <h1 className="mt-4 mb-4 pt-3 pb-3 text-left" style ={hstyle}>Testimonials 
                                 </h1>
                                 <div className="col-12 col-md-12 col-xl-12 col-lg-12">
                                 
                                       <Carousel activeIndex={activeIndex} onSelect={handleSelect} interval={null}>
                                          <Carousel.Item>
                                             <div className="d-flex justify-content-center">
                                                <div className="card w-100" style={{  maxWidth: '906px',borderRadius: '0px',...cardStyleOne }}>
                                                   <div className="card-body">
                                                   <h5 className="card-title" style ={hstyle}>James Lee</h5>
                                                   <p className="card-text" style={{fontSize:'13px',}}>I had the pleasure of working with James Lee on multiple projects, and his ability to manage complex tasks with precision and insight is unparalleled. His dedication and proactive approach to problem-solving make him an invaluable team member. James is a strong communicator and always brings fresh ideas to the table. I highly recommend him for any project or leadership role. His professionalism and work ethic are second to none."
                                                   This is an amazing service! I highly recommend it to anyone looking for a professional solution. – James Lee"
                                                   </p>
                                                   <div className="row col-md-7 d-flex align-items-center mt-5">
                                                      <div className="col-md-7 d-flex align-items-center">
  <img src={myProfile2} style={{ width: '120px', borderRadius: '0px', marginRight: '10px' }} alt="Profile" />
  <div>
    <p style={{ margin: 0 }}>James Lee</p>
    <span style={{ fontSize: '11px', display: 'block' }}>– Software Team Manager</span>
  </div>
</div>
                                                      <div className="col-md-5"></div>
                                                 </div>
                                                
                                                   </div>
                                                </div>
                                             </div>
                                          </Carousel.Item>
                                          <Carousel.Item>
                                            
                                                {/* <div className="card  d-flex justify-content-center" style={{   maxWidth: '906px',borderRadius: '0px',...cardStyleOne }}>
                                                   <div className="card-body">
                                                      <h5 className="card-title" style ={hstyle}>Samuel Reye</h5>
                                                      <p className="card-text" style={{fontSize:'13px',}}>"I have had the privilege of working with Samuel Reye on several initiatives, and his expertise is truly outstanding. Samuel’s ability to think strategically while maintaining attention to detail has made a significant impact on our team’s success. He is highly collaborative, always willing to lend his knowledge, and approaches challenges with a positive attitude. Samuel consistently delivers high-quality work and is a true asset to any team. I would not hesitate to recommend him for any professional opportunity."
                                                      This is an amazing service! I highly recommend it to anyone looking for a professional solution. – Samuel Reye"
                                                      </p>
                                                      <div className="row col-md-7 d-flex align-items-center mt-5">
                                                      <div className="col-md-7 d-flex align-items-center">
  <img src={myProfile4} style={{ width: '120px', borderRadius: '0px', marginRight: '10px' }} alt="Profile" />
  <div>
    <p style={{ margin: 0 }}>Samuel Reye</p>
    <span style={{ fontSize: '11px', display: 'block' }}>– Product Manager</span>
  </div>
</div>
                                                      <div className="col-md-5"></div>
                                                 </div>
                                                   </div>
                                                
                                                </div>
                                                */}

                                                <div className="d-flex justify-content-center">
                                                   <div className="card" style={{  maxWidth: '906px',borderRadius: '0px',...cardStyleOne }}>
                                                      <div className="card-body">
                                                         <h5 className="card-title" style ={hstyle}>Samuel Reye                    </h5>
                                                         <p className="card-text" style={{fontSize:'13px',}}>"I have had the privilege of working with Samuel Reye on several initiatives, and his expertise is truly outstanding. Samuel’s ability to think strategically while maintaining attention to detail has made a significant impact on our team’s success. He is highly collaborative, always willing to lend his knowledge, and approaches challenges with a positive attitude. Samuel consistently delivers high-quality work and is a true asset to any team. I would not hesitate to recommend him for any professional opportunity."
                                                         This is an amazing service! I highly recommend it to anyone looking for a professional solution. – Samuel Reye"
                                                         </p>
                                                         <div className="row col-md-7 d-flex align-items-center mt-5">
                                                      <div className="col-md-7 d-flex align-items-center">
  <img src={myProfile4} style={{ width: '120px', borderRadius: '0px', marginRight: '10px' }} alt="Profile" />
  <div>
    <p style={{ margin: 0 }}> - Kate Sanders  </p>
    <span style={{ fontSize: '11px', display: 'block' }}>– Product Manager</span>
  </div>
</div>
                                                         
                                                      <div className="col-md-5"></div>
                                                 </div>
                                                      </div>
                                                   </div>
                                                </div>
                                       
                                                
                                               
                                       
                                             
                                          </Carousel.Item>
                                          <Carousel.Item>
                                                <div className="d-flex justify-content-center">
                                                   <div className="card" style={{  maxWidth: '906px',borderRadius: '0px',...cardStyleOne }}>
                                                      <div className="card-body">
                                                         <h5 className="card-title" style ={hstyle}>Kate Sanders                    </h5>
                                                         <p className="card-text" style={{fontSize:'13px',}}>"Working with Kate Sanders has been an absolute pleasure. Her creativity, dedication, and sharp problem-solving skills have been crucial in driving our projects forward. Kate has an incredible ability to collaborate with diverse teams and consistently brings innovative solutions to the table. Her professionalism and commitment to excellence are inspiring, and she’s always a source of positive energy. I highly recommend Kate for any opportunity that requires a skilled and reliable team member."
                                                         I highly recommend it to anyone looking for a professional solution. – Samuel Reye
                                                          - Kate Sanders"
                                                         </p>
                                                         <div className="row col-md-7 d-flex align-items-center mt-5">
                                                      <div className="col-md-7 d-flex align-items-center">
  <img src={myProfile1} style={{ width: '120px', borderRadius: '0px', marginRight: '10px' }} alt="Profile" />
  <div>
    <p style={{ margin: 0 }}> - Kate Sanders  </p>
    <span style={{ fontSize: '11px', display: 'block' }}>– Seniour Product Manager</span>
  </div>
</div>
                                                         
                                                      <div className="col-md-5"></div>
                                                 </div>
                                                      </div>
                                                   </div>
                                                </div>
                                          </Carousel.Item>
                                       </Carousel>

                                 
                                       <div className="carousel-radio-buttons d-flex justify-content-center mt-3">
                                          {[...Array(totalSlides)].map((_, index) => (
                                             <div className="form-check mx-2" key={index}>
                                                <input
                                                   className="form-check-input"
                                                   type="radio"
                                                   name="carouselRadio"
                                                   id={`radio-${index}`}
                                                   checked={activeIndex === index}
                                                   onChange={() => setActiveIndex(index)}
                                                />
                                                <label className="form-check-label" htmlFor={`radio-${index}`}></label>
                                             </div>
                                          ))}
                                       </div>
                                 </div>
                                 
                                 </div>
                                 
                                 
                              </div>
                             
                            

                                    
                                  
                                    </div>
                         
                           
                          <Blog />


                                

                           
                           </div>  



        <Feature />

                                 

                           <div className ="container  mt-5 mb-5 shadow"  style={{backgroundColor:'#fff', marginTop:'200px'}}>
                                       <h1 className = "mt-5 mb-5  text-center pt-5" style ={hstyle}>Great clients I've worked with</h1>
                                    <div className="row p-4">
                                     <div className="col-md-3 col-12 col-lg-3 col-xl-3 ">
                                       <img src ={workImage}  style={{width:'200px'}} />
                                      
                                      </div>
                                     <div className="col-md-3 col-12 col-lg-3 col-xl-3">
                                     <img src ={workImage2}  style={{width:'200px'}} />
                                   
                                     </div>
                                     <div className="col-md-3 col-12 col-lg-3 col-xl-3">
                                     <img src ={workImage3} style={{width:'200px'}}  />
                                     
                                     </div>
                                     <div className="col-md-3 col-12 col-lg-3 col-xl-3">
                                     <img src ={workImage4}  style={{width:'200px'}}/> 
                                     </div>
                                 </div> 
                                 </div>
                                 <ProfileFooter />

                           </div>
                           

                          




  )
}
export default Portfolio;