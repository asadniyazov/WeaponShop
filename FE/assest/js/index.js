const hidden_btn=document.querySelector(".hidden")
const hidden__ul=document.querySelector(".hidden__ul")
hidden_btn.addEventListener("click",function () {
    hidden__ul.classList.toggle("visible__ul")
})