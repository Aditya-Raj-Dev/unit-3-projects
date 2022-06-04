function home(){
    window.location.href="index.html"
}
function signup(){
    window.location.href="signup.html"
}

var form=document.getElementById("form")
form.addEventListener("submit",loginfunction)

function logindata(e,p){
    this.email=e;
    this.pass=p
}
var arr=[]
var data= JSON.parse(localStorage.getItem("data"))

function loginfunction(event){
 event.preventDefault()
 email=form.email.value;
 pass=form.pass.value;
 var c=0;
for(var i=0; i<data.length; i++){
    if(email==data[i].email  && pass == data[i].pass){
        c=0
        alert("Login sucess")
      window.location.href="index.html"
      break;
    }
    else {
        c=1
    }
}
if(c==1){
    alert("invalid Credentials")
}


}

