const slider = function () {
  const slides = document.querySelectorAll(".slide")
  const btnLeft = document.querySelector(".slider-btn--left")
  const btnRight = document.querySelector(".slider-btn--right")
  const dotContainer = document.querySelector(".dots")

  let currentSlide = 0
  const maxSlide = slides.length

  // funciones
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots-dot" data-slide="${i}"></button>`
      )
    })
  }

  // cambia el estilo para diferenciar el activo
  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots-dot")
      .forEach(dot => dot.classList.remove("dots-dot--active"))

    document
      .querySelector(`.dots-dot[data-slide="${slide}"]`)
      .classList.add("dots-dot--active")
  }

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    )
  }

  // siguiente slide
  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0
    } else {
      currentSlide++
    }
    goToSlide(currentSlide)
    activateDot(currentSlide)
  }

  // slide anterior
  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1
    } else {
      currentSlide--
    }
    goToSlide(currentSlide)
    activateDot(currentSlide)
  }

  // funcion que corre al principio y setea la primer slide y el primer boton como activo
  const init = function () {
    goToSlide(0)
    createDots()
    activateDot(0)
  }
  init()

  // event handlers
  btnRight.addEventListener("click", nextSlide)
  btnLeft.addEventListener("click", prevSlide)

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide()
    e.key === "ArrowRight" && nextSlide()
  })

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots-dot")) {
      const { slide } = e.target.dataset
      console.log(slide)
      goToSlide(slide)
      activateDot(slide)
      currentSlide = Number(slide)
    }
  })
  setInterval(() => {
    nextSlide()
  }, 7000)
}
slider()
