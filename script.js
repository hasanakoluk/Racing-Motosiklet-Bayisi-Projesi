// const input = document.getElementById("input")
// const password = document.getElementById("password")
// const signBtn = document.querySelector(".signBtn")
// const wrapper = document.querySelector(".wrapper")
// const select =  document.querySelector(".formSelect")

// const loginImput = document.getElementById("loginImput")
// const loginPass = document.getElementById("loginPass")
// const loginBtn = document.querySelector(".loginBtn")
// const yazi = document.getElementById("yazi")
// const page = document.querySelector(".page")
// const sepet = document.querySelector(".sepet")

// const selectBayi = document.querySelector(".selectBayi")
// const bayiBul = document.querySelector(".bayiBul")
// const wrapperiki = document.querySelector(".wrapperiki")


// let dizi = []
// function oneSign(){
//     let kayitlar = JSON.parse(localStorage.getItem("kayitlar"))
//     if(!kayitlar){
//          localStorage.setItem("kayitlar","[]")
//     }
// }
// oneSign()
// if(signBtn){
//     signBtn.addEventListener("click", function kayit(){
    
//         if(input.value.trim() != "" && password.value.trim() != ""){
//             let kayitlar = JSON.parse(localStorage.getItem("kayitlar"))
//             let kullanici = {
//                 ad:input.value,
//                 sifre:password.value
//             }
//             kayitlar.push(kullanici)
//             localStorage.setItem("kayitlar",JSON.stringify(kayitlar))
            
//         }
        
//     })
// }

  
// if(loginBtn){
//     loginBtn.addEventListener("click",function login(){

//         if(localStorage.getItem("kayitlar")){
//             let getir = JSON.parse(localStorage.getItem("kayitlar"))
//             for( let i of getir){
//                if(loginImput.value != i.ad  &&  loginPass.value != i.sifre){
//                    yazi.textContent = "kullanıcı bulunamadı"
//                    yazi.classList.toggle("text-danger")
//                    window.location.reload()
//               }else{
//                   loginImput.value = i.ad
//                   loginPass.value = i.sifre
//                   yazi.textContent = "Giriş yaptınız"
//                   yazi.style.color = "success"
                  
//               }
     
//             }
//         }
//     })
// }
    
    
//     select.addEventListener("change", function markaSec(){
//         yazdir()
//    })
   
//  racing.forEach(item => {

//     if(item.marka == "kawasaki"){
//         let option = document.createElement("option")
//         option.textContent = item.model
//         option.value =  item.model
//         select.append(option)
//     }
//     if(item.marka == "Honda"){
//         let option = document.createElement("option")
//         option.textContent = item.model
//         option.value = item.model
//         select.append(option)
//     }
//     if(item.marka == "Yamaha"){
//         let option = document.createElement("option")
//         option.textContent = item.model
//         option.value =  item.model
//         select.append(option)
//     }
//     if(item.marka == "Suzuki"){
//         let option = document.createElement("option")
//         option.textContent = item.model
//         option.value =  item.model
//         select.append(option)
//     }

// })

    
// function yazdir(){
   
//     racing.forEach(item =>{
//         let img = item.img
//         let marka =item.marka
//         let model = item.model
//         let yil = item.yil
//         let tip = item.tip

//          const card = document.createElement("div")
//      card.classList.add("card")
//      card.innerHTML = 
//      `
//      <img class="card-img-top w-50 m-auto bg-none resim" src="${img}" alt="Card image cap">
//             <div class="card-body ">
//               <h5 class="card-title marka">${marka}</h5>
//               <p class="card-text model">${model}</p>
//               <p class="card-text yil">${yil}</p>
//               <p class="card-text tip">${tip}</p>
//               <button href="#" class="btn btn-primary w-50 d-flex justify-content-center m-auto tikla">Sepete Ekle</button>
//      </div>
      
//      `
//      wrapper.append(card)
//     })
   
//     const butonlar = document.querySelectorAll(".tikla")
//      butonlar.forEach(btn =>{
//         btn.addEventListener("click", function(){
//            let card = this.parentElement.parentElement
//            let resim = card.querySelector(".resim").src
//            let marka = card.querySelector(".marka").textContent
//            let model = card.querySelector(".model").textContent
//            let yil = card.querySelector(".yil").textContent
//            let tip = card.querySelector(".tip").textContent
//            console.log(resim,marka,model,yil,tip)
//            const div = document.createElement("div")
//            div.innerHTML = 
//            `
//            <img style="width:100px;" src="${resim}" alt="">
//            <p>${marka}</p>
//            <p>${model}</p>
//            <p>${yil}</p>
//            <p>${tip}</p>
//            <p class="sil text-danger me-2">Sil</p>
           
//            `
          
//            sepet.append(div)

//            const siller = document.querySelectorAll(".sil")
//         siller.forEach(sil =>{
//             sil.addEventListener("click",function(){
//                let marka = this.parentElement.children[1].textContent
//               let esles = dizi.filter(oge => oge.marka != marka)
//               dizi = esles
//               this.parentElement.remove()
//               console.log(dizi)
//             })
//         })
          
//         })
        
//      })
     
// }

// let bayiler = [
//     {
//         'adı':'MotoHayat',
//         'Adres':'İzmir',
//         'Tel':'0232 056 56 56'
//     },
//     {
//         'adı':'Motoist',
//         'Adres':'İstanbul',
//         'Tel':'0212 057 56 56'
//     },
//     {
//         'adı':'Motoank',
//         'Adres':'Ankara',
//         'Tel':'0233 048 56 56'
//     },
//     {
//         'adı':'Motoden',
//         'Adres':'Denizli',
//         'Tel':'0213 056 56 56'
//     },
//     {
//         'adı':'Motoküt',
//         'Adres':'Kütahya',
//         'Tel':'0416 051 56 56'
//     },
//     {
//         'adı':'Motobol',
//         'Adres':'Bolu',
//         'Tel':'0268 081 56 56'
//     },
//     {
//         'adı':'Motoant',
//         'Adres':'Antalya',
//         'Tel':'0331 059 56 56'
//     },
//     {
//         'adı':'Motomer',
//         'Adres':'Mersin',
//         'Tel':'0232 056 56 56'
//     },
//     {
//         'adı':'Motokon',
//         'Adres':'Konya',
//         'Tel':'0342 051 56 56'
//     },
//     {
//         'adı':'Motoman',
//         'Adres':'Manisa',
//         'Tel':'0218 018 56 56'
//     }
// ]

 
// bayiler.forEach(bayi =>{
//     const option = document.createElement("option")
//     option.textContent = bayi.Adres
//     option.value = bayi.Adres
//     selectBayi.append(option)

// })
   

// bayiBul.addEventListener("click", () =>{
//     if(selectBayi.value !=""){
        
//         let item = selectBayi.value
//      bayiler.forEach(i =>{
//         if(i.Adres == item){
//             let adi = i.adı
//             let adres = i.Adres
//             let tel = i.Tel
            
//            const card = document.createElement("div")
//            card.classList.add("card")
//            card.innerHTML = 
//            `
//            <div class="card  m-auto" style="width: 18rem;">
//                 <div class="card-body">
//                   <h5 class="card-title">${adi}</h5>
//                   <p class="card-text">${adres}</p>
//                   <p class="card-text">${tel}</p>
//                 </div>
//               </div>
//            `
//             wrapperiki.append(card)
//         }
//      })
      
//     }
// })

  
