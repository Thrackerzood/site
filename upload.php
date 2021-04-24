<?php


$db = new mysqli('localhost', 'root', '','anime_db');

$res1 = mysqli_query($db,'select * from `anime_serials`');
$data1 = array();
while($row = mysqli_fetch_assoc($res1)){
   $data1[] = $row;
}

echo json_encode($data1);
?>