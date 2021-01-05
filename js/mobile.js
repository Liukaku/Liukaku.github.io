document.getElementById('mobile-pro').addEventListener('click', () => {
  document.getElementById('pro1-details').classList.toggle('visible')
  document.getElementById('mobile-details').classList.toggle('hideMe')
  document.getElementById('mobile-details').classList.toggle('pulsing')
})

document.getElementById('mobile-pro2').addEventListener('click', () => {
  document.getElementById('pro1-details2').classList.toggle('visible')
  document.getElementById('mobile-details2').classList.toggle('hideMe')
  document.getElementById('mobile-details2').classList.toggle('pulsing')
})

document.getElementById('mobile-pro3').addEventListener('click', () => {
  document.getElementById('pro1-details3').classList.toggle('visible')
  document.getElementById('mobile-details3').classList.toggle('hideMe')
  document.getElementById('mobile-details3').classList.toggle('pulsing')
})

document.getElementById('mobile-pro4').addEventListener('click', () => {
  document.getElementById('pro1-details4').classList.toggle('visible')
  document.getElementById('mobile-details4').classList.toggle('hideMe')
  document.getElementById('mobile-details4').classList.toggle('pulsing')
})

document.getElementById('newsPro').addEventListener('click', () => {
  document.getElementById('red-box').classList.toggle('visible')
  console.log('click')
})

const windowWidth = window.innerWidth
const windowHeight = window.innerHeight * 1.1 + 'px';

if (windowWidth < 600) {
  document.getElementById('second-page').style.height = 'auto';
  document.getElementById('grid-box').style.height = 'auto';
  console.log('loading mobile...')
}
