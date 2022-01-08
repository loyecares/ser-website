
var loader = document.getElementById('loader-img');
var preloader = document.getElementById('loader-wrapper');
var home = document.getElementById('home');
var test = document.getElementById('kkk');
document.cookie = "witcher=Geralt; SameSite=None; Secure"
function addClass() {
  loader.classList.add('active');
  setTimeout(display, 2000)   
  function display(){ 
     preloader.style.display = "none";
     home.style.display = "block";
     /* test.style.display = "none"; */
     setTimeout(check, 2000)

     }
     function check(){
      test.style.display = "block"
      test.classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-2s', 'animate__slow');
     }
   

  }

  function openNav() {
   document.getElementById("myNav").style.width = "100%";
 }
 
 function closeNav() {
   document.getElementById("myNav").style.width = "0%";
 }

