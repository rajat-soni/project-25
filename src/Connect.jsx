import { useState } from "react";

const Connect = () => {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Data submitted successfully!");
      } else {
        alert("Error submitting data.");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className = "col-md-12 col-xl-12 col-lg-12 col-sm-12 px-0  py-5 my-5 rounded-5 connect-div leave-image2" style ={{}}>

    <div className = "row mt-5 connect-row " >
       
    
        <div className = " connect-image p-3 col-right mt-0" >

        <h1  className="section-title display-4 ">Get <span  className= "percent">25% Discount</span><br></br> on your first purchase</h1>
  <p className="text-muted para1">Food is what gives us the energy to move, play, and think! And among the best foods we can eat are vegetables. They’re colorful, tasty, and packed with vitamins that help keep us healthy.</p>
            
        </div>
    

        <div className = " mt-0 col-connect-left p-3" >
        <form  onSubmit={handleSubmit}>
            <div className="mb-3 mt-4">
        <input type="text" className="form-control form-control-lg" name="name" id="name" placeholder="Name" value={formData.name}
          onChange={handleChange}></input>
        </div>
        <div className="mb-3 mt-4">
        <input type="text" className="form-control form-control-lg" name="last" id="last" placeholder="lastname" value={formData.last}
          onChange={handleChange}></input>
        </div>
        <div className="mb-3 mt-4">
        <input type="email" className="form-control form-control-lg" name="email" id="email" placeholder="rj.rajatsoni221@gmail.com" value={formData.email}
          onChange={handleChange}></input>
        </div>
        <div className="d-grid gap-2 mt-4">
                    <button type="submit" className="btn btn-dark btn-lg">Submit</button>
                  </div>

                  </form>
        </div>
        </div>
       
</div>
)
}

export default Connect;
