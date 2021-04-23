const requestURL = 'http://localhost/js/upload.php'
const xhr = new XMLHttpRequest()


window.addEventListener('load', ()=>{
request(xhr,requestURL)
   .then(data =>{
      for(let key of data){
         console.log(key.picture)
         document.body.appendChild(document.createElement('img'))
         .src = key.picture
      }
   })
   .catch( err => {
      console.log(err)
   })
});

function request(xhr,requestURL){
   return new Promise((resolve,reject)=>{
      xhr.open('GET', requestURL)
      xhr.responseType = 'json'
      xhr.onload = () =>{
         if(xhr.status >= 400){
            reject(xhr.response)
         }else{
            resolve(xhr.response)
         }
         xhr.onerror = () => {
            reject(xhr.response,true)
         }  
      }
      xhr.send()
   })
}