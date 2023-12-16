const beden = document.querySelectorAll(".boyut")

beden.forEach(item =>{
    item.addEventListener("click",()=>{
         let oge = item.parentElement
         if(oge.classList != ""){
            oge.classList.toggle("aktif") 
         }
    })
})