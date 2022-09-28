const d = document;
/*=============== SHOW MENU ===============*/
const navToggle = d.getElementById('nav-toggle'),
      navClose = d.getElementById('nav-close'),
      navMenu = d.getElementById('nav-menu')

d.addEventListener('click', e =>{
  if(e.path[1] === navToggle){
    navMenu.classList.add('show-menu')
  }
  if(e.path[1] === navClose){
    navMenu.classList.remove('show-menu')
  }
})

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = d.querySelectorAll('.nav__link')

const linkAction = () =>{
  const navMenu = d.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(link => link.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
  const header = d.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('bg-header')
                     : header.classList.remove('bg-header')
}

window.addEventListener('scroll', scrollHeader)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = d.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = d.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = d.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400
})

sr.reveal(`.home__data, .footer__container, .footer__group`)
sr.reveal(`.home__img`, {delay: 700, origin: 'bottom'})
sr.reveal(`.logos__img, .program__card, .pricing__card`, {interval: 100})
sr.reveal(`.choose__img, .calculate__content`, {origin: 'left'})
sr.reveal(`.choose__content, .calculate__img`, {origin: 'right'})

/*=============== CALCULATE JS ===============*/
const calculateForm = d.getElementById('calculate-form'),
      calculateCm = d.getElementById('calculate-cm'),
      calculateKg = d.getElementById('calculate-kg'),
      calculateMessage = d.getElementById('calculate-message')

const calculateBmi = (e) =>{
  e.preventDefault()
  // Check if the fields have a value
  if(calculateCm.value === '' || calculateKg.value === ''){
    // Add and remove color
    calculateMessage.classList.remove('color-green')
    calculateMessage.classList.add('color-red')

    // Show message
    calculateMessage.textContent = 'Fill in the Height and Weight 👆'

    // Remove message three seconds
    setTimeout(() => {
      calculateMessage.textContent = ''
    }, 3000);
  } else{
    // BMI Formula
    const cm = calculateCm.value / 100,
          kg = calculateKg.value,
          bmi = Math.round(kg / (cm * cm))

    // Show your health status
    if (bmi < 18.5) {
      // Add color and display message
      calculateMessage.classList.add('color-green')
      calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny`
    } else if (bmi  < 25){
      calculateMessage.classList.add('color-green')
      calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy`
    } else{
      calculateMessage.classList.add('color-green')
      calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight`
    }

    // To clear the input field
    calculateCm.value = ''
    calculateKg.value = ''

    // Remove message four seconds
    setTimeout(() => {
      calculateMessage.textContent = ''
    }, 4000);
  }
}

calculateForm.addEventListener('submit', calculateBmi)

/*=============== EMAIL JS =============== */
const contactForm = d.getElementById('contact-form'),
      contactMessage = d.getElementById('contact-message'),
      contactUser = d.getElementById('contact-user')

const sendEmail = (e) =>{
  e.preventDefault()

  // Check if the field has a value
  if(contactUser.value === ''){
    // Add and remove color
    contactMessage.classList.remove('color-green')
    contactMessage.classList.add('color-red')

    // Show message
    contactMessage.textContent = 'You must enter your email'

    // Remove message three seconds
    setTimeout(() => {
      contactMessage.textContent = ''
    }, 3000);
  } else {
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_rskaf1n', 'template_6h3gnqs', '#contact-form', 'xSzVv_c_584fkCkUD')
      .then(() =>{
        // Show message and add color
        contactMessage.classList.remove('color-red')
        contactMessage.classList.add('color-green')
        contactMessage.textContent = 'You registered successfully'

        // Remove message after three seconds
        setTimeout(() => {
          contactMessage.textContent = ''
        }, 3000);
      }, (error) => {
        // Mail sending error
        alert('OOPS! SOMETHING HAS FAILED...', error)
      });

      // To clear the input field
      contactUser.value = ''
  }
}

contactForm.addEventListener('submit', sendEmail)

































