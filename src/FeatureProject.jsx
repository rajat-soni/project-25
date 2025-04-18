
import myProject1 from './assets/project-img-2.png';
import myProject4 from './assets/project-img-2.png';

import { useState } from 'react';

const FeatureProject  = () => {


            const [isHovered, setIsHovered] = useState(false);
            
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


            const cardStyleListOne = {
                borderLeft: 'none',
                borderTop: '1px',
                borderRight: 'none',
                borderBottom: 'none',
                borderRadius: '3px',
            maxWidth: '946px',
            height: '200px',
            backgroundColor: isHovered ? '#fff ' : '#ffff',
            transition: 'transform 0.3s, box-shadow 0.3s', // Smooth transition for hover effect
            transform: isHovered ? 'scale(1.00.1)' : 'scale(1)', // Scale up on hover
            boxShadow: isHovered ? 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px'
            : 'none', // Add shadow on hover
            };
        

            const hstyle ={
                color: '#1995ad',
            }
    
    return (
        <div>
            <div className="col-md-12 col-sm-12 col-xl-12 col-lg-12 pl-4 pr-4" style ={{backgroundcolor:'# !',}}>
                <div className='row m-3' style={{backgroundcolor:'#',padding:'20px'}} >
                     <h1 className="pt-4 pb-4 text-center" style ={hstyle}>Featured Projects </h1>
                      <div className="col-md-6 col-sm-12 col-xl-6 col-lg-6 p-3"  >
                         <div className="card mb-3 shadow" id="unique-card-id" style={{maxWidth: '640px', ...cardStyleListOne}}  
                               onMouseEnter={() => setIsHovered(true)}
                               onMouseLeave={() => setIsHovered(false)}    >
                            <div className="row g-0">
                               <div className="col-md-4">
                                  <img src={myProject1} className="img-fluid rounded-start p-2" alt="..." />
                               </div>
                               <div className="col-md-8">
                                  <div className="card-body">
                                     <h6 className="card-title" style ={hstyle}>Email Tracker</h6>
                                     <p className="card-text"  style={{fontSize:'13px',}}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                     <p className="card-text"><small className="text-muted" style={{fontSize:'12px',}}>Client: Salesforce <br/>Last updated 3 mins ago</small></p>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>{/* end co-6*/}
                      
                      <div className="col-md-6 col-sm-12 col-xl-6 col-lg-6 p-3"  >
                         <div className="card mb-3 shadow" id="unique-card-id" 
                               style={{maxWidth: '640px', ...cardStyleListOne}}                    onMouseEnter={() => setIsHovered(true)}
                               onMouseLeave={() => setIsHovered(false)} > 
                            <div className="row g-0">
                               <div className="col-md-4">
                                  <img src={myProject4} className="img-fluid rounded-start p-2" alt="..." />
                               </div>
                               <div className="col-md-8">
                                  <div className="card-body">
                                     <h6 className="card-title" style ={hstyle}>Jwellery Shop Management</h6>
                                     <p className="card-text" style={{fontSize:'13px',}}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                     <p className="card-text"><small className="text-muted" style={{fontSize:'12px',}}>Client: Salesforce <br/>Last updated 3 mins ago</small></p>
                                   
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>{/* end co-6*/}

                      <div className="col-md-6 col-sm-12 col-xl-6 col-lg-6 p-3"  >
                        <div className="card mb-3 shadow" 
                            style={{maxWidth: '640px', ...cardStyleListOne}}  onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}  >
                            <div className="row g-0">
                                <div className="col-md-4 ">
                                    <img src={myProject1} className="img-fluid rounded-start p-2" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h6 className="card-title" style ={hstyle}>Email Tracker</h6>
                                        <p className="card-text" style={{fontSize:'13px',}}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted" style={{fontSize:'12px',}}>Client: Salesforce <br/>Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/* end co-6*/}

                  <div className="col-md-6 col-sm-12 col-xl-6 col-lg-6 p-3"  >
                    <div className="card mb-3 shadow" 
                        style={{ maxWidth: '640px', ...cardStyleListOne}}  onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}   >
                        <div className="row g-0">
                           <div className="col-md-4">
                              <img src={myProject4} className="img-fluid rounded-start p-2" alt="..." />
                           </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h6 className="card-title" style ={hstyle}>Email Tracker</h6>
                                    <p className="card-text" style={{fontSize:'13px',}}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted" style={{fontSize:'12px',}}>Client: Salesforce <br/>Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
       
        )
    
    }

    export default FeatureProject;