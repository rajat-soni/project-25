
import phone  from './assets/phone-imge.png';
import googleApp from './assets/google-play.jpg';
import appStore from './assets/app-store.jpg';


import './Navbar.css';


const LastPage = () => {
    return (

 
        <div  className="lastContainer">    
            
               
             
                <div className ="row">
                <div className = "col-md-4 col-12 col-lg-4 col-xl-4 px-0  left-side ">
                    <img src= {phone} alt="logo" className="img-phone image-float img-fluid" />
                    </div>
                    <div className = "col-md-8 col-12 col-lg-8 col-xl-8 px-4 right-side   rounded-1 leave-image2">
                    <h3 className = "my-5 text-muted" >Shop faster with foodmart App</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed ptibus liberolectus nonet psryroin. Amet sed lorem posuere sit iaculis amet, ac urna. Adipiscing fames semper erat ac in suspendisse iaculis. Amet blandit tortor praesent ante vitae. A, enim pretiummi senectus magna. Sagittis sed ptibus liberolectus non et psryroin.</p>

                    <div className="d-flex gap-2 flex-wrap pt-3">
                  <img src={appStore} alt="app-store"/>
                  <img src={googleApp} alt="google-play"/>
                </div>
                    </div>
                    </div>
            </div>
    

    )
}

export default LastPage;  


