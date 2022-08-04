window.onload = function() {
  window.onscroll = function() {
        scroll();
    }

    function scroll() {
        if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            document.getElementById("btn").style.background ="rgb(255, 193, 7)";
            document.getElementById("btn").style.border ="none";
            document.getElementById("btn").style.color ="rgb(0,0,0)";
    
        }
        else {
            document.getElementById("btn").style.background= "rgb(25, 25, 25)";
            document.getElementById("btn").style.border ="white 1px solid";
            document.getElementById("btn").style.color ="rgb(255,255,255)";
        }
    }
  
}