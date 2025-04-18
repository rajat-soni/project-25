import blogPost1 from './assets/blog-post-1.jpg';
import blogPost2 from './assets/blog-post-2.jpg';
import blogPost3 from './assets/blog-post-3.jpg';



 const  Blog = ()  => {
   return (
        <div>
             <div className="container mt-5">
                                  
               <h1  style ={{ marginLeft: '68px',color:'#1995ad'}}  >Latest Blog Posts</h1>
                                         
               <div className = "row mt-5 mb-5  pt-4   m-2 p-5 pt-4" style = {{backgroundColor:''}}>          
                  <div className="col-md-4" >
                     <div className="card portfolio-card border-muted mb-3" style={{width: '20rem'}}>
                        <img className="card-img-top" src={blogPost1} alt="Card image cap" />
                        <div className="card-body">
                           <h6 className="card-title"> <a href = "#" >How to Create an Angular Library</a></h6>
                           <p className="card-text" style={{fontSize:'12px'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           <a href="#" className= "button-card btn" >Go somewhere</a>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="card portfolio-card border-muted mb-3 " style={{width: '20rem', backgroundColor:'#a1d6e2'}} >
                        <img className="card-img-top" src={blogPost2} alt="Card image cap" />
                        <div className="card-body  ">
                           <h6 className="card-title align-items-center "> <a href = "#">React, Bootstrap, and Angular- The Basics </a></h6>
                           <p className="card-text" style={{fontSize:'12px'}}>Some quick example text to build on the card title and make up the bulk of the card's content.
            
                           </p>
                           <a href="#" className="btn btn-primary btn-md " >Go in my bio</a>  
                        </div>
                     </div>
                  </div>
                   <div className="col-md-4">
                     <div className="card portfolio-card border-muted mb-3" style={{width: '20rem'}}>
                        <img className="card-img-top" src={blogPost3} alt="Card image cap" />
                        <div className="card-body ">
                           <h6 className="card-title"> <a href = "#" >Best Practices for Code Review </a></h6>
                           <p className="card-text" style={{fontSize:'12px'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           <a href="#" className="btn btn-primary" >Go somewhere</a>
                        </div>
                     </div>
            
                  </div>
               </div>
            </div>    
         </div>
    
   )
 }
 
 export default Blog;