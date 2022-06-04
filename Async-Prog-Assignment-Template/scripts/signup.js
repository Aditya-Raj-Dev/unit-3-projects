function home(){
    window.location.href="index.html"
}

function login(){
    window.location.href="login.html"
}

var form=document.getElementById("form")
form.addEventListener("submit",formsubmit)

function data(n,c,e,p){
    this.name=n;
    this.contact=c;
    this.email=e;
    this.pass=p
}
var arr= JSON.parse(localStorage.getItem("data")) || []
function formsubmit(event){
    event.preventDefault()
    var name=form.name.value;
    var contact=form.contact.value;
    var email= form.email.value;
    var pass=form.pass.value;
if(name== "" || contact=="" || email=="" || pass== ""){
    alert("please fill the form")
}
else{
    var d1= new data(name,contact,email,pass)
    arr.push(d1)
    localStorage.setItem("data",JSON.stringify(arr))
    
    window.location.href="login.html"
}
    
}


