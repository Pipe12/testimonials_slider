const testimonials = [
  {
    id: 0,
    quote: `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`,
    autor: `Tanya Sinclair`,
    autorTitle: `UX Engineer`,
    imageSrc: `./images/image-tanya.jpg`
  },
  {
    id: 1,
    quote: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
    autor: `John Tarkpor`,
    autorTitle: `Junior Front-end Developer`,
    imageSrc: `./images/image-john.jpg`
  }
]

let testimonialImg = document.getElementById('testimonial__img')
let testimonialText = document.getElementById('testimonial__text')
let testimonialAutorName = document.getElementById('testimonial__autor-name')
let testimonialAutorTitle = document.getElementById('testimonial__autor-title')

function loadTestimonialInfo(testimonial) {
  testimonialImg.src = testimonial.imageSrc
  testimonialText.innerHTML = testimonial.quote
  testimonialAutorName.innerHTML = testimonial.autor
  testimonialAutorTitle.innerHTML = testimonial.autorTitle
}

let indexTestimonial = 0

const buttonPrev = document.getElementById('button_prev')
buttonPrev.onclick = () => {
  if (indexTestimonial === 0) {
    indexTestimonial = testimonials.length - 1
  } else {
    indexTestimonial--
  }
  loadTestimonialInfo(testimonials[indexTestimonial])
}

const buttonNext = document.getElementById('button_next')
buttonNext.onclick = () => {
  if (indexTestimonial === testimonials.length - 1) {
    indexTestimonial = 0
  } else {
    indexTestimonial++
  }
  loadTestimonialInfo(testimonials[indexTestimonial])
}

loadTestimonialInfo(testimonials[0])
