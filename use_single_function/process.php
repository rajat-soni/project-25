<?php

$servername = "localhost";
$username = "root";
$password = "";
$db = "test";
// Create connection
$conn = new mysqli($servername, $username, $password, $db);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
//echo "Connected successfully";


//print_r($_POST);

if(isset($_POST["req_type"])){

if(  $_POST["req_type"] === "check_username" ){


    if(strlen($_POST["username"]===0)){
        echo "empty";
        
    }else{

        $username=$_POST["username"];
        $check="SELECT * FROM db_users WHERE username = '$username';";
        $rs = mysqli_query($conn,$check);
           if($rs->num_rows){
           echo "username is not available";
           }else{
           echo "username is available";
       
           }

    }




}


if(  $_POST["req_type"] === "submit_form" ){

    $username=$_POST["username"];
    $email=$_POST["email"];
    $password=$_POST["password"];

    if(strlen($username) == 0  || strlen($password) == 0 || strlen($email) == 0 ){
        echo "please fill all data";
        
    }else{

            $sql = "INSERT INTO db_users (`username`,  `email`, `password`) VALUES ('$username', '$email', '$password')";

            if ($conn->query($sql) === TRUE) {
            echo "Registration Completed.";
            } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
            }
    }
   




}  


}//req_type


$conn->close();
?>