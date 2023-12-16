const input = document.getElementById("input")
const password = document.getElementById("password")
const signBtn = document.querySelector(".signBtn")

function oneSign(){
    let kayitlar = JSON.parse(localStorage.getItem("kayitlar"))
    if(!kayitlar){
         localStorage.setItem("kayitlar","[]")
    }
}
oneSign()
if(signBtn){
    signBtn.addEventListener("click", function kayit(){
    
        if(input.value.trim() != "" && password.value.trim() != ""){
            let kayitlar = JSON.parse(localStorage.getItem("kayitlar"))
            let kullanici = {
                ad:input.value,
                sifre:password.value
            }
            kayitlar.push(kullanici)
            localStorage.setItem("kayitlar",JSON.stringify(kayitlar))
            
        }
        
    })
}