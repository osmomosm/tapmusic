window.addEventListener('load',()=>{
    const sounds=document.querySelectorAll(".sound");
    const pads=document.querySelectorAll(".pads div");
    const visual=document.querySelector(".visual");
    const colors=[
        "rgb(15, 110, 74)",
        "rgb(182, 31, 56)",
        "rgb(201, 26, 177)",
        "rgb(192, 181, 31)",
        "rgb(14, 68, 219)",
        "rgb(45, 118, 121)",
        "rgb(54, 22, 21)",
        "rgb(74, 11, 126)",
        "rgb(159, 212, 33)"
    ];

    //sounds here
   pads.forEach((pad,index) => {
       pad.addEventListener("click",function(){
           sounds[index].currentTime=0;
           sounds[index].play();
           createBubbles(index);
       });
   });

   //create a function that creates bubbles
   const createBubbles =(index)=>{
       const bubble=document.createElement("div");
       visual.appendChild(bubble);
       bubble.style.backgroundColor=colors[index];
       bubble.style.animation="jump is ease";
       bubble.addEventListener('animationend',function(){
           visual.removeChild(this);
       });
   };
});