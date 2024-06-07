const ham_nav_open = document.getElementById('ham-nav-open')
const ham_nav_close = document.getElementById('ham-nav-close')
const ham_nav = document.getElementById('ham-nav')

ham_nav_open.addEventListener('click', () => {
  ham_nav.classList.add('show')
})
ham_nav_close.addEventListener('click', () => {
  ham_nav.classList.remove('show')
})