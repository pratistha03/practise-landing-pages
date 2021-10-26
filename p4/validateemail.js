document.write('<h1>i am js</h1>');
function valid(){
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;//for email validation

    if(email.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML="You have successfully registered."
        text.style.color="#00ff00";
    }
    else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML="Please provide a valid email";
        text.style.color="#ff0000";
    }
    if(email= ""){
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML=" ";
        text.style.color="#00ff00";
    
    } 
}