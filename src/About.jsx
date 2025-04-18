
import myImageabout from './assets/about-img-1.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools,faBriefcase} from '@fortawesome/free-solid-svg-icons';

const About = () => {

  const myStyle = {

    backgroundColor: '#149ddd',
    padding: '10px',
    fontSize: '22px',
    borderRadius: '8px',
    color:'#fff',


  

  };

  const myStyleIcon = {

    backgroundColor: '#149ddd',
    padding: '10px',
    fontSize: '45px',
    borderRadius: '8px',
    marginTop: '30px',
     color:'#fff',

  

  };

  const containe = {

    border:'none',

  };

  return <div>
            <div className="container  mt-4" style={containe}>
              <div className="row" style={containe}>
             
              <div className="col-6">
              <img src={myImageabout} className="img-fluid  rounded " alt="about" id = "img_out" style={{width: '500px'}}/>
                      </div>
                <div className="col-6">
                 


                <h1 className="display-4 mt-3 text-muted">Who we are?</h1>
                <br></br>
                  <p className="" style={myStyle}>We help people to build incredible brands and superior products. Our perspective is to furnish outstanding captivating services.</p>
                  <p>
                  <br></br>
                  We help people to build incredible brands and superior products. Our perspective is to furnish outstanding captivating services.</p>
                  <br/>
                  <p>We are a fast-growing company, but we have never lost sight of our core values. We believe in collaboration, innovation, and customer satisfaction. We are always looking for new ways to improve our products and services.</p>

                      <div className="row">
                        <div className="col-6">
                          <div className="row">
                            <div className="col-3">
                        <FontAwesomeIcon icon={faTools} style={myStyleIcon} />
                        </div>
                        <div className="col-9" id = "icon_out_col">
                        <h4>Versatile Bran</h4>
                        <p>We are crafting a digital method that subsists life across all mediums.</p>
                        </div>
                        </div>
                        </div>
                        <div className="col-6">
                        <div className="row">
                            <div className="col-3">
                        <FontAwesomeIcon icon={faBriefcase} style={myStyleIcon} />
                        </div>
                        <div className="col-9" id = "icon_out_col">
                        <h4>Digital Agency</h4>
                        <p>We believe in innovation by merging primary with elaborate ideas.</p>
                        </div>
                        </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
            </div>
  </div>
};

export default About;
