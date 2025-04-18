import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBuilding, faPhone } from '@fortawesome/free-solid-svg-icons';
import Footer from "./Footer";

const Contact = () => {


  const myStyleIcon = {

    backgroundColor: '#149ddd',
    padding: '10px',
    fontSize: '30px',
    borderRadius: '8px',
    marginTop: '10px',
    marginBottom: '10px',
    color:'#fff',
  };


  const colStyle = {

    backgroundColor: '#fff',
    padding: '20px',
    fontSize: '14px',
    borderRadius: '0px',
    marginTop: '10px',
    marginBottom: '10px',
    color:'#000',
    marginLeft: '65px',
   
    paddingBottom: '10px',
    paddingTop: '10px',

    

    
   
  }

  const inputTextStyle = {
      
    borderRadius: '0px',
    fontSize: '15px', 
    height: '50px',
    marginTop: '10px',
   
  }

  const  message = {
    borderRadius: '0px',
    fontSize: '15px', 
  
  }

  const  button = {
    backgroundColor: '#149ddd',
    borderRadius: '2px, 2px, 2px, 2px',
    fontSize: '15px', 
    width: '200px',
    height: '50px',
    borderColor: '#149ddd',
  
  }

  const hrStyle = {
    border: '0',
    borderTop: '4px solid #149ddd',  // Custom border color and thickness
    width: '22%',                 // Set the width of the line
    margin: '10px 0',             // Adjust the margins (top and bottom) for spacing
    marginLeft: '0',              // Adjust margin-left if needed
  };


  // Google Maps API Key
const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";

// Map container styles
const containerStyle = {
  width: '100%',
  height: '200px',
};

// Center position for the map (You can set this to any coordinates you want)
const center = {
  lat: 37.7749, // Example: Latitude for San Francisco
  lng: -122.4194, // Longitude for San Francisco
};

  return <div>  
    <div className="container">
      <div className="row mt">
           <div className="col-md-4  mt-5 mb-4 shadow" style={colStyle} >
                <h1 className=""  style = {{color:'#149ddd'}}>Contact</h1>
                <hr style={hrStyle}></hr>
                  <br></br>
                   <div className="row p-4">  
                     <div className="col-md-3"><FontAwesomeIcon icon={faEnvelope} style={myStyleIcon} /></div>
                      <div className="col-md-9" style={{marginTop:'12px'}}>Email Us<br></br>
                      info@example.com</div>
                      <div className="col-md-3"><FontAwesomeIcon icon={faBuilding} style={myStyleIcon} /></div>
                      <div className="col-md-9" style={{marginTop:'12px'}}>Address <br></br>
                      A108 Adam Street, New York, NY 535022</div>
                      <div className="col-md-3"><FontAwesomeIcon icon={faPhone} style={myStyleIcon} /></div>
                      <div className="col-md-9" style={{marginTop:'12px'}}>Call Us<br></br>
                      +1 5589 55488 55</div>
                     
                   </div>

                   <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                  >
                    {/* Marker for the location */}
                    <Marker position={center} />
                  </GoogleMap>
                </LoadScript>

                   
               
            </div>
   

            <div className="col-md-6 shadow mt-5"  style={colStyle } >
                <h1 className=""  style = {{color:'#149ddd'}}>Get In Touch</h1>
                <hr style={hrStyle}></hr>
                <br></br>
                <form style = {{margin:'15px'}}>
                <div className="row"  >
                      <div className="col-6">
                        <label style={{color:'#000'}} >Your Name</label><br></br>
                      <input type="text" className="form-control" placeholder=""  style={inputTextStyle} />
                      </div>
                      <div className="col-6">
                      <label style={{color:'#000'}} >Last Name</label><br></br>

                            <input type="text" className="form-control" id = "" placeholder="" style={inputTextStyle}  />
                      </div>
                </div>
                <br></br><br></br>
                    <div className="form-group" >
                    <label style={{color:'#000'}} >Subject</label><br></br>
                            <input type="text" className="form-control" placeholder="" style={inputTextStyle}  />
                      </div>
<br></br><br></br>
                    <div className="form-group">
                        <label style={{color:'#000'}}  >Message</label><br></br>
                        <textarea className="form-control" id="message" rows="6"   required  style = {message} ></textarea>
                    </div>
                    <br></br>
                    <center><button type="submit" className="btn btn-primary text-center" style={button}>Join Us</button></center>
                </form>
            </div>
       

      </div>
  </div>
  <Footer />
  </div>
};

export default Contact;
