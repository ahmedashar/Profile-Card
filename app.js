var darkModeIcon = document.getElementById("dark_mode_icon");
var lightModeIcon = document.getElementById("light_mode");
var introPara = document.getElementById("intro");
var userName = document.getElementById("name");
var email = document.getElementById("mail");
var spanString = document.getElementById("span");
var iconInDark = document.querySelectorAll('.icon_dark_mode');

var modeTextShow = document.getElementById('mode_text');


function darkMode(){

    darkModeIcon.style.visibility="hidden";
    lightModeIcon.style.visibility="visible";

    document.getElementById("card").style.backgroundColor="#25245c";
    introPara.style.color = "white";
    userName.style.color = "white";
    email.style.backgroundColor = "#6B62B9";
    spanString.style.color = "#948ECC";
    
    // iconInDark.style.color = "";
    
    iconInDark.forEach(Icon => {
        Icon.style.color = '#A79BDF';
        
      });
      
    }
function lightMode(){
    
    darkModeIcon.style.visibility="visible";
    lightModeIcon.style.visibility="hidden";
    
    
    document.getElementById("card").style.backgroundColor="white";
    introPara.style.color = "black";
    userName.style.color = "black";
    email.style.backgroundColor = "#25245c";
    spanString.style.color = "black";
    
    
    iconInDark.forEach(Icon => {
        Icon.style.color = '#27245e';
        
      });
}


function modeText(){
   modeTextShow.innerText = "APPLY DARK MODE";
   darkModeIcon.style.color="white"
   darkModeIcon.style.backgroundColor="#25245c"
}
function removeText(){
  modeTextShow.innerText = "";
  darkModeIcon.style.color="#25245c"
   darkModeIcon.style.backgroundColor="white"
  
}

function lightModeText(){
  
   lightModeIcon.style.color="#25245c"
   lightModeIcon.style.backgroundColor="#f9d101"
}
function lightRemoveText(){
 
  lightModeIcon.style.color="#f9d101"
   lightModeIcon.style.backgroundColor="#25245c"
  
}