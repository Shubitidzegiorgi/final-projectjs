import {amerexpbtn,amazonbtn,applebtn,nameP,emailP,numberP,inputValue,buttonsDiv,buttonmenu,walmartbtn,burgerbar,mainDiv,searchButton} from "./constants.js";
import Item from "./items";
function clickFn(btn){
    btn.addEventListener('click',()=>{
        fetch('https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json')
        .then(res => res.json())
        .then(data =>{
            const filteredArr = data.filter((el) => el.name === btn.id)
            filteredArr.forEach((el)=>{
                const item = new Item(el.id,el.name,el.email,el.boxes)
                nameP.innerHTML = `<h2>${item.name}</h2>`;
                emailP.innerText = item.email;
                inputValue.innerText = item.boxes;
                let boxesArr = item.boxes.split(',');
                let sumBoxes = boxesArr.reduce((acc,cur)=>{
                    return acc+Number(cur)
                },0)
                numberP.innerHTML =`<h2>${Math.ceil(sumBoxes/10)}</h2>`;    
            })
        })
        .catch(err =>{
            console.log(err);
        })
        burgerbar.classList.toggle("active");
        buttonmenu.classList.toggle("active");
        mainDiv.classList.toggle("active");
        searchButton.classList.toggle("notActive");

    })
}
clickFn(amazonbtn);
clickFn(amerexpbtn);
clickFn(walmartbtn);
clickFn(applebtn);

let  buttons = buttonsDiv.getElementsByClassName("btn");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", ()=> {
  let current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}


burgerbar.addEventListener('click',()=>{
    burgerbar.classList.toggle("active");
    buttonmenu.classList.toggle("active");
    mainDiv.classList.toggle("active");
    searchButton.classList.toggle("notActive");
})

























