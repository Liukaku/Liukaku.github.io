window.onscroll = function () { scrollFunction() }

function scrollFunction() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrolled = (winScroll / height) * 100
    
  document.getElementById('progress-bar').style.height = scrolled + '%';
}

// this selects the elements and creates an easy to grab variable
const tramPro = document.getElementById('tramPro')
const newsPro = document.getElementById('newsPro')
const dashPro = document.getElementById('dashPro')
const conNav = document.getElementById('conNav')
const headerName = document.getElementById('headerName')
const techAnchor = document.getElementById('techAnchor')
const contactAnchor = document.getElementById('contactable')


//this is a helper function to check to see if an element you pass into it is on the page
//it returns true or false
const isInViewport = function (element) {
  // returns the position in the window/viewport (and it's size including padding & border)
  const bounding = element.getBoundingClientRect()
  return (
    bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  )
}

window.addEventListener('scroll', function (ev) {
  if (isInViewport(tramPro) || isInViewport(newsPro) || isInViewport(dashPro)) {
    document.getElementById('proNav').classList.add('hidden')
    document.getElementById('homeNav').classList.remove('hidden')
    } else {
    document.getElementById('proNav').classList.remove('hidden')
    }
  if (isInViewport(headerName)) {
    document.getElementById('homeNav').classList.add('hidden')
    document.getElementById('proNav').classList.remove('hidden')
    document.getElementById('conNav').classList.remove('hidden')
    } else {
    document.getElementById('homeNav').classList.remove('hidden')
    document.getElementById('conNav').classList.remove('hidden')
    }
  if (isInViewport(techAnchor)) {
    document.getElementById('detailsNav').classList.add('hidden')
    document.getElementById('conNav').classList.remove('hidden')
    } else {
    document.getElementById('detailsNav').classList.remove('hidden')
    document.getElementById('conNav').classList.remove('hidden')
  }
})
