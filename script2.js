let isThis = document.getElementById('section-1-1-drophead1');
let whatIs = document.getElementById('section-1-1-drophead2');

let isThisDrop = document.getElementById('section-1-1-dropdown1');
let whatIsDrop = document.getElementById('section-1-1-dropdown2');

isThis.addEventListener('click', expandIsThis);
whatIs.addEventListener('click', expandWhatIs)

function expandIsThis(){
  isThisDrop.classList.toggle('open');
}

function expandWhatIs(){
  whatIsDrop.classList.toggle('open');
}



// menu

let menuBurger = document.getElementById('menu-burger');
let menu = document.getElementById('menu');

menuBurger.addEventListener('click', openMenu);

let isMenuOpen = '0';

function openMenu(){
   

   if (isMenuOpen === '0'){
    menu.style.display = "block";
    menuBurger.src = "x-lg.svg";
    isMenuOpen = '1';
    console.log(isMenuOpen);
    
   } else if (isMenuOpen === '1'){
    menu.style.display = "none";
    menuBurger.src = "list.svg";
    isMenuOpen = '0';
    console.log(isMenuOpen);
   }

}





let navLinks = document.getElementsByClassName('nav-link');

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', openMenu);
}



// cta

let ctaBtn = document.getElementById("cta-btn");

let chvTLLrg = document.getElementById("chevron-top-left-lrg");
let chvBtmRLarg = document.getElementById("chevron-btm-right-lrg");

ctaBtn.addEventListener("mouseover", lrgChevronOut);
ctaBtn.addEventListener("mouseleave", lrgChevronIn);
ctaBtn.addEventListener("mousedown", lrgChevronIn);
ctaBtn.addEventListener("mouseup", lrgChevronOut);


function lrgChevronOut() {
  chvTLLrg.style.top = "-5px";
  chvTLLrg.style.left = "-5px";
  chvBtmRLarg.style.bottom = "-5px";
  chvBtmRLarg.style.right = "-5px";
}
function lrgChevronIn() {
  chvTLLrg.style.top = "0px";
  chvTLLrg.style.left = "0px";
  chvBtmRLarg.style.bottom = "-2px";
  chvBtmRLarg.style.right = "-2px";
}

//cta 2

let ctaBtn2 = document.getElementById("cta-btn2");

let chvTLLrg2 = document.getElementById("chevron-top-left-lrg2");
let chvBtmRLarg2 = document.getElementById("chevron-btm-right-lrg2");

ctaBtn2.addEventListener("mouseover", lrgChevronOut2);
ctaBtn2.addEventListener("mouseleave", lrgChevronIn2);
ctaBtn2.addEventListener("mousedown", lrgChevronIn2);
ctaBtn2.addEventListener("mouseup", lrgChevronOut2);

function lrgChevronOut2() {
  chvTLLrg2.style.top = "-5px";
  chvTLLrg2.style.left = "-5px";
  chvBtmRLarg2.style.bottom = "-5px";
  chvBtmRLarg2.style.right = "-5px";
}
function lrgChevronIn2() {
  chvTLLrg2.style.top = "0px";
  chvTLLrg2.style.left = "0px";
  chvBtmRLarg2.style.bottom = "-2px";
  chvBtmRLarg2.style.right = "-2px";
}

// header tag

window.onload = function() {
  headerSwipe();
  
};




function headerSwipe() {
  let headerTag1 = document.getElementById('header-tag-1');
  let headerTag2 = document.getElementById('header-tag-2');

   headerTag1.style.opacity = '0';
   headerTag2.style.opacity = '0';
  
  
  setTimeout(function(){
    headerTag1.style.opacity = '1';
    headerTag1.style.transform = 'translateX(0px)';
  }, 500)

  setTimeout(function(){
    headerTag2.style.opacity = '1';
    headerTag2.style.transform = 'translateX(0px)';
  }, 1000)
}