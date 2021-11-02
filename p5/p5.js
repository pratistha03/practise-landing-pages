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
        emailimgerror.style.visibility = "hidden";
    }
    else{
    emailimgerror.style.visibility = "visible";
      emailerror.style.visibility="visible";
    }
    
    if(fname= " "){
    fnameimgerror.style.visibility = "visible";
    fnameerror.style.visibility="visible";  
    }
    // else{
    //     fnameimgerror.style.visibility = "hidden";
    //     fnameerror.style.visibility="hidden"; 
    // }
    if(lname= " "){
    lnameimgerror.style.visibility = "visible";
    lnameerror.style.visibility="visible";
  }
//   else{
//     lnameimgerror.style.visibility = "hidden";
//     lnameerror.style.visibility="hidden";
//   }
    
    if(password.length < 8 ){
        passworderror.style.visibility="visible";
      pwimgerror.style.visibility = "visible";
    }
    
}