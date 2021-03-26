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
  })
  
  increaseNewchmage.addEventListener("mouseout",function(){
      newch.classList.remove("active");
  })

  

  //second image
 
  let twoim = document.querySelector(".twoim");

  //the word halfway
  let increaseTwoimImage = document.querySelector('.second-poster');
  
  increaseTwoimImage.addEventListener("mouseover",function(){
    twoim.classList.add("active");
  })
  
  increaseTwoimImage.addEventListener("mouseout",function(){
      twoim.classList.remove("active");
  })