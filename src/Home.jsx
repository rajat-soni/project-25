import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from './assets/120240927153217.png';
import Footer from './Footer.jsx';
import { useState } from 'react';
import axios from 'axios';


const Home = () => {
    const [firstname, setfirstName] = useState('');
    const [lastname, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [jobrole, setjobRole] = useState('');
    const [revenue, setRevenue] = useState('');
    const [jobfunction, setjobFunction] = useState('');
    const [industry, setIndustry] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [code, setCode] = useState('');
    const [address, setAddress] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [cq, setCq] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            firstname,
            lastname,
            email,
            company,
            jobrole,
            revenue,
            jobfunction,
            industry,
            country,
            state,
            code,
            address,
            address2,
            city,
            cq,
        };

        try {
            // Send data to backend's /insertdata route
            const response = await axios.post('http://localhost:5000/insertdata', formData);
            setMessage('Data submitted successfully');
            console.log(response.data);
        } catch (error) {
            setMessage('Error submitting data');
            console.error(error);
        }
    };

    return (
        <div className="container-fluid" style={{ backgroundColor: '#F8FAFC' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-12 col-12">
                        <br />
                        <h1  style = {{color:'#149ddd'}}>Cloud Security & Compliance For Dummies</h1>
                        <p className="para">
                            Innovation is key to sustainable long-term growth, especially in the specialty chemical
                            industry. Technological advances and changing market demands are challenging traditional
                            R&D laboratory models. Our latest eBook,"Digital Transformation in the Specialty Chemical
                            Industry," explores how adopting digital tools can revolutionize your product development
                            process.
                            <br />
                            La digitalización se está acelerando en muchos sectores, y la capacidad de los centros de
                            datos sigue el ritmo de este cambio. Las crecientes necesidades de seguridad, velocidad y
                            capacidad se traducen en ampliaciones, modernizaciones, reubicaciones, mayores densidades
                            de puertos de servidores y routers y paneles variables.
                            <br />
                            Todo esto requerirá soluciones de identificación flexibles que apoyen a los profesionales de
                            los centros de datos altamente eficientes para llevar a cabo su mejor trabajo rápidamente.
                        </p>
                    </div>
                    <div className="col-md-6 col-xl-6 col-lg-6 col-12 col-sm-12 img-responsive img-fluid thumbnail"></div>
                </div>
                {/* end the row root row */}

                <div className="row">
                    <h1 id="webinar" className="mt-5"  style = {{color:'#149ddd'}}>
                        Webinar On Demand
                    </h1>
                    <div className="col-md-8 col-lg-8 col-12 col-sm-12 col-xs-12" style={{ margin: '70px 0px' }}>
                        {/* card */}
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-sm-12 col-12">
                                <div
                                    className="card mb-3 shadow"
                                    style={{ maxWidth: '540px', height: '200px' }}
                                >
                                    <div className="row no-gutters">
                                        <div className="col-md-4">
                                            <img src={myImage} className="card-img p-3" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title"  style = {{color:'#149ddd'}}>Valerie Bandy, PharmD</h5>
                                                <p className="card-text">
                                                    Senior Director Pharmacy Solutions
                                                    <br />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-12 col-12 ">
                                <div
                                    className="card mb-3 shadow"
                                    style={{ maxWidth: '540px', height: '200px' }}
                                >
                                    <div className="row no-gutters">
                                        <div className="col-md-4">
                                            <img src={myImage} className="card-img p-3" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title"  style = {{color:'#149ddd'}}>Valerie Bandy, PharmD</h5>
                                                <p className="card-text">
                                                    Senior Director Pharmacy Solutions
                                                    <br />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-sm-12 col-12">
                                <div
                                    className="card mb-3 shadow"
                                    style={{ maxWidth: '540px', height: '200px' }}
                                >
                                    <div className="row no-gutters">
                                        <div className="col-md-4">
                                            <img src={myImage} className="card-img p-3" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title"  style = {{color:'#149ddd'}}>Valerie Bandy, PharmD</h5>
                                                <p className="card-text">
                                                    Senior Director Pharmacy Solutions
                                                    <br />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-12 col-12 ">
                                <div
                                    className="card mb-3 shadow"
                                    style={{ maxWidth: '540px', height: '200px' }}
                                >
                                    <div className="row no-gutters">
                                        <div className="col-md-4">
                                            <img src={myImage} className="card-img p-3" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title"  style = {{color:'#149ddd'}}>Valerie Bandy, PharmD</h5>
                                                <p className="card-text">
                                                    Senior Director Pharmacy Solutions
                                                    <br />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="col-md-4 col-lg-4 col-12 col-sm-12 col-xs-12"
                        style={{ margin: '70px 0px' }}
                    >
                        <div className="card form-div shadow" id="">
                            <div
                                className="p-3"
                                style={{
                                   
                                    fontSize: '35px',
                                    textAlign: 'center',
                                    color:'#149ddd',
                                }}
                                id="form-heading"
                            >
                                Downlaod Webinar
                            </div>
                            <div className="card-body ">
                                <form id="id3f" method="POST" action="" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col">
                                            <div className="mb-3">
                                                <input
                                                    type="text"
                                                    value={firstname}
                                                    onChange={(e) => setfirstName(e.target.value)}
                                                    className="form-control"
                                                    name="firstname"
                                                    placeholder="first name "
                                                />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="col">
                                            <div className="mb-3">
                                                <input
                                                    type="text"
                                                    value={lastname}
                                                    onChange={(e) => setlastName(e.target.value)}
                                                    className="form-control"
                                                    placeholder="last name "
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col">
                                            <div className="mb-3">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    id="email"
                                                    required
                                                    placeholder="Please enter your email address **"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="col">
                                            <div className="mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="company"
                                                    name="company"
                                                    placeholder="Company name "
                                                    value={company}
                                                    onChange={(e) => setCompany(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col">
                                            <div className="mb-3">
                                                <select
                                                    className="form-select"
                                                    name="data[3]"
                                                    required
                                                    id="job_role"
                                                    aria-label="Default select example"
                                                    style={{ color: '#6F8394 !important' }}
                                                    value={jobrole}
                                                    onChange={(e) => setjobRole(e.target.value)}
                                                >
                                                    <option
                                                        selected
                                                        value=""
                                                        style={{ color: '#6F8394 !important' }}
                                                    >
                                                        Job Role
                                                    </option>
                                                    <option value="One">One</option>
                                                    <option value="Two">Two</option>
                                                    <option value="Three">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="col">
                                            <div className="mb-3">
                                                <select
                                                    className="form-select"
                                                    name="data[3]"
                                                    required
                                                    id="job_role"
                                                    aria-label="Default select example"
                                                    value={revenue}
                                                    onChange={(e) => setRevenue(e.target.value)}
                                                    style={{ color: '#6F8394 !important' }}
                                                >
                                                    <option
                                                        selected
                                                        value=""
                                                        style={{ color: '#6F8394 !important' }}
                                                    >
                                                        Revenue
                                                    </option>
                                                    <option value="One">One</option>
                                                    <option value="Two">Two</option>
                                                    <option value="Three">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <br />

                                    <div className="row">
                                        <div className="col">
                                            <div className="mb-3">
                                                <select
                                                    className="form-select"
                                                    name="data[3]"
                                                    required
                                                    id="job_role"
                                                    aria-label="Default select example"
                                                    style={{ color: '#6F8394 !important' }}
                                                    value={jobfunction}
                                                    onChange={(e) => setjobFunction(e.target.value)}
                                                >
                                                    <option
                                                        selected
                                                        value=""
                                                        style={{ color: '#6F8394 !important' }}
                                                    >
                                                        Job function
                                                    </option>
                                                    <option value="One">One</option>
                                                    <option value="Two">Two</option>
                                                    <option value="Three">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="mb-3">
                                                <select
                                                    className="form-select"
                                                    name="data[3]"
                                                    required
                                                    id="job_role"
                                                    aria-label="Default select example"
                                                    style={{ color: '#6F8394 !important' }}
                                                    value={industry}
                                                    onChange={(e) => setIndustry(e.target.value)}
                                                >
                                                    <option
                                                        selected
                                                        value=""
                                                        style={{ color: '#6F8394 !important' }}
                                                    >
                                                        Industry
                                                    </option>
                                                    <option value="One">One</option>
                                                    <option value="Two">Two</option>
                                                    <option value="Three">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <div className="mb-3">
                                                <select
                                                    className="form-select"
                                                    name="data[3]"
                                                    required
                                                    id="job_role"
                                                    aria-label="Default select example"
                                                    style={{ color: '#6F8394 !important' }}
                                                    value={country}
                                                    onChange={(e) => setCountry(e.target.value)}
                                                >
                                                    <option
                                                        selected
                                                        value=""
                                                        style={{ color: '#6F8394 !important' }}
                                                    >
                                                        Country
                                                    </option>
                                                    <option value="One">One</option>
                                                    <option value="Two">Two</option>
                                                    <option value="Three">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="mb-3">
                                                <select
                                                    className="form-select"
                                                    name="data[3]"
                                                    required
                                                    id="job_role"
                                                    aria-label="Default select example"
                                                    style={{ color: '#6F8394 !important' }}
                                                    value={state}
                                                    onChange={(e) => setState(e.target.value)}
                                                >
                                                    <option
                                                        selected
                                                        value=""
                                                        style={{ color: '#6F8394 !important' }}
                                                    >
                                                        State
                                                    </option>
                                                    <option value="One">One</option>
                                                    <option value="Two">Two</option>
                                                    <option value="Three">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="Postal_code"
                                                name="Postal Code"
                                                placeholder="Zip/Postal Code"
                                                value={code}
                                                onChange={(e) => setCode(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="Address"
                                                name="Address"
                                                placeholder="Address1"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="Address2"
                                                name="Address2"
                                                placeholder="Address2"
                                                value={address2}
                                                onChange={(e) => setAddress2(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="city"
                                                name="city"
                                                placeholder="City"
                                                value={city}
                                                onChange={(e) => setCity(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="cq"
                                                name="cq"
                                                placeholder="Custom question "
                                                value={cq}
                                                onChange={(e) => setCq(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-check mt-4 mb-4">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                        <label
                                            className="form-check-label"
                                            style={{ fontSize: '13px' }}
                                        >
                                            I would like to receive information from suppliers who
                                            sponsor this content and are willing to share the above
                                            information with AWS.
                                        </label>
                                    </div>

                                    <div className="mb-3 mt-4">
                                        <button
                                            type="submit"
                                            className="btn btn-lg shadow"
                                            style={{
                                                backgroundColor: '#2b98fb',
                                                borderRadius: '0px',
                                                border: 'none !important',
                                                dispay: 'block',
                                                width: '100%',
                                                paddingTop: '10px',
                                                color: '#fff',
                                            }}
                                        >
                                            Watch Now
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;