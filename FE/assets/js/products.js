const hidden_btn=document.querySelector(".hidden")
const hidden__ul=document.querySelector(".hidden__ul")
hidden_btn.addEventListener("click",function () {
    hidden__ul.classList.toggle("visible__ul")
})
const card_container = document.querySelector(".card_container");
async function getProducts() {
  const response = await fetch("http://localhost:3000/weapons");
  const data = await response.json();
  return data
}
async function generateUi() {
  let arr= await getProducts()
  arr.forEach(element => {
    const div=document.createElement("div")
    div.className="card"
    const img=document.createElement("img")
    const a=document.createElement("a")
   const name=document.createElement("h5")
   const cost=document.createElement("p")
   card_container.appendChild(div)
   div.append(img,a,cost)
   a.appendChild(name)
   img.setAttribute("src",element.image)
   name.textContent=element.name
   cost.textContent=`${element.cost}$`
   a.addEventListener("click",function () {
    a.href=`detail.html?id=${element.id}`
   })
   });
}
generateUi()
