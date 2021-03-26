let myText = "hello world"; //strings

document.getElementById("demo").innerHTML = "My Favorite Korean Movie";

//FIRST IMFORMATION

document.getElementById("button").addEventListener("click", function() {
    document.getElementById("detail").innerHTML = "PARASITE / BONG JOON-HO";
  })

  //SECOND IMFORMATION

  //LAST IMFORMATION


//new image
  let newch = document.querySelector(".newch");

  //the word halfway
  let increaseNewchImage = document.querySelector('.new-poster');
  
  increaseNewchImage.addEventListener("mouseover",function(){
    newch.classList.add("active");
  });
  
  increaseNewchmage.addEventListener("mouseout",function(){
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

  let  = document.querySelector(".dogs");

  //the word halfway
  let increaseDogImage = document.querySelector('.bigger-dogs');
  
  increaseDogImage.addEventListener("mouseover",function(){
   dogs.classList.add("active");
  });
  
  increaseDogImage.addEventListener("mouseout",function(){
      dogs.classList.remove("active");
  });