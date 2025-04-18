
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn,faAd, faBusinessTime} from '@fortawesome/free-solid-svg-icons';
import  { useState } from 'react';

const Services = () => {

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const myStyleIcon = {

    backgroundColor: '#149ddd',
    padding: '10px',
    fontSize: '30px',
    borderRadius: '8px',
    marginTop: '10px',
    marginBottom: '10px',
    color:'#fff',
  };

  const myCardStyle = {

    borderTop: '3px solid #149ddd',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: 'none',
    borderRadius: '0px',
    transition: '0.5s',
    backgroundColor: hovered ? '#EFEFEF ' : '#fff', // Change background color on hover
    boxShadow: hovered ? 'box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px' : 'none', // Shadow effect
    paddingBottom: '10px' 
    
  };




  return <div>
    <div className="container  mt-4" >
        <div className="row" >
            <div className="col-12">
                <h1 className="display-4 mt-3  text-center mt-4 " style = {{color:'#149ddd'}}>Our Services
                </h1>
                <br ></br>
                <p ></p>
                <p className="text-muted mt-3 text-center">We offer a wide range of services to help you grow your business.<br></br> Our team of experts can help you with everything from web design to social media marketing.<br></br>We have a team of experienced and talented professionals who can help you with every aspect of the product development process, from ideation to prototyping to launch.</p>

                <div className="row mt-5 mb-4">
                 <div className="col-4 text-center" >
                  <div  className="card" style={myCardStyle} onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
                    <div className="card-body">
                       <FontAwesomeIcon icon={faBullhorn} style={myStyleIcon} />
                       <br></br><br></br>
                      <h5 className="card-title" >SEO Consulting</h5>
                      <br></br>
                      <p className="card-text">We can help you to improve your website's visibility in search engine results pages (SERPs). This can lead to more traffic to your website.</p>
                    </div>
                  </div>
                  </div>
                 <div className="col-4 text-center">
                  <div className="card" style={myCardStyle}  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
                    <div className="card-body">
                    <FontAwesomeIcon icon={faAd} style={myStyleIcon} />
                    <br></br><br></br>
                      <h5 className="card-title">Web Development</h5>
                      <br></br>
                      <p className="card-text">We can help you to design and develop a new website, or to update your existing website. We specialize in creating user-friendly websites.</p>
                    </div>
                  </div></div>
                  <div className="col-4 text-center">
                 
                    <div className="card" style={myCardStyle} onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
             
                    <div className="card-body">
                    <FontAwesomeIcon icon={faBusinessTime} style={myStyleIcon} />
                    <br></br><br></br>
                      <h5 className="card-title">Digital Strategy</h5>
                      <br></br>
                      <p className="card-text">We can help you to develop a digital strategy that will help you to achieve your business goals. This includes digital marketing for your business.</p>
                    </div>
                  </div>
                  </div>
                </div>
            </div>

            <div className="col-4 text-center mb-4 mt-5">
                  <div className="card" style={myCardStyle} onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
                    <div className="card-body">
                    <FontAwesomeIcon icon={faBullhorn} style={myStyleIcon} />
                    <br></br><br></br>
                      <h5 className="card-title">Web Design</h5>
                      <br></br>
                      <p className="card-text">We can help you to create a visually appealing and user-friendly website. We take into account your brand identity and target audience.</p>
                    </div>
                  </div>
                  </div>
                 <div className="col-4 text-center mb-4 mt-5">
                  <div className="card" style={myCardStyle} onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
                    <div className="card-body">
                    <FontAwesomeIcon icon={faAd} style={myStyleIcon} />
                    <br></br><br></br>
                      <h5 className="card-title">Digital Marketing</h5>
                      <br></br>
                      <p className="card-text">We can help you to promote your business online through a variety of digital marketing channels, including SEO, PPC, and email marketing.</p>
                    </div>
                  </div></div>
                  <div className="col-4 text-center mb-4 mt-5">
                    <div className="card" style={myCardStyle} onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
                    <div className="card-body">
                    <FontAwesomeIcon icon={faBusinessTime} style={myStyleIcon} />
                    <br></br><br></br>
                      <h5 className="card-title">Media Production</h5>
                      <br></br>
                      <p className="card-text">We can help you to create high-quality videos, photos, and other media content. We can help you to distribute your content through a variety of channels.</p>
                    </div>
                  </div>
                  </div>
                </div>
  
       
      </div>
  </div>

};

export default Services;
