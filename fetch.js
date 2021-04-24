const title = document.querySelector('.container_info')
const newsContainer = document.querySelector('.presently')
const newAnime = document.querySelector('.newAnime')

//all title  
function ContentLoad(){
   return fetch('http://localhost/js/upload.php')
   .then(response => response.json())
}
ContentLoad().then(data =>{
   for(let key of data){
      console.log(key)
      let a = document.createElement('a')
      a.classList.add('title')
      let img = document.createElement('img')
      a.href = '/js/article.php?id=' + key.id
      title.appendChild(a).appendChild(img).src = key.picture
      a.appendChild(document.createElement('p')).textContent = key.name
   }
})
//new title
function newTitle(){
   return fetch('http://localhost/js/uploadNews.php')
   .then(response => response.json())
}
newTitle().then(data => {
   for(let key of data){
      let newsTitle = document.createElement('a')
      newsTitle.classList.add('news')
      let newsImg = document.createElement('img')
      newsTitle.href = key.head
      newsContainer.appendChild(newsTitle).appendChild(newsImg).src = key.picture
      let newsText = key.text.slice(0,100)
      newsTitle.appendChild(document.createElement('p'))
      .textContent = newsText += '... смотреть в источнике'
   }
})
//news
function news(){
   return fetch('http://localhost/js/uploadNewTitle.php')
   .then(response => response.json())
}
news().then( data => {
   for (let key of data){
     let a = document.createElement('a')
     a.classList.add('newTitle')
     let img = document.createElement('img')
     a.href = '/js/article.php?id=' + key.id
     newAnime.appendChild(a).appendChild(img).src = key.picture
     a.appendChild(document.createElement('p')).textContent = key.name
   }
})
//go title

