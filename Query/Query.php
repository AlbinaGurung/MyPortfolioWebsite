<?php
session_start();

$server="localhost";
$username="root";
$password="";
$dbname="Portfolio_DB";
$conn=new mysqli($server,$username,$password,$dbname);

if($conn->connect_error)
{
    die("connection failed".$conn->connect_error);
}
else{
    echo"connection successful";
}
if($_SERVER["REQUEST_METHOD"]=="POST")
{
    $name=$_POST['name'];
    $email=$_POST['email'];
    $subject=$_POST['subject'];
    $message=$_POST['message'];

    $sql="Insert into Query_tbl(Name,Email,Subject,Message)values(?,?,?,?)";
    $stmt=$conn->prepare($sql);
    $stmt->bind_param("ssss",$name,$email,$subject,$message);
    if($stmt->execute())
    {
        $_SESSION['form-submitted']=true;
       header("Location:Submitted.html");
     exit;
    }
    else
    {
        echo "error" . $conn->error;
    }
    if(!isset($_SESSION['form-submitted'])|| !$_SESSION['form-submitted'])
    {
      header("Location:Query.html");
    }
    

    // if($conn->query($sql)==true)
    // {
    //    echo"data submitted successfully";
    //     header("Location:Submitted.html");
    // }
    // else
    // {
    //     echo "error" . $conn->error;
    // }

   // if (!isset($_SESSION['form_submitted']) || !$_SESSION['form_submitted']) {

}
$conn->close();






?>
