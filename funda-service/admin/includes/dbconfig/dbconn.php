<?php

$con=mysqli_connect('172.18.0.3','root','786110','clothdatabase');
if($con){
    echo "connected success";
}
else{
die(mysqli_error($con));}


?>