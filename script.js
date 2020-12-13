import { art, woodSizes, woodOptions, amount } from "./data.js";

const selectOne = document.getElementById("selectOne");
const selectTwo = document.getElementById("selectTwo");
const selectThree = document.getElementById("selectThree");
const inputMenge = document.getElementById("inputMenge");
const production = document.querySelector(".production");
const disposal = document.querySelector(".disposal");
const inputGewicht = document.getElementById("inputGewicht");
const arrowDownOne = document.querySelector(".arrowDownOne");
const arrowDownTwo = document.querySelector(".arrowDownTwo");
const arrowDownThree = document.querySelector(".arrowDownThree");

let inputArray = [];
selectOne.addEventListener("click", handleSelect);
inputMenge.addEventListener("change", handleMenge);
inputGewicht.addEventListener("blur", handleGewicht);
arrowDownOne.addEventListener("click", handleArrowClick);
arrowDownTwo.addEventListener("click", handleArrowClick);
arrowDownThree.addEventListener("click", handleArrowClick);

function handleArrowClick(e) {
  e.preventDefault();

  if(e.currentTarget === arrowDownOne) {
    selectOne.classList.remove("hidden-visually");
    selectOne.classList.add("thinBlackBorder");
    arrowDownOne.classList.add("hidden-visually");
    const html = htmlSelectArray(art);
    selectOne.innerHTML = html;
  }
}


// utils
function htmlSelectArray(arr) {
  const html = arr
    .map(
      (option) =>
        `<option class="option" id="${option.id}" value="${option.id}">${option.name}</option>`
    )
    .join("");
  return html;
}

function removeHidden(select, arrow, nextArrow){
  select.classList.remove("hidden-visually");
  select.classList.add("thinBlackBorder");
  arrow.classList.add("hidden-visually");
  nextArrow ? nextArrow.classList.add("hidden-visually") : null;
  
}

//select handlers
function handleSelect(e) {
  e.preventDefault();

  const option = e.currentTarget.options;

    const nextOption = art.find(
      (secondOption) => secondOption.id === option.selectedIndex
    );
    const html = htmlSelectArray(nextOption.options);

    selectTwo.addEventListener("click", handleSecondSelect);
    
    removeHidden(selectTwo, arrowDownOne, arrowDownTwo)

    selectTwo.innerHTML = html;
 
}

function handleSecondSelect(e) {
  e.preventDefault();

  const option = e.currentTarget.options;
    const nextOption = woodOptions.find(
      (secondOption) => secondOption.id === option.selectedIndex
    );
    selectThree.addEventListener("click", handleThirdSelect);
    const html = htmlSelectArray(nextOption.options);
    arrowDownThree.addEventListener('click', handleArrowClick)

    removeHidden(selectThree, arrowDownTwo, arrowDownThree)

    selectThree.innerHTML = html;
  }

function handleThirdSelect(e) {
  e.preventDefault();

  const option = e.currentTarget.options;
  if (option.selectedIndex === 0) {
    const selectedItem = woodSizes.find(
      (thisOption) => thisOption.id === option.selectedIndex
    );
    inputArray.push(selectedItem.value);
  }
}


function handleMenge(e) {
  e.preventDefault();
  const valueMenge = e.currentTarget.value;
  console.log(valueMenge)
  inputArray.push(valueMenge);
  console.log(inputArray);
}
console.log(inputArray);

function handleGewicht(e) {
  e.preventDefault();
  const valueGewicht = e.currentTarget.value;
  inputArray.push(valueGewicht);
  console.log(inputArray);
  generateContent();
}

function generateContent(){
  const productionContent = inputArray.map((el) => `<p>${el}</p>`).join('')
  console.log(productionContent);
  production.innerHTML = productionContent;

}
