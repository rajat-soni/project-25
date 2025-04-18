
import './Navbar.css';

import bread from './assets/icon-bread-baguette.png';
import herb from './assets/icon-bread-herb-flour.png';
import veg  from './assets/icon-vegetables-broccoli.png';
import veg1  from './assets/icon-wine-glass-bottle.png';
import veg12  from './assets/icon-wine-glass-bottle.png';

import  NewArrival  from  './NewArrival.jsx'
import  TrandendingProject  from  './TrandendingProject.jsx'
import  Connect  from  './Connect.jsx'
import  GetPrdocut  from  './GetPrdocut.jsx'
import  LastPage  from  './LastPage.jsx'
import  FooterPageBtn  from  './FooterPageBtn.jsx'
import  FooterPageBtnSecond  from  './FooterPageBtnSecond.jsx'
import  EndFooter  from  './EndFooter.jsx'
//import  LeftMainDiv  from  './LeftMainDiv.jsx'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// import 'keen-slider/keen-slider.min.css'
// import { useKeenSlider } from 'keen-slider/react'

const  FruitShop = () => {

    

    return (
    <div>
        <div className="container  mt-4 root-container">
            <div className="row">
             
                <div className="col-md-7 col-sm-12 col-xl-7 col-lg-7 border"  
                        style ={{backgroundColor: '#e6f3fa', borderRadius: '10px', }} >
                        <div className="row mt-2 mt-3 keen-slider" 
                            style ={{backgroundColor: '#e6f3fa', borderRadius: '10px'}} >
                            
                            <div className="col-md-6 col-sm-12 col-xl-6 col-lg-6 mt-5  
                                rounded-1 leave-image2" >
                                <h1  className="mainHeading display-1">100% Naturals</h1><br/>
                                <h2 className = "mainTitle">Fresh Smoothie & Summer Juice</h2>
                                <br></br>
                                <h6 style ={{lineHeight: '32px',}} className="text-muted">A list of the fruits used in the juice, such as orange, apple, pineapple, etc. It may also mention added ingredients like water, sugar, preservatives, or vitamins, depending on the brand and product.</h6>
                                <br></br> 
                                <button type="button" className="btn btn-outline-dark btn-lg MainBtn">Show Now</button>
                            </div>

                                <div className="col-md-6 col-sm-12 col-xl-6 col-lg-6 mt-5 
                                    no-repeat;  main-image" style ={{backgroundColor: '#', borderRadius: '10px',marginLeft: '30px',   }} >
                                     
                                </div>
                            </div>

                        </div>
        
      
                <div className = "col-md-5 col-sm-12 col-xl-5 col-lg-5"   >
                    <div className="row " style ={{backgroundColor: '#', borderRadius: '2px', paddingLeft: '33px',  }}>
                        <div className="col-md-12 col-sm-12 col-xl-12 col-lg-12" style ={{backgroundColor: '#eef5e5',           borderRadius: '10px'  }}>
                            <div className="row mt-2" style ={{backgroundColor: '#eef5e5', borderRadius: '10px'}}>
                                <div className="col-md-6 col-sm-12 col-xl-6 col-lg-6 mt-2 top-col" style ={{backgroundColor: '', borderRadius: '10px', padding:'15px'  }}>
                                <h4 className="text-transform: capitalize display-6">20% Off</h4><br/>
                                <h6>-----------SALE</h6>
                                <br></br>
                                <h4 className = "display-7">Fruits & <br></br>Vegetables</h4>
                                <br></br> 
                                <a href="#" style={{textDecoration: 'none', color: 'black'}}><h6>Shop Now ----</h6></a>
                                </div>
                                    <div className="col-md-6 col-sm-12 col-xl-6 col-lg-6 mt-5 no-repeat;  veggi" style ={{backgroundColor: '#', borderRadius: '10px',marginLeft: '20px',   }} >
                                     
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xl-12 col-lg-12 mt-5  bottom-col " style ={{backgroundColor: '#f9ebe7', borderRadius: '10px'  }}>
                        <div className="row mt-3" style ={{backgroundColor: '', borderRadius: '10px'}}>
                                <div className="col-md-6 col-sm-12 col-xl-6 col-lg-6 mt-2" style ={{backgroundColor: '', borderRadius: '10px', padding:'15px'  }}>
                                <h4 className = "display-6">15% Off</h4><br/>
                                <h6>-----------SALE</h6>
                                <br></br>
                                <h4>Fruits & <br></br>Vegetables</h4>
                                <br></br> 
                                <a href="#" style={{textDecoration: 'none', color: 'black'}}><h6>Shop Now ----</h6></a>
                                </div>
                                    <div className="col-md-6 col-sm-12 col-xl-6 col-lg-6 mt-5 no-repeat;  second-left-col-img" style ={{backgroundColor: '#', borderRadius: '10px',marginLeft: '20px',    }} >
                                     
                                    </div>
                            </div>


                        </div>
                        
                    </div>
                </div>
            </div>
            
            
            <div className="col-md-12 col-sm-12 col-xl-12 col-lg-12 mt-5 mx-0  "  >
                   
           
                    <div className="row" style ={{backgroundColor: '#fff', borderRadius: '10px'}}>
                    <h2 className="headingCategory px-0  mt-5 ">Category In Fruits and Veggies</h2>
                        <Swiper
      spaceBetween={5}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
  
<SwiperSlide><div className = "col-md-3 col-sm-12 col-xl-3 col-lg-3  mb-5 mt-5 px-0" style ={{  }}>

                         <div className="row">
                            <div className="col-sm-6">
                                <div className="card car-div ">
                                    <div className="card-body">
                                        <h5 className="card-text text-center pt-3 "><img src= {bread} alt="profile" style={{width:'10%'}}/></h5>
                                        <p className="card-title text-center pt-3"><b>Fruits & Veges</b><br></br>With supporting text below as a natural lead-in.</p>
                                       
                                    </div>
                                </div>
                                </div>
                            
                         </div>
                         </div></SwiperSlide>


                         <SwiperSlide> <div className = "col-md-3 col-sm-12 col-xl-3 col-lg-3 px-0 mt-5 mb-5" style ={{  }}>
                         <div className="row ">
                            <div className="col-sm-6">
                                <div className="card car-div ">
                                    <div className="card-body">
                                        <h5 className="card-title text-center pt-3"><img src= {herb} alt="profile" style={{width:'10%'}}/></h5>
                                        <p className="card-text text-center pt-3"><b>Fruits & Veges</b><br></br>With supporting text below as a natural lead-in.</p>
                                       
                                    </div>
                                </div>
                                </div>
                            
                         </div>
                            </div></SwiperSlide>
                         <SwiperSlide><div className = "col-md-3 col-sm-12 col-xl-3 col-lg-3 px-0 mt-5 mb-5" style ={{  }}>
                         <div className="row">
                            <div className="col-sm-6">
                                <div className="card car-div ">
                                    <div className="card-body">
                                        <h5 className="card-title text-center "><img src= {veg} ></img></h5>
                                        <p className="card-text text-center"><b>Fruits & Veges</b><br></br>With supporting text below as a natural lead-in.</p>
                                       
                                    </div>
                                </div>
                                </div>
                            
                         </div>
                            </div></SwiperSlide>
                         <SwiperSlide><div className = "col-md-3 col-sm-12 col-xl-3 col-lg-3 px-0 mt-5 mb-5" style ={{  }}>
                         <div className="row">
                            <div className="col-sm-6">
                                <div className="card car-div ">
                                    <div className="card-body">
                                        <h5 className="card-title text-center  "><img src= {veg1} ></img></h5>
                                        <p className="card-text text-center card-">Fruits & Veges<br></br>With supporting text below as a natural lead-in.</p>
                                       
                                    </div>
                                </div>
                                </div>
                            
                         </div>

                         </div>
                         </SwiperSlide>

                         <SwiperSlide>
                            <div className = "col-md-3 col-sm-12 col-xl-3 col-lg-3 px-0 mt-5 mb-5" style ={{  }}>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="card car-div  ">
                                            <div className="card-body">
                                                <h5 className="card-title text-center"><img src= {veg12} ></img></h5>
                                                <p className="card-text text-center">Fruits & Veges<br></br>With supporting text below as a natural lead-in.</p>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </SwiperSlide>

                         </Swiper>
                    </div>
                    <h2 className="headingCategory px-0">Newly Arrived Brands</h2>
                    
                  
                    <NewArrival /> 

                   <GetPrdocut />

                    <TrandendingProject />

                    <Connect />
                    <LastPage />
             
           
                <FooterPageBtn />
                <FooterPageBtnSecond  />
                <EndFooter  />
             
            </div>
            
           
        </div> 

        
           
       
    </div>
  )
}

export default FruitShop;