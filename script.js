const toggleButton = document.querySelector('.toggle');
const burgerMenu = document.querySelector('.hamburger__menu');
const nav = document.querySelector('.navbar__links');
const navLinks = document.querySelectorAll('.navbar__links a');
const chevronScroll = document.querySelectorAll('.chevron')
const chevronScrollTwo = document.querySelectorAll('.chevron-two')
let projectTitles = document.querySelectorAll('.menuitem')
let projectImages = document.querySelectorAll('.item');


clickNavLink();

function clickNavLink () {
navLinks.forEach((navLink) => {

   navLink.addEventListener('click', (event) => {

      let currentLink = document.getElementsByClassName('active-link')
     
       if (currentLink.length > 0) {
         currentLink[0].classList.remove('active-link');
       }
       event.target.classList.add('active-link');
      })  
     
   })

}


clickBurgerMenu();

function clickBurgerMenu () {

   burgerMenu.addEventListener('click', () => {
      nav.classList.toggle('active-nav')
   })
}


clickToggleButton();

function clickToggleButton () {

   toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('changeColour')
   })
}


clickChevronScroll();

function clickChevronScroll () {
   chevronScroll.forEach((chevron) => {

      chevron.addEventListener('click', () => {
         window.scrollTo({ top: 969, behavior: 'smooth' })       
      })
   })

   chevronScrollTwo.forEach((chevronTwo) => {
      chevronTwo.addEventListener('click', () => {
         window.scrollTo({ top: 1950, behavior: 'smooth' })   
      })
   })
}

clickProjectTitle();

function clickProjectTitle () {

   projectTitles.forEach((title) => {

      title.addEventListener('click', (event) => {

         let currentTitle = document.getElementsByClassName('active')
        
     
         if (currentTitle.length > 0) {
         currentTitle[0].classList.remove('active');
       }
       event.target.classList.add('active'); 
        
       showProjectImages();
     })  
    
})

}


function showProjectImages () {
projectImages.forEach((image) => {
   let titleId = event.target.id 
   let projectShowImages = `project-${titleId}`
   image.id === projectShowImages ? image.style.display = 'block': image.style.display = 'none'

})
}

