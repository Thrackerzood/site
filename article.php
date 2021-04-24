<!DOCTYPE html>
<html lang="ru">
<head>
   <meta charset="UTF-8">
   <link rel="preconnect" href="https://fonts.gstatic.com">
   <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="styleArticle.css">
   <script src="article.js" defer></script>
   <title>Document</title>
</head>
<body>
<main>
      <ul>
         <li><a href="#">Что посмотреть</a></li>
         <li><a href="#">Аниме</a></li>
         <li><a href="#">Полнометражное</a></li>
         <li><a href="#">Сериалы</a></li>
         <li><a href="#" class="registrationButton">Вход</a></li>
      </ul>
   </main>
   <section class="registration"></section>
   <?php
   $data = [];
   $id = $_GET['id'];
   $where = "where `id` = ".$id;
   $db = new mysqli('localhost', 'root', '','anime_db');
   $res = mysqli_query($db,"select * from `anime_serials` $where");
   while($row = mysqli_fetch_assoc($res)){
      $data = $row;
   }
?>
<section class="allTitle">
   <section class="container1">
         <img src="<?php echo $data['picture']?>">
         <section class="sub-container1">
         <p class="animeName"><?php echo $data['name'] ?></p>
         <p class="animeAuthor"><?php echo $data['author'] ?></p>
         <p class="animeRating"><?php echo $data['rating'] ?></p>
         </section>
      </section>
   <section class="container2">
         <p class="animeGenre"><?php echo $data['genre'] ?></p>
         <p class="animeStatus"><?php echo $data['status'] ?></p>
         <p class="animeYear"><?php echo $data['year'] ?></p>
      </section>
   <section class="container3">
         <p class="animeInfoP"><?php echo $data['description'] ?></p>
   </section>
</section>
   <footer></footer>
</body>
</html>