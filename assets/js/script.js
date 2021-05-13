window.onload=function(){
    document.getElementsByClassName("mobile-show-menu")[0].addEventListener("click",showorhidenav);
   
}

function showorhidenav(){
    document.getElementsByClassName("navbar-inner")[0].classList.toggle("hide-mobile");
}