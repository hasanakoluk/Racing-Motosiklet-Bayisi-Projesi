const loginImput = document.getElementById("loginImput")
const loginPass = document.getElementById("loginPass")
const loginBtn = document.querySelector(".loginBtn")
const yazi = document.getElementById("yazi")
const page = document.querySelector(".page")


if(loginBtn){
    loginBtn.addEventListener("click",function login(){

        if(localStorage.getItem("kayitlar")){
            let getir = JSON.parse(localStorage.getItem("kayitlar"))
            for( let i of getir){
               if(loginImput.value != i.ad  &&  loginPass.value != i.sifre){
                   yazi.textContent = "kullanıcı bulunamadı"
                   yazi.classList.toggle("text-danger")
                   
              }else{
                  loginImput.value = i.ad
                  loginPass.value = i.sifre
                  yazi.textContent = "Giriş yaptınız"
                  yazi.style.color = "success"
                  window.location.href = "index.html"
              }
     
            }
        }
    })
}


