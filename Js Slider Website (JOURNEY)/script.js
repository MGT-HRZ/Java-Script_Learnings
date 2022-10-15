// Picture slider
  const buttons = document.querySelectorAll("[data-slider-button]")

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const offset = button.dataset.sliderButton === "next" ? 1 : -1
      const slides = button
        .closest("[data-slider]")
        .querySelector("[data-slides]")

      const activeSlide = slides.querySelector("[data-active]")
      let newIndex = [...slides.children].indexOf(activeSlide) + offset
      if (newIndex < 0) newIndex = slides.children.length - 1
      if (newIndex >= slides.children.length) newIndex = 0

      slides.children[newIndex].dataset.active = true
      delete activeSlide.dataset.active
    })
  })

// Box content declaration
  var v_noa = document.getElementById("box1")
  var v_soa = document.getElementById("box2")
  var v_eu = document.getElementById("box3")
  var v_asi = document.getElementById("box4")
  var v_afr = document.getElementById("box5")
  var v_aus = document.getElementById("box6")
  var v_ant = document.getElementById("box7")
  var v_shift = document.getElementById("shift-btn")

// Function button North America
  function noa() {
    v_noa.style.left = "0px"
    v_soa.style.left = "1500px"
    v_eu .style.left = "1500px"
    v_asi.style.left = "1500px"
    v_afr.style.left = "1500px"
    v_aus.style.left = "1500px"
    v_ant.style.left = "1500px"
    v_shift.style.left = "0px"
  }

// Function button South America
  function soa() {
    v_noa.style.left = "-1500px"
    v_soa.style.left = "0px"
    v_eu .style.left = "1500px"
    v_asi.style.left = "1500px"
    v_afr.style.left = "1500px"
    v_aus.style.left = "1500px"
    v_ant.style.left = "1500px"
    v_shift.style.left = "185px"
  }

// Function button Europe
  function eu() {
    v_noa.style.left = "-1500px"
    v_soa.style.left = "-1500px"
    v_eu .style.left = "0px"
    v_asi.style.left = "1500px"
    v_afr.style.left = "1500px"
    v_aus.style.left = "1500px"
    v_ant.style.left = "1500px"
    v_shift.style.left = "370px"
  }

// Function button Asia
  function asi() {
    v_noa.style.left = "-1500px"
    v_soa.style.left = "-1500px"
    v_eu .style.left = "-1500px"
    v_asi.style.left = "0px"
    v_afr.style.left = "1500px"
    v_aus.style.left = "1500px"
    v_ant.style.left = "1500px"
    v_shift.style.left = "555px"
  }

// Function button Africa
  function afr() {
    v_noa.style.left = "-1500px"
    v_soa.style.left = "-1500px"
    v_eu .style.left = "-1500px"
    v_asi.style.left = "-1500px"
    v_afr.style.left = "0px"
    v_aus.style.left = "1500px"
    v_ant.style.left = "1500px"
    v_shift.style.left = "740px"
  }

// Function button Australia
  function aus() {
    v_noa.style.left = "-1500px"
    v_soa.style.left = "-1500px"
    v_eu .style.left = "-1500px"
    v_asi.style.left = "-1500px"
    v_afr.style.left = "-1500px"
    v_aus.style.left = "0px"
    v_ant.style.left = "1500px"
    v_shift.style.left = "925px"
  }

// Function button Antartica
  function ant() {
    v_noa.style.left = "-1500px"
    v_soa.style.left = "-1500px"
    v_eu .style.left = "-1500px"
    v_asi.style.left = "-1500px"
    v_afr.style.left = "-1500px"
    v_aus.style.left = "-1500px"
    v_ant.style.left = "0px"
    v_shift.style.left = "1095px"
  }