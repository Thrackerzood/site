let newsDate = document.querySelector('.date')
let header = document.querySelector('.header')
let date = new Date();
let registrationButton = document.querySelector('.registrationButton')
let arr = ['"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."']

window.addEventListener('load', ()=>{
const yy = date.getFullYear()
const mm = date.getMonth() + 1;
const dd = date.getDate()
newsDate.innerHTML += ` за: ${dd}.${mm}.${yy}`
header.appendChild(document.createElement('p')).textContent = arr
})

