window.onload = () =>{
    "use strict";
    const csInterface = new CSInterface();
    const switchMode = Array.from(document.getElementsByClassName("switchMode"));
    const forms = Array.from(document.getElementsByClassName("form"));
    const callDog = document.getElementById("callDog");
    const callCat = document.getElementById("callCat");

    switchMode.forEach(btn=> {
        btn.addEventListener("click",function(){
            if(this.id==="main")csInterface.resizeContent(300,200);
            if(this.id==="sub")csInterface.resizeContent(500,300);
            forms.forEach(form=> form.classList.toggle("hide"));
        });
    });

    callCat.addEventListener("click",()=>{
        csInterface.evalScript("saySomething('meows')");
    });

    callDog.addEventListener("click",()=>{
        csInterface.evalScript("saySomething('woof')");
    });
}