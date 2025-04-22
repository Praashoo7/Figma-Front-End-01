/* THEME */

const toggleSwitchsecond = document.querySelector('.theme-switch-second input[type="checkbox"]');

function bgChangeFade(ID){
    if(ID == "mainBG"){
        document.getElementById("mainBGDark").style.opacity = 0
        document.getElementById("mainBG").style.opacity = 1
    } else if(ID == "mainBGDark"){
        document.getElementById("mainBGDark").style.opacity = 1
        document.getElementById("mainBG").style.opacity = 0
    }
}

toggleSwitchsecond.addEventListener('change', switchTheme, false);
function switchTheme(e) {
  if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      bgChangeFade("mainBGDark")
  }
  else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      bgChangeFade("mainBG")
  }    
}
const currentThemeSecond = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentThemeSecond) {
    document.documentElement.setAttribute('data-theme', currentThemeSecond);

    if (currentThemeSecond === 'dark') {
        toggleSwitchsecond.checked = true;
        bgChangeFade("mainBGDark")
    }
    else if (currentThemeSecond === 'light') {
        bgChangeFade("mainBG")
    }
}


/* HAM */

document.getElementById("navButtonsHam").addEventListener('click', () => {

    document.getElementById("hamLine1").style.transform = "rotate(45deg) translateY(0.25em) translateX(0.25em)"
    document.getElementById("hamLine2").style.opacity = 0
    document.getElementById("hamLine3").style.transform = "rotate(-45deg) translateY(-0.3em) translateX(0.3em)"

    document.getElementById("overlay").style.display = "block";
    setTimeout(() => {
        document.getElementById("overlay").style.opacity = 1;
    }, 400);

    setTimeout(() => {
        document.getElementById("homeHam").style.opacity = 1;
        document.getElementById("homeHam").style.transform = "translateX(0em)"
    }, 500);
    setTimeout(() => {
        document.getElementById("productsHam").style.opacity = 1;
        document.getElementById("productsHam").style.transform = "translateX(0em)"
    }, 600);
    setTimeout(() => {
        document.getElementById("aboutHam").style.opacity = 1;
        document.getElementById("aboutHam").style.transform = "translateX(0em)"
    }, 700);
    setTimeout(() => {
        document.getElementById("contactHam").style.opacity = 1;
        document.getElementById("contactHam").style.transform = "translateX(0em)"
    }, 800);
    setTimeout(() => {
        document.getElementById("themeHam").style.opacity = 1;
        document.getElementById("themeHam").style.transform = "translateX(0em)"
    }, 900);
})
document.getElementById("cross").addEventListener('click', () => {

    document.getElementById("hamLine1").style.transform = "rotate(0deg) translateY(0em) translateX(0em)"
    document.getElementById("hamLine2").style.opacity = 1
    document.getElementById("hamLine3").style.transform = "rotate(0deg) translateY(-0em) translateX(0em)"

    document.getElementById("overlay").style.opacity = 0;
    setTimeout(() => {
        document.getElementById("overlay").style.display = 'none';
        document.getElementById("homeHam").style.opacity = 0;
        document.getElementById("homeHam").style.transform = "translateX(0.5em)"
        document.getElementById("productsHam").style.opacity = 0;
        document.getElementById("productsHam").style.transform = "translateX(0.5em)"
        document.getElementById("aboutHam").style.opacity = 0;
        document.getElementById("aboutHam").style.transform = "translateX(0.5em)"
        document.getElementById("contactHam").style.opacity = 0;
        document.getElementById("contactHam").style.transform = "translateX(0.5em)"
        document.getElementById("themeHam").style.opacity = 0;
        document.getElementById("themeHam").style.transform = "translateX(0.5em)"
    }, 400);
})


/* VIDEO-SCROLL */

const container = document.getElementById("videoWrapper")
const iframes = document.querySelectorAll("iframe")
const total = iframes.length
let currentIndex = 0

const iframeStyle = getComputedStyle(iframes[0])
const iframeWidth = iframes[0].offsetWidth
const gap = parseFloat(iframeStyle.marginRight || "0")
const totalWidth = iframeWidth + gap

function scrollToIndex(index){
    container.scrollTo({ left : totalWidth * index, behavior: "smooth" })
}

document.getElementById("moveLeft").addEventListener('click', () => {
    currentIndex = ( currentIndex - 1 + total ) % total;
    scrollToIndex(currentIndex)
})

document.getElementById("moveRight").addEventListener('click', () => {
    currentIndex = ( currentIndex + 1 ) % total;
    scrollToIndex(currentIndex)
})