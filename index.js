const selectBayi = document.querySelector(".selectBayi")
const bayiBul = document.querySelector(".bayiBul")
const wrapperiki = document.querySelector(".wrapperiki")


let bayiler = [
    {
        'adı':'MotoHayat',
        'Adres':'İzmir',
        'Tel':'0232 056 56 56'
    },
    {
        'adı':'Motoist',
        'Adres':'İstanbul',
        'Tel':'0212 057 56 56'
    },
    {
        'adı':'Motoank',
        'Adres':'Ankara',
        'Tel':'0233 048 56 56'
    },
    {
        'adı':'Motoden',
        'Adres':'Denizli',
        'Tel':'0213 056 56 56'
    },
    {
        'adı':'Motoküt',
        'Adres':'Kütahya',
        'Tel':'0416 051 56 56'
    },
    {
        'adı':'Motobol',
        'Adres':'Bolu',
        'Tel':'0268 081 56 56'
    },
    {
        'adı':'Motoant',
        'Adres':'Antalya',
        'Tel':'0331 059 56 56'
    },
    {
        'adı':'Motomer',
        'Adres':'Mersin',
        'Tel':'0232 056 56 56'
    },
    {
        'adı':'Motokon',
        'Adres':'Konya',
        'Tel':'0342 051 56 56'
    },
    {
        'adı':'Motoman',
        'Adres':'Manisa',
        'Tel':'0218 018 56 56'
    }
]

 
bayiler.forEach(bayi =>{
    const option = document.createElement("option")
    option.textContent = bayi.Adres
    option.value = bayi.Adres
    selectBayi.append(option)

})
   

bayiBul.addEventListener("click", () =>{
    wrapperiki.innerHTML = ""
    if(selectBayi.value !=""){
        let item = selectBayi.value
     bayiler.forEach(i =>{
        if(i.Adres == item){
            let adi = i.adı
            let adres = i.Adres
            let tel = i.Tel
            
           const card = document.createElement("div")
           card.classList.add("card")
           card.innerHTML = 
           `
           <div class="card  m-auto" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${adi}</h5>
                  <p class="card-text">${adres}</p>
                  <p class="card-text">${tel}</p>
                </div>
              </div>
           `
            wrapperiki.append(card)
        }
     })
      
    }
})