const navBtn = document.getElementById('nav-btn')
const nav = document.getElementById('nav')
const btnOpen = document.getElementById('btn-open')
const btnClose = document.getElementById('btn-close')

let isNavOpened = false

function toggleMenu() {
  isNavOpened = !isNavOpened

  if (isNavOpened) {
    document.documentElement.scrollTop = 0
    nav.classList.add('opened')
    document.body.classList.add('no-scroll')
    btnOpen.classList.add('hidden')
    btnClose.classList.remove('hidden')
  } else {
    nav.classList.remove('opened')
    document.body.classList.remove('no-scroll')
    btnOpen.classList.remove('hidden')
    btnClose.classList.add('hidden')
  }
}

navBtn.addEventListener('click', toggleMenu)
