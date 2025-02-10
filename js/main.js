document.addEventListener("DOMContentLoaded", function() {
    let canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", window.location.href);
    document.head.appendChild(canonical);
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/js/sw.js")
    .then(() => console.log("Service Worker Registered"))
    .catch((error) => console.log("Service Worker Registration Failed", error));
}

/* -------------------
testimonials slider
----------------------*/
function testimonialsSlider () {
    const carouselOne = document.getElementById('carouselOne');
    if (carouselOne){ /* if the element is exists*/
    carouselOne.addEventListener('slid.bs.carousel', function () {
const activeItem = this.querySelector(".active");
// document.querySelector(".js-testimonials-img").src = 
        document.querySelector(".js-testimonials").src =
        activeItem.getAttribute("data-js-testimonials-img");
})
    }
}
testimonialsSlider(); 


/* -----------------------------------------------------
style switcher
-------------------------------------------*/
function styleSwitcherToggle() {
    const styleSwitcher = document.querySelector(".js-style-switcher"),
    styleSwitcherToggler = document.querySelector(".js-style-switcher-toggler");
    styleSwitcherToggler.addEventListener("click", function() {
    styleSwitcher.classList.toggle("open");
    this.querySelector("i").classList.toggle("fa-times");
    this.querySelector("i").classList.toggle("fa-cog");
   })
}
styleSwitcherToggle();

/* ---------------------------
theme color
--------------------------- */

function themeColor() {
    const colorStyle = document.querySelector(".js-color-style"),
    themeColorContainer = document.querySelector(".js-theme-colors");
themeColorContainer.addEventListener("click", ({target}) => {
    if(target.classList.contains("js-theme-color-item")) {
        localStorage.setItem("color", target.getAttribute("data-js-theme-color"));
       setColor();
    }
// console.log(target);
}); 
function setColor() {
    let path = colorStyle.getAttribute("href").split("/");
    path = path.slice(0, path.length-1);
    colorStyle.setAttribute("href", path.join("/") + "/" + localStorage.getItem("color") + ".css")
if(document.querySelector(".js-theme-color-item.active")){
    document.querySelector(".js-theme-color-item.active").classList.remove("active");
}
document.querySelector("[data-js-theme-color= " + localStorage.getItem("color") + "]").classList.add("active");
}    
 if (localStorage.getItem("color") !== null) {
  setColor();
 }
 else {
    const defaultColor = colorStyle.getAttribute("href").split("/").pop().split(" ").shift();
    document.querySelector("data-js-theme-color=" + defaultColor + "]").classList.add("active");
 }
}
themeColor();

/* theme light & dark mode */
function themeLightDark() {
const darkModeCheckBox = document.querySelector(".js-dark-mode");
darkModeCheckBox.addEventListener("click", function() {
   if(this.checked){
    localStorage.setItem("theme-dark", "true");
    }
    else {
        localStorage.setItem("theme-dark", "false");

    }
    themeMode();
});
function themeMode() {
    if(localStorage.getItem("theme-dark") === "false") {
        document.body.classList.remove("t-dark");
    }
    else {
        document.body.classList.add("t-dark");
    }
}
if(localStorage.getItem("theme-dark") !== null) {
    themeMode();
} 
if(document.body.classList.contains("t-dark")) {
    darkModeCheckBox.checked = true;
}
}
themeLightDark();

/* glass effect */
function  themeGlassEffect(){
    const glassEffectCheckBox = document.querySelector(".js-glass-effect"),
    glassStyle = document.querySelector(".js-glass-style");
    glassEffectCheckBox.addEventListener("click", function(){
        if(this.checked) 
        {
            localStorage.setItem("glass-effect", "true");
        }
        else
        {
            localStorage.setItem("glass-effect", "false");
        }

        glass();
    
});

function glass(){
    if (localStorage.getItem("glass-effect") === "true")
     {
      glassStyle.removeAttribute("disabled");
    }
    else {
        glassStyle.disabled = true;
         } 
    }
    if(localStorage.getItem("glass-effect") !== null) {
        glass();
    }
    if(glassStyle.hasAttribute("disabled")) {
        glassEffectCheckBox.checked = true;
    }
}
themeGlassEffect();
