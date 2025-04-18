import clientImage from './assets/oracle.png';
import clientImage2 from './assets/tcs.png';
import clientImage3 from './assets/client-3.png';
import clientImage4 from './assets/ibm.png';

const Feature  = () => {


    const hstyle ={
        color: '#1995ad',
    }
    
  return (
    <div>
<div className ="container  shadow"  style={{backgroundColor:'#a1d6e2'}}>
                                       <h1 className = "mt-2 mb-2   text-center pt-5" style ={hstyle}>Featured in</h1>
                                    <div className="row mt-5  p-5 ">
                                       <div className="col-md-3 col-12 col-lg-3 col-xl-3 ">
                                          <img src ={clientImage}  style={{width:'160px'}} />
                                       
                                       </div>
                                       <div className="col-md-3 col-12 col-lg-3 col-xl-3">
                                          <img src ={clientImage2}  style={{width:'160px'}} />
                                   
                                       </div>
                                       <div className="col-md-3 col-12 col-lg-3 col-xl-3">
                                          <img src ={clientImage3} style={{width:'160px'}}  />
                                     
                                       </div>
                                       <div className="col-md-3 col-12 col-lg-3 col-xl-3">
                                          <img src ={clientImage4}  style={{width:'160px'}}/> 
                                       </div>
                                    </div> 
                                 </div>


    </div>
  )
}
export default Feature;