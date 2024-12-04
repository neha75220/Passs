let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");

function generateQR(){
    if(qrText.value.length>0){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
        + qrText.value;
        imgBox.classList.add("show-img")
    }else{
        qrText.classList.add("error")
        setTimeout(()=>{
            qrText.classList.remove("error")
        },1000)
    }
  
}




//////////////////////////////////////////////
let popup = document.getElementById("popup")

function openPopup(){
    popup.classList.add("open-popup")
}
function closePop(){
    popup.classList.remove("open-popup")
}


////////////////////////////////////////////////
let eyeicon= document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function(){
    if(password.type=="text"){
        password.type="password";
        eyeicon.src="open.png";
    }
    else{
        password.type="text";
        eyeicon.src="close.png";
    }
}
//////////////////////////////////////
document.getElementById("#clock")
let todaydate = new Date();
console.log(todaydate.toLocaleTimeString())



setInterval(function(){
    let todaydate= new Date()

    clock.innerHTML = todaydate.toLocaleTimeString('en-IN');


},1000)