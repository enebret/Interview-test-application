//get elements
//display only the selected index, while others should be hidden
//after 2 secs the next element should be displayed while others remain hidden
//use .map to chnage display to block after 2 secs
var t = document.getElementById("wide");
var g = document.getElementById("cide")
var h = document.getElementById("vide")
var p = document.getElementById("xide")
var u = document.getElementById("hide")

var fr = [t, g, h, p, u]

    fr[0].style.display = "block";
    fr[1].style.display = "none"
    fr[2].style.display = "none"
    fr[3].style.display = "none"
    fr[4].style.display = "none"
    setInterval(function swap(){
        if(fr[0].style.display=="block"){
          fr[1].style.display="block";
        fr[0].style.display="none";
        fr[2].style.display="none";
      }else if(fr[1].style.display=="block"){
        fr[2].style.display="block";
        fr[0].style.display="none";
        fr[1].style.display="none";
      }else if(fr[2].style.display=="block"){
        fr[3].style.display="block";
        fr[0].style.display="none";
            fr[1].style.display = "none";
            fr[2].style.display="none";
      }else if(fr[3].style.display=="block"){
        fr[4].style.display="block";
        fr[0].style.display="none";
            fr[1].style.display = "none";
            fr[2].style.display = "none";
            fr[3].style.display="none";
      }else if(fr[4].style.display=="block"){
        fr[0].style.display="block";
        fr[4].style.display="none";
      }
     }, 2000)






    //convert to new array
    //set interval
    //if elem = block , destructure the next element and change to block, and map others to none
    //
