window.onload = function(){
  document.querySelector(".menu__mobile").addEventListener("click", function(){
    if(document.querySelector(".header__menu ul").style.display == 'flex') {
      document.querySelector(".header__menu  ul").style.display = 'none'
    } else {
      document.querySelector(".header__menu ul").style.display = 'flex'
    }
  });
};