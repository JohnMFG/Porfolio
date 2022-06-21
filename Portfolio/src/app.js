const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
    console.log('labas')
}

hamburgerButton.addEventListener('click', toggleButton)
console.log('labas');