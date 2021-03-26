// define our first variable
//when someone clicks on the red circle, we want the background to turn red


// define our first variable

document.getElementById("demo").innerHTML = "My Favorite Korean Movie";

//FIRST IMFORMATION

document.getElementById("button").addEventListener("click", function() {
    document.getElementById("detail").innerHTML = "PARASITE / BONG JOON-HO";
  })

  //SECOND IMFORMATION
  document.getElementById("button").addEventListener("click", function() {
    document.getElementById("detail").innerHTML = "PARASITE / BONG JOON-HO";
  })

  //LAST IMFORMATION
  document.getElementById("button").addEventListener("click", function() {
    document.getElementById("detail").innerHTML = "PARASITE / BONG JOON-HO";
  })

  //SECNOND IMAGE START 
  
  let newch = document.querySelector(".newch");

  //the word halfway
  let increaseNewchImage = document.querySelector('.new-poster');
  
  increaseNewchImage.addEventListener("mouseover",function(){
    newch.classList.add("active");
  });
  
  increaseNewchImage.addEventListener("mouseout",function(){
      newch.classList.remove("active");
  });

  

  //second image
 
  let two = document.querySelector(".two");

  //the word halfway
  let increaseTwoImage = document.querySelector('.second-poster');
  
  increaseTwoImage.addEventListener("mouseover",function(){
    two.classList.add("active");
  });
  
  increaseTwoImage.addEventListener("mouseout",function(){
      two.classList.remove("active");
  });


  // last image 
  let last = document.querySelector(".last");

  let increaseLastImage = document.querySelector('.last-poster');
  
  increaseLastImage.addEventListener("mouseover",function(){
    last.classList.add("active");
  });
  
  increaseLastImage.addEventListener("mouseout",function(){
      last.classList.remove("active");
  });