var h1text=document.getElementById("myh1");
h1text.onmouseover=function(){
    h1text.innerHTML="Real Soon!";
    h1text.style.fontSize="80px";
    h1text.style.color="red";
}
h1text.onmouseout=function(){
    h1text.innerHTML="Coming up Soon...";
    h1text.style.fontSize="30px";
    h1text.style.color="white";
}
