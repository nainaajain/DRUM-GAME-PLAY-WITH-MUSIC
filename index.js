var numfordrums= document.querySelectorAll(".drum").length;
// this is button detection 
for (var i=0; i<numfordrums ;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var keyinnerhtml=this.innerHTML;
         makesound(keyinnerhtml);
         buttonAnimation(keyinnerhtml);
        
    });
    

}
// this is for keypresses detection 
document.addEventListener("keypress",function(event){

    makesound(event.key);
    buttonAnimation(event.key);
    
    })
    // here key argument is for both button and keyboard presses
   function makesound(key){ switch (key) {                   
    case "w":
        var audio= new Audio("sounds/tom-1.mp3");
        audio.play();
        
        break;
        case "a":
        var audio= new Audio("sounds/tom-2.mp3");
        audio.play();
        
        break;
        case "s":
        var audio= new Audio("sounds/tom-3.mp3");
        audio.play();
        
        break;
        case "d":
        var audio= new Audio("sounds/tom-4.mp3");
        audio.play();
        
        break;
        case "j":
        var audio= new Audio("sounds/snare.mp3");
        audio.play();
        
        break;
        case "k":
        var audio= new Audio("sounds/crash.mp3");
        audio.play();
        
        break;
        case "l":
        var audio= new Audio("sounds/kick-bass.mp3");
        audio.play();
        
        break;
        

    default:
        console.log(keyinnerhtml);
        break;
        
}

}
//  now to give delay and to create animation for few seconds and it returns to its orginal 
// state we use settimeout 
    function buttonAnimation(currentkey){
        var activebutton= document.querySelector("."+currentkey);
        activebutton.classList.add("pressed");
        // timer setting up for 100
        setTimeout(function(){
            activebutton.classList.remove("pressed");
        },100);
        
    };

