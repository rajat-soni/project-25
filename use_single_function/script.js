
        var timeout;
        
        function SingleFunction(e){
            e.preventDefault();
            console.log("event type:",e.type);

            if(e.type==="submit"){
                
                var form=document.getElementById("form");
                const formData=new FormData(form);
                formData.append('req_type', "submit_form");
    
                fetch('http://localhost/use_single_function/process.php', {
                    method: 'POST',
                    body: formData
                }).then(function (response) {
                    if (response.ok) {
                        return response.text();
                    }
                    return Promise.reject(response);
                }).then(function (data) {
                  alert(data)
                    
                    if(data.includes("Registration Completed.")){
                        form.reset();
                    }
                }).catch(function (error) {
                    console.warn('Something went wrong.', error);
                });

            }

            if(e.type==="blur" || e.type==="keyup"){
                if(timeout){
                    clearTimeout( timeout );
                }
                
                timeout=setTimeout(() => {
                    

                    var username=document.getElementById("username").value;
                    var submit_button=document.getElementById("submit_button");
                  
                    var message=document.getElementById("message");
                    if(username.length==0){ 
                       
                        message.innerHTML="";
                        submit_button.disabled=true;
                        return;
                    }else{
                        submit_button.disabled=false;
                    }
                    var formData = new FormData();
                    formData.append('username', username);
                    formData.append('req_type', "check_username");
        
                    
                    fetch('http://localhost/use_single_function/process.php', {
                        method: 'POST',
                        body: formData
                    }).then(function (response) {
                        if (response.ok) {
                            return response.text();
                        }
                        return Promise.reject(response);
                    }).then(function (data) {
                       
                        if(data.includes("username is not available")){
                          
                            message.innerHTML=`<span style="color:red;font-size:12px;"> ❌ ${username} already taken.</span>`;
                            submit_button.disabled=true;
                        }else if(data.includes("empty")){
                            
                            message.innerHTML=``;
                        }else{
                           
                            message.innerHTML=`<span style="color:green;font-size:12px;"> ✅ ${username} is available.</span>`;
                            submit_button.disabled=false;
                        }
        
                       
                        
        
                    }).catch(function (error) {
                        console.warn('Something went wrong.', error);
                    });


                }, 800);//timeout end
                
                

            }
        }//End of singlefunction()


  
