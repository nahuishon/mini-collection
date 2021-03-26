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
 
  let memo = document.querySelector(".memo");

  //the word halfway
  let increaseMemoImage = document.querySelector('.second-poster');
  
  increaseMemoImage.addEventListener("mouseover",function(){
    memo.classList.add("active");
  })
  
  increaseMemoImage.addEventListener("mouseout",function(){
      memo.classList.remove("active");
  })