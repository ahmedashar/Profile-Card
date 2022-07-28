var darkModeIcon = document.getElementById("dark_mode_icon");
var lightModeIcon = document.getElementById("light_mode");
var introPara = document.getElementById("intro");
var userName = document.getElementById("name");
var email = document.getElementById("mail");
var spanString = document.getElementById("span");
var iconInDark = document.querySelectorAll('.icon_dark_mode');
var iconsSpan = document.querySelectorAll('.icons-span');
// var profileImg = document.getElementById('profile-img')
var modeTextShow = document.getElementById('mode_text');

f
function darkMode(){
   
   darkModeIcon.style.visibility="hidden";
   lightModeIcon.style.visibility="visible";
   
   darkModeIcon.style.transition="none"
   modeTextShow.innerText = "";
   
   document.getElementById("card").style.backgroundColor="#25245c";
   introPara.style.color = "white";
   userName.style.color = "white";
   email.style.backgroundColor = "#6B62B9";
    spanString.style.color = "#948ECC";
    
    // iconInDark.style.color = "";
    
    iconInDark.forEach(Icon => {
        Icon.style.color = '#A79BDF';
        
      });
    iconsSpan.forEach(iSpan => {
        iSpan.style.color = '#A79BDF';
        
      });
      
   }
function lightMode(){
    
   darkModeIcon.style.visibility="visible";
   lightModeIcon.style.visibility="hidden";
    
   lightModeIcon.style.transition="none"
   
   document.getElementById("card").style.backgroundColor="white";
   introPara.style.color = "black";
   userName.style.color = "black";
   email.style.backgroundColor = "#25245c";
   spanString.style.color = "black";
   
   
   iconInDark.forEach(Icon => {
       Icon.style.color = '#27245e';
       
      });
      iconsSpan.forEach(iSpan => {
          iSpan.style.color = '#27245e';
          
        });
}

// for dark mode icon (onmouseover)
function modeText(){
   
   modeTextShow.innerText = "APPLY DARK MODE";
   
   darkModeIcon.style.transition="0.5s"
   darkModeIcon.style.color="white"
   darkModeIcon.style.backgroundColor="#25245c"
}
// for dark mode icon (onmouseout)
function removeText(){
   modeTextShow.innerText = "";
   darkModeIcon.style.color="#25245c"
   darkModeIcon.style.backgroundColor="white"
   
}

function lightModeText(){
   
   lightModeIcon.style.transition="0.5s"
   lightModeIcon.style.color="#25245c"
   lightModeIcon.style.backgroundColor="#f9d101"
}
function lightRemoveText(){
   
   lightModeIcon.style.color="#f9d101"
   lightModeIcon.style.backgroundColor="#25245c"
  
}



