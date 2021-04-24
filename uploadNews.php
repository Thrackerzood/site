<?php


$db = new mysqli('localhost', 'root', '','anime_db');

$res2 = mysqli_query($db,'select * from `news_for_site`');
$data2 = array();
while($row = mysqli_fetch_assoc($res2)){
   $data2[] = $row;
}

echo json_encode($data2);
?>