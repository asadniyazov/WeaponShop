const detail = document.querySelector(".detail_container");
      let id=new URLSearchParams(location.search).get("id")
      async function getProducts() {
        const response = await fetch("http://localhost:3000/weapons/"+id);
        const data = await response.json();
        return data
      }
     async function getProduct(){
         let weapons=await getProducts()
          const div=document.createElement("div")
          div.style.maxWidth="500px"
          div.style.minHeight="250px"
         div.style.borderRadius="6px"
          div.style.display="flex"
          div.style.flexDirection="column"
          div.style.paddingLeft="20px"
          div.style.margin="auto"
          div.style.boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
      const img=document.createElement("img")
      const name=document.createElement("h4")
      const description=document.createElement("h5")
      const cost=document.createElement("p")
      const type=document.createElement("p")
      const mass=document.createElement("p")
      const length=document.createElement("p")
      const Cartridge=document.createElement("p")
      const a=document.createElement("a")
      detail.appendChild(div)
      div.append(img,a,description,Cartridge,type,cost,mass,length)
      a.appendChild(name)
      img.setAttribute("src",weapons.image)
     name.textContent=`Weapon 's name : ${weapons.name}`
       description.textContent=`Weapon 's description : ${weapons.description}`
     type.textContent=` Type : ${weapons.type}`
     cost.textContent=`Cost : ${weapons.cost}$`
     Cartridge.textContent=`cartridge : ${weapons.Cartridge}`
     mass.textContent=`mass : ${weapons.mas}`
     length.textContent=`length: ${weapons.length}`
     }
    getProduct() 