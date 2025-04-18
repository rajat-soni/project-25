import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faReact, faNode, faNpm, faPhp, faHtml5, faCss3Alt, faLaravel, faGitSquare } from '@fortawesome/free-brands-svg-icons';

import { faDatabase } from '@fortawesome/free-solid-svg-icons';

import { useState,useEffect } from 'react';

const Skill = () => {

    const [hovered, setHovered] = useState(false);
    const handleMouseEnter = () => {
    setHovered(true);
    };
    const handleMouseLeave = () => {
    setHovered(false);
    };




    
//       const cardStyleOne = {
//          borderLeft: 'none',
//          borderTop: '1px',
// borderRight: 'none',
// borderBottom: 'none',
// borderRadius: '3px',
//         maxWidth: '946px',
//         height: '290px',
//         backgroundColor: isHovered ? '#fff ' : '#fff',
//         transition: 'transform 0.3s, box-shadow 0.3s', // Smooth transition for hover effect
//         transform: isHovered ? 'scale(1.00.1)' : 'scale(1)', // Scale up on hover
//         boxShadow: isHovered ? 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px'
//         : 'none', // Add shadow on hover
//       };

    
    // const heading = {
    //     color:'#1995ad',
    //  }

    const hstyle ={
        color: '#1995ad',
    }

    const myCardStyle = {
        border: '0px solid #149ddd',
        borderLeft: 'none',
        borderRadius: '0px',
        transition: '0.6s',
        backgroundColor: hovered ? '#fff ' : '#fff',
        boxShadow: hovered
        ? 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px'
        : 'none',
        paddingBottom: '10px',
        margin: 'px',
        //backgroundColor: '#E8F9FF',
        };


        const hrStyle = {
            border: 'none',
            height: '3px',
            backgroundColor: '#1995ad', // Change the color to match the theme
            margin: '10px 0', // Add margin to space out the line
            width: hovered ? '100%' : '0', // Animate the width from 0 to 100%
            transition: 'width 0.6s ease', // Add transition on width change
            };
            

       

        const style = {
            fontSize: '35px', 
            color: '#1995ad',        // Padding inside the box
            // Font size                                                       
            borderRadius: '8px',           // Border radius 
            marginTop: '10px',             // Margin at the top
            marginBottom: '10px',          // Margin at the bottom
            Align: 'center',           // Center text
            // Text color
            };

            



  return (
    <div>

        <div  className= "container-fluid" style={{padding:'20px', backgroundColor:'#a1d6e2',}}>
        
                    <div className='row p-4  mt-4 mb-5 p-4 pb-4'  >
                       <h1 className="pt pb- mt-4 mb-4 " style ={hstyle}>Skills & Technologies 
                          </h1>
        
                       <div className="col-md-4 col-sm-12 col-xl-4 col-lg-4 p-3">
                          <div className ="card shadow"  style = {myCardStyle}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                             <div className='card-body'><FontAwesomeIcon icon={faJsSquare} style={style}   />
                                <p style ={hstyle}><i>Vanilla JavaScript</i></p>
                                <hr style={hrStyle} />
                                 <p><i>List skills/technologies here. You can change the icon above to any of the 2000+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</i></p>
                             </div>
                          </div>
                       </div>
                       <div className="col-md-4 col-sm-12 col-xl-4 col-lg-4 p-3"  >
                          <div className ="card shadow"  style = { myCardStyle}  onMouseEnter={handleMouseEnter}
                             onMouseLeave={handleMouseLeave}>
                             <div className='card-body '>
                                <FontAwesomeIcon icon={faReact} style={style} />
                                <p style ={hstyle}><i>React Js</i></p>
                                <hr style={hrStyle} />
                                <p><i>List skills/technologies here. You can change the icon above to any of the 2000+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</i></p>
                             </div>
                          </div>
                       </div>
                       <div className="col-md-4 col-sm-12 col-xl-4 col-lg-4 p-3"  >
                          <div className ="card shadow"  style = {myCardStyle}  onMouseEnter={handleMouseEnter}
                             onMouseLeave={handleMouseLeave}>
                             <div className='card-body'>
                                <FontAwesomeIcon icon={faNode} style={style} />
                                <FontAwesomeIcon icon={faNpm} style={style} />
                                <h1></h1>
                                <p style ={hstyle}><i>Node js</i> & <i>Npm </i></p>
                                <hr style={hrStyle} />
                                <p><i>List skills/technologies here. You can change the icon above to any of the 2000+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</i></p>
                             </div>
                          </div>
                       </div>
                    
                  
                       <div className="col-md-4 col-sm-12 col-xl-4 col-lg-4 p-3"  >
                          <div className ="card shadow"  style = {myCardStyle}  onMouseEnter={handleMouseEnter}
                             onMouseLeave={handleMouseLeave}>
                             <div className='card-body'>
                                <FontAwesomeIcon icon={faPhp} style={style} />
                                <FontAwesomeIcon icon={faLaravel} style={style} />
                                <p style ={hstyle}><i>Php & Larvel</i></p>
                                <hr style={hrStyle} />
                                <p><i>List skills/technologies here. You can change the icon above to any of the 2000+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</i></p>
                             </div>
                          </div>
                       </div>
                       <div className="col-md-4 col-sm-12 col-xl-4 col-lg-4 p-3"   >
                          <div className ="card shadow"  style = {myCardStyle}  onMouseEnter={handleMouseEnter}
                             onMouseLeave={handleMouseLeave}>
                             <div className='card-body'>
                                <FontAwesomeIcon icon={faHtml5} style={style} />
                                <FontAwesomeIcon icon={faCss3Alt} style={style} />
                                <p style ={hstyle}><i>HTML 5 & CSS 3</i> </p>
                                <hr style={hrStyle} />
                                <p><i>List skills/technologies here. You can change the icon above to any of the 2000+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</i></p>
                             </div>
                          </div>
                       </div>
                       <div className="col-md-4 col-sm-12 col-xl-4 col-lg-4 p-3"   >
                          <div className ="card shadow"  style = {myCardStyle}  onMouseEnter={handleMouseEnter}
                             onMouseLeave={handleMouseLeave}>
                             <div className='card-body'>
                                <FontAwesomeIcon icon={faGitSquare} style={style} />
                                <FontAwesomeIcon icon={faDatabase} style={style} />
                                <p style ={hstyle}><i>Git Hub</i> & MySql Database</p>
                                <hr style={hrStyle} />
                                <p><i>List skills/technologies here. You can change the icon above to any of the 2000+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</i></p>
                             </div>
                          </div>
                       </div>
                    </div>    
        
                    </div>
    </div>
  )
}
export default Skill;