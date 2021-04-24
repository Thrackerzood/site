<?php


$db = new mysqli('localhost', 'root', '','anime_db');

$res3 = mysqli_query($db,'select * from `anime_serials` order by ID desc limit 5');
$data3 = array();
while($row = mysqli_fetch_assoc($res3)){
   $data3[] = $row;
}

echo json_encode($data3);
?>