const toggleButton = document.querySelector('.toggle');
const burgerMenu = document.querySelector('.hamburger__menu');
const nav = document.querySelector('.navbar__links');
const navLinks = document.querySelectorAll('.navbar__links a');
const chevronScroll = document.querySelectorAll('.chevron')
const chevronScrollTwo = document.querySelectorAll('.chevron-two')
let projectTitles = document.querySelectorAll('.menuitem')
let projectImages = document.querySelectorAll('.item');





pressBurgerMenu();

function pressBurgerMenu () {

   burgerMenu.addEventListener('click', () => {
      nav.classList.toggle('active-nav')
   })
}

pressToggleButton();

function pressToggleButton () {

   toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('changeColour')
   })
}


pressChevronScroll();

function pressChevronScroll () {
   chevronScroll.forEach((chevron) => {

      chevron.addEventListener('click', () => {
         window.scrollTo({ top: 775, behavior: 'smooth' })       
      })
   })

   chevronScrollTwo.forEach((chevronTwo) => {
      chevronTwo.addEventListener('click', () => {
         window.scrollTo({ top: 1550, behavior: 'smooth' })   
      })
   })
}




 projectTitles.forEach((title) => {


   title.addEventListener('click', (event) => {
      
      let current = document.getElementsByClassName('active')

       if (current.length > 0) {
         current[0].classList.remove('active');
       }
       event.target.classList.add('active'); 

       showImages();



       

     }) 

   
})




function showImages () {
projectImages.forEach((image) => {

   let titleId = event.target.id
  
   let projectShowImages = `project-${titleId}`

   image.id === projectShowImages ? image.style.display = 'inline-block': image.style.display = 'none'







})
}

//i want to hover over project title and have the corresponding pictures show only