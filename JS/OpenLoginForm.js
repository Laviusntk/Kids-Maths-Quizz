function expandForm(){
    $("#openSignUpForm").click(function(){
    	alert("hi"),
    	$("#login").fadeOut("slow"),
    	$("#signUp").fadeIn("slow");
    });
    $("#closeSignUpForm").click(function(){
    	alert("hi"),
    	$("#signUp").fadeOut("slow"),
    	$("#login").fadeIn("slow");
    });    
}
/*
// retrieve the element
element = document.getElementById("logo");

// reset the transition by...
element.addEventListener("click", function(e){
  e.preventDefault;
  
  // -> removing the class
  element.classList.remove("run-animation");
  
  // -> triggering reflow  //The actual magic 
  // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
  element.offsetWidth = element.offsetWidth;
  
  // -> and re-adding the class
  element.classList.add("run-animation");
}, false);
*/
