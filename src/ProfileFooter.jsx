
 import myProfile from './assets/profile.jpg';
 const  ProfileFooter = ()  => {

  
   return (
        <div>
            <div className="row mt-5 mb-4" style={{backgroundColor:'#a1d6e2'}}>
                <div className="col-md-12 col-xl-12 col-lg-12 mt-3" style = {{display: 'flex',
    justifyContent: 'center'}}>
                    <img src={myProfile} className="img-fluid img-resonsive"  style={{width:'150px', borderRadius: '50%'}}></img><br></br>
                </div>
                <div className="col-md-12 col-xl-12 col-lg-12 d-flex text-center align-items-center mt-4">
                    <p style={{color:'#1995ad'}}>Looking for an experienced full-stack developer to build your web app or ship your software product? To start an initial chat, just drop me an email at  <a href="mailto:rj.rajatsoni221@gmail.com"> rj.rajatsoni221@gmail.com </a> or use the form on the contact page.</p>
                </div>
                <div className="col-md-12 col-xl-12 col-lg-12 d-flex text-center mt-3 mb-5" style = {{display: 'flex',
    justifyContent: 'center'}}>
                 <a href="#" className="btn btn-primary btn-md " >Let's talk</a> 
                 </div>
                    
                </div>
                
            </div>
    
   )
 }
 
 export default ProfileFooter;