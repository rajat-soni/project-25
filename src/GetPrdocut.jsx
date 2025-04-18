import fruits1  from './assets/post-thumb-1.jpg';
import fruits2  from './assets/post-thumb-2.jpg';
import fruits3  from './assets/post-thumb-3.jpg';


const GetPrdocut = () => {
  return (

    
    <div className="col-md-12 col-xl-12 col-sm-12 col-lg-12 px-0   ">

        <div className ="row getCont ">
        <h2 className="blog headingCategory ">Our Recent Blog</h2>
            <div className = "first-col-one  ">
            <div className="card mb-3 py-0 my-0 rounded-1 leave-image2">
  <img className="card-img-top" src={fruits1} alt="Card image cap" />
  <div className="card-body">
  <h3 className="post-title">
                    <a href="#" className="text-decoration-none text-muted card-head">Top 10 casual look ideas to dress up your kids</a>
                  </h3>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div> 

            </div>

            <div className = "first-col-one">
            <div className="card mb-3 py-0 my-0 rounded-1 leave-image2">
  <img className="card-img-top" src={fruits2} alt="Card image cap" />
  <div className="card-body">
  <h3 className="post-title">
                    <a href="#" className="text-decoration-none text-muted card-head">Latest trends of wearing street wears supremely</a>
                  </h3>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div> 

            </div>

            <div className = "first-col-one">
            <div className="card  py-0 my-0 rounded-1 leave-image2">
  <img className="card-img-top" src={fruits3} alt="Card image cap" />
  <div className="card-body">
  <h3 className="post-title">
                    <a href="#" className="text-decoration-none text-muted card-head">10 Different Types of comfortable clothes ideas for women</a>
                  </h3>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div> 

            </div>
        

        </div>
    </div>
  )
}

export default GetPrdocut;