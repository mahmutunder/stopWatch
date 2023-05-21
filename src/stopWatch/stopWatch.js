var mi=document.getElementById("mi");
var saniye=document.getElementById("saniye");

var basla=document.getElementById("basla");
var sifirla=document.getElementById("sifirla");

var setTimer;

basla.addEventListener("click", function(){
    if(setTimer===undefined){

    setTimer=setInterval(timer,10);
    basla.innerHTML="Stop";
    
    }else{
        basla.innerHTML="Start";
        stop();
        setTimer=undefined;

    }
})

function timer(){
    mi.innerHTML++;
    if(mi.innerHTML==99){
        
        saniye.innerHTML++;
       
        mi.innerHTML="0";

        
       
    
    }
  
    
    
}


sifirla.addEventListener("click", function(){
    stop();
    mi.innerHTML=0;
    saniye.innerHTML=0;
    basla.innerHTML="Start";
    setTimer=undefined;
    saniye.style.boxShadow="0 0 0 red";

    
})

function stop(){
    clearInterval(setTimer);
    
 
}