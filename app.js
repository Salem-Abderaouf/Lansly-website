var closeButton = document.getElementById('header-close-button')
var openButton = document.getElementById('header-open-button')
var navScreen = document.getElementById('nav-screen')

openButton.onclick = () => {
  navScreen.style.display = "flex"
}

closeButton.onclick = () => {
  navScreen.style.display = 'none'
  navScreen.classList.add('hidden')
}