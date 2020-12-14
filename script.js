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

selectOne.addEventListener("click", function(e){handleSelects(e, art, selectTwo, arrowDownOne, arrowDownTwo)});
inputMenge.addEventListener("change", handleInput);
inputGewicht.addEventListener("change", handleInput);
arrowDownOne.addEventListener("click", handleArrowClick);
arrowDownTwo.addEventListener("click", handleArrowClick);
arrowDownThree.addEventListener("click", handleArrowClick);
selectTwo.addEventListener("click", function(e){handleSelects(e, woodOptions, selectThree, arrowDownTwo, arrowDownThree)});
selectThree.addEventListener("click", function(e){handleSelects(e, woodSizes)});
arrowDownThree.addEventListener('click', handleArrowClick);

let inputArray = [];

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

function handleSelects(e, arr, select, arrowDown, nextArrowDown){
  e.preventDefault();
  const option = e.currentTarget.options;
  const nextOptionSet = arr.find((nextOptions) => nextOptions.id === option.selectedIndex);
  if (select) {
    const html = htmlSelectArray(nextOptionSet.options);
    select.innerHTML = html;
  }
  (arrowDown && nextArrowDown) ? removeHidden(select, arrowDown, nextArrowDown) : null;
  inputArray.push(nextOptionSet.name)
}

function handleInput(e){
e.preventDefault();
const value = e.currentTarget.value;
inputArray.push(value);

if(inputArray.length === 5){
  generateContent();
}
}

function generateContent(){
  const productionContent = inputArray.map((el) => `<p>${el}</p>`).join('')
  console.log(productionContent);
  production.innerHTML = productionContent;
}
