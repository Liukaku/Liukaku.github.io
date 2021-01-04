window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    
    document.getElementById("progress-bar").style.height = scrolled + "%";

}

//this selects the elements and creates an easy to grab variable
var tramPro = document.getElementById('tramPro');
var newsPro = document.getElementById('newsPro');
var dashPro = document.getElementById('dashPro');
var headerName = document.getElementById('headerName');
var techAnchor = document.getElementById('techAnchor');


//this is a helper function to check to see if an element you pass into it is on the page
//it returns true or false
var isInViewport = function (element) {
    //returns the position in the window/viewport (and it's size including padding & border)
    var bounding = element.getBoundingClientRect();
    return(
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    )
};

window.addEventListener('scroll', function(ev) {
    if (isInViewport(tramPro) || isInViewport(newsPro) || isInViewport(dashPro)) {
        document.getElementById('proNav').classList.add("hidden");
        document.getElementById('homeNav').classList.remove("hidden");
    } else {
        document.getElementById('proNav').classList.remove("hidden"); 
    }
    if (isInViewport(headerName)) {
            document.getElementById('homeNav').classList.add("hidden");
            document.getElementById('proNav').classList.remove("hidden");
    } else {
        document.getElementById('homeNav').classList.remove("hidden"); 
    }
    if (isInViewport(techAnchor)) {
        document.getElementById('detailsNav').classList.add("hidden");
    } else {
        document.getElementById('detailsNav').classList.remove("hidden");
    }
        
})
