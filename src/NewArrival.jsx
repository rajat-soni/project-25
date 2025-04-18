
import thumb  from './assets/product-thumb-11.jpg';
import productThumb  from './assets/product-thumb-12.jpg';
import thumb123  from './assets/product-thumb-13.jpg';
import thumb1234  from './assets/product-thumb-14.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
const  NewArrival = ()  => {

    
  return (

    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
     


        <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 mt-5" style ={{backgroundColor: '#fff', borderRadius: '10px'}}>
    
            <div className="row mt-5" style ={{backgroundColor: '#fff', borderRadius: '10px'}}>
          
           
                <SwiperSlide>
                    <div className="mt-5" style ={{backgroundColor: '#fff', borderRadius: '10px'}}>
                        <div className="card mb-3 p-3 rounded-4 shadow border-0  py-2 rounded-1 leave-image2">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={thumb} className="img-fluid rounded" alt="Card title" />
                                </div>
                                    <div className="col-md-8">
                                        <div className="card-body py-0">
                                            <p className="text-muted mb-0 card-text-1">Amber Jar</p>
                                            <h5 className="card-title-1">Honey best nectar you wish to get</h5>
                                        </div>
                                    </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mt-5" style ={{backgroundColor: '#fff', borderRadius: '10px'}}>
                        <div className="card mb-3 p-3 rounded-4 shadow border-0">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={productThumb} className="img-fluid rounded" alt="Card title" />
                                </div>
                                    <div className="col-md-8">
                                        <div className="card-body py-0">
                                            <p className="text-muted mb-0 card-text-1">Amber Jar</p>
                                            <h5 className="card-title-1">Honey best nectar you wish to get</h5>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" mt-5" style ={{backgroundColor: '#fff', borderRadius: '10px'}}>
                        <div className="card mb-3 p-3 rounded-4 shadow border-0">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={thumb123} className="img-fluid rounded" alt="Card title" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body py-0">
                                        <p className="text-muted mb-0 card-text-1">Amber Jar</p>
                                        <h5 className="card-title-1">Honey best nectar you wish to get</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> 
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" mt-5" style ={{backgroundColor: '#fff', borderRadius: '10px'}}>
                         <div className="card mb-3 p-3 rounded-4 shadow border-0">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={thumb1234} className="img-fluid rounded" alt="Card title" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body py-0">
                                        <p className="text-muted mb-0 card-text-1">Amber Jar</p>
                                        <h5 className="card-title-1">Honey best nectar you wish to get</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> 
                </SwiperSlide>

                <SwiperSlide>
                    <div className=" mt-5" style ={{backgroundColor: '#fff', borderRadius: '10px'}}>
                         <div className="card mb-3 p-3 rounded-4 shadow border-0">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={thumb1234} className="img-fluid rounded" alt="Card title" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body py-0">
                                        <p className="text-muted mb-0 card-text-1">Amber Jar</p>
                                        <h5 className="card-title-1">Honey best nectar you wish to get</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> 
                </SwiperSlide>

                    
            </div>
                
        </div>

 
    </Swiper>
  )
}

export default NewArrival;