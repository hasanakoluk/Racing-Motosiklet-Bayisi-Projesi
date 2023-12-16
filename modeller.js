const wrapper = document.querySelector(".wrapper")
const select =  document.querySelector(".formSelect")
const sepet = document.querySelector(".sepet")


let dizi = []


    select.addEventListener("change", function markaSec(){
        yazdir(select.value)
    })




racing.forEach(item =>{
    const option = document.createElement("option")
    option.textContent = item.marka
    option.value = item.marka
    select.append(option)
    
})


function yazdir(){
  wrapper.innerHTML = ""
if(select.value !=""){
    let item = select.value
 racing.forEach(i =>{
    if(i.marka == item){
        let img = i.img
        let marka =i.marka
        let model = i.model
        let yil = i.yil
        let tip = i.tip
        
       const card = document.createElement("div")
       card.classList.add("card")
       card.innerHTML = 
       `
       <img class="card-img-top w-50 m-auto bg-none  resim" src="${img}" alt="Card image cap">
    <div class="card-body ">
      <h5 class="card-title marka">${marka}</h5>
       <p class="card-text model">${model}</p>
       <p class="card-text yil">${yil}</p>
      <p class="card-text tip">${tip}</p>
      <button href="#" class="tikla btn btn-primary w-50 d-flex justify-content-center m-auto">Sepete Ekle</button>
     </div>
       `
        wrapper.append(card)
        
    }
    
 })
  
}

const butonlar = document.querySelectorAll(".tikla")
butonlar.forEach(btn =>{
   
    btn.addEventListener("click", function(){

       let card = this.parentElement.parentElement
       let resim = card.querySelector(".resim").src
       let marka = card.querySelector(".marka").textContent
       let model = card.querySelector(".model").textContent
       let yil = card.querySelector(".yil").textContent
       let tip = card.querySelector(".tip").textContent
        console.log(resim,marka,model,yil,tip)
       const div = document.createElement("div")
       div.innerHTML = 
       `
      
       <img style="width:100px;" src="${resim}" alt="">
       <p>${marka}</p>
       <p>${model}</p>
       <p>${yil}</p>
       <p>${tip}</p>
       <p class="sil text-danger me-2">Sil</p>
      
       `
      
       sepet.append(div)

       const siller = document.querySelectorAll(".sil")
    siller.forEach(sil =>{
        sil.addEventListener("click",function(){
           let marka = this.parentElement.children[1].textContent
          let esles = dizi.filter(oge => oge.marka != marka)
          dizi = esles
          this.parentElement.remove()
          console.log(dizi)
        })
    })
      
    })
    
 })
 
}
