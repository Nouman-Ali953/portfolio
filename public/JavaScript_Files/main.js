  var sc = document.querySelector("nav");


 window.addEventListener('scroll',()=>{



    if(sc.style.top == '1%'){
        sc.classList.remove("color");
        sc.classList.add("coloor");
    }else {
    
        sc.classList.add("color");
    }

  })

  // var video = document.querySelectorAll("video");

  var menu = document.getElementById("menu").addEventListener('click',()=>{
    document.querySelector("nav ul").classList.toggle("menu-show");
    document.querySelector(".images").classList.toggle("main-pic-margin")
  })

  

  