function valid(){
    console.log("it works");
    var form = document.getElementById("form");
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
    //error text
    let fnameerror=document.getElementById("fnameerror");
    let lnameerror=document.getElementById("lnameerror");
    let emailerror=document.getElementById("emailerror");
    let passworderror=document.getElementById("pwerror");
  // error image
    let fnameimgerror=document.getElementById("fnameerrorimg");
    let lnameimgerror=document.getElementById("lnameerrorimg");
    let emailimgerror=document.getElementById("emailerrorimg");
    let pwimgerror=document.getElementById("pwerrorimg");



    if(email.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        emailimgerror.style.visibility = "hidden";
    }
    else{
      form.classList.remove("valid");
      form.classList.add("invalid");
      emailimgerror.style.visibility = "visible";
      emailerror.style.visibility="visible";
    }
    
    if(fname== " "){
    //   form.classList.remove("valid");
    //   form.classList.add("invalid");
      fnameimgerror.style.visibility = "visible";
      fnameerror.innerHTML="First name abt be empty.";          
  }
    if(lname== " "){
    //   form.classList.remove("valid");
    //   form.classList.remove("invalid");
      lnameimgerror.style.visibility = "visible";
      lnameerror.style.visibility="visible";
    }
    // if(email== null){
    //   form.classList.remove("valid");
    //   form.classList.remove("invalid");            emailimgerror.style.visibility = "visible";
    //   emailimgerror.style.visibility = "visible";
    //   emailerror.style.visibility="visible";
    // }
    if(password.length<8 ){
    //form.classList.remove("valid");
    //form.classList.remove("invalid");
      passworderror.style.visibility="visible";
      pwimgerror.style.visibility = "visible";
    }
    
}