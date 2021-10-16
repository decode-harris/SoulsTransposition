import { bossName, soulName, item1, item2, type1, type2 } from './data.js';

let bossObject = {
    name:"",
    soul:"",
    soulitem1:"",
    soulitem2:"",
    itemtype1:"",
    itemtype2:"",
}

const boss = document.querySelector('#bosses'); // select the boss list
for(let i = 0; i < bossName.length; i++) { // loop through the [ Boss Name ] array
    let li = document.createElement('li'); // create a li element for each array item
    li.innerHTML = bossName[i]; // apply data from the array to the li element
    boss.appendChild(li); // append all li elements to html list
}
for(let i = 0; i < bossName.length; i++) { // loop through the [ Boss Name ] array
    const completed = document.querySelector('#completed'); // select the completed list html elements
    let li = document.createElement('li'); // create a li element for each array item
    let checkbox = document.createElement('input'); // create a input element for each array item
    checkbox.setAttribute('type', 'checkbox'); // set the checkbox element to type 'checkbox'
    li.appendChild(checkbox); // append the checkbox element to the list element
    completed.appendChild(li); // append all li elements to html list
}
const soul = document.querySelector('#souls');// select the souls list
for(let i = 0; i < soulName.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = soulName[i]; 
    soul.appendChild(li); 
}
const transposedItems01 = document.querySelector('#item1'); // select the transposed items list
for(let i = 0; i < item1.length; i++) {
    let li = document.createElement('li'); 
    li.innerHTML = item1[i]; 
    transposedItems01.appendChild(li);
}
for(let i = 0; i < item1.length; i++) { 
    const selected1 = document.querySelector('#selected1'); // select the chosen items list
    let li = document.createElement('li'); 
    let checkbox = document.createElement('input'); // create a input element for each array item
    checkbox.setAttribute('type', 'checkbox'); // set the checkbox element to type 'checkbox'
    li.appendChild(checkbox); // append the checkbox element to the list element
    selected1.appendChild(li); // append all li elements to html list
}
const transposedItems02 = document.querySelector('#item2'); // select the transposed items list
for(let i = 0; i < item2.length; i++) {
    let li = document.createElement('li'); 
    li.innerHTML = item2[i]; 
    transposedItems02.appendChild(li); 
}
for(let i = 0; i < item2.length; i++) { 
    const selected2 = document.querySelector('#selected2'); // select the chosen items list
    let li = document.createElement('li'); 
    let checkbox = document.createElement('input'); // create a input element for each array item
    checkbox.setAttribute('type', 'checkbox'); // set the checkbox element to type 'checkbox'
    li.appendChild(checkbox); // append the checkbox element to the list element
    selected2.appendChild(li); // append all li elements to html list
}
const itemType1 = document.querySelector('#type1'); // select the item type list
for(let i = 0; i < type1.length; i++) {
    let li = document.createElement('li'); // create a span element for each array item 
    li.innerHTML = type1[i]; // apply data from the array to the span element
    itemType1.appendChild(li); // append all span elements to the html list
}
const itemType2 = document.querySelector('#type2'); // select the item type list
for(let i = 0; i < type2.length; i++) {
    let li = document.createElement('li'); // create a span element for each array item 
    li.innerHTML = type1[i]; // apply data from the array to the span element
    itemType2.appendChild(li); // append all span elements to the html list
}

// bossDataFunction = () => {}