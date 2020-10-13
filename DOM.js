// console.dir(document) //displays document tree methods and properties
// console.log(document.domain) //127.0.0.1
// console.log(document.URL)
// console.log(document.body)
// console.log(document.head)
// console.log(document.title)
// document.title = 123
// console.log(document.doctype)
// console.log(document.all) //all html collection
// console.log(document.all[10])
// document.all[10].textContent = 'Helo'
// console.log(document.forms[0])
// console.log(document.links)
//console.log(document.images)

//get elements by id name

// var headerTitle = document.getElementById('header-title')
// console.log(headerTitle)
// // headerTitle.innerText = "Todo List" //pays attention to style and displays the same shown on browser
// // headerTitle.textContent = "List of items" //also displays hidden content along with the present one.
// //headerTitle.innerHTML = '<h6>Item Listener</h6>'
// var header = document.getElementById('main-header')
// header.style.borderBottom = 'solid 3px #ccc'

//get element by classname

// var items = document.getElementsByClassName('list-group-item')
// for(i=0;i<items.length;i=i+2){
//     items[i].style.backgroundColor = '#b19cd9'
// }

//get elements by tagname


//query selector

var headerblock = document.querySelector('#main-header')
headerblock.style.borderBottom = 'solid 4px #ccc'

var submit = document.querySelector('input[type="submit"]')
submit.value = "Submit list"

var lastItem = document.querySelector('.list-group-item:last-child')
lastItem.style.fontWeight = 'bold'

var secondItem = document.querySelector('.list-group-item:nth-child(2)')
secondItem.innerHTML='List 2'

//querySelectorAll

var odd = document.querySelectorAll('li:nth-child(odd)')
var even = document.querySelectorAll('li:nth-child(even)')
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = '#f4f4f4'

}
for(var i=0;i<even.length;i++){
    even[i].style.backgroundColor = '#cccc'
}

//traversing the dom
var itemList = document.querySelector('#items')
itemList.parentNode.style.backgroundColor = '#b19cd9'

//parentElement , parentNode

//childNode , //children

// console.log(itemList.children)
// itemList.children[1].style.backgroundColor = 'yellow'

//FirstElementChild

// itemList.firstElementChild.textContent = "List 1"

// //LastElementChild

// itemList.lastElementChild.textContent = "Last element"

// //nextElementSibling previousElementSibling

// itemList.nextElementSibling

console.log(itemList.previousElementSibling)
itemList.previousElementSibling.style.color = 'black'

var newDiv = document.createElement('div')
console.log(newDiv)

newDiv.className = 'hello'
newDiv.id = "hello1"
newDiv.setAttribute('title','Hello Div')

//create text
var newDivText = document.createTextNode('Do not forget to follow this list!!!')

//Add text to div
newDiv.appendChild(newDivText)

var container = document.querySelector('header .container')
var h1 = document.querySelector('header h1')

container.insertBefore(newDiv,h1)

var button = document.querySelector('#button').addEventListener('click',buttonClick)

function buttonClick(){
    console.log("Button Clicked!!")
}
var button1 = document.querySelector('#button')
button1.style.color = "white"
button1.style.fontWeight = "bold"
button1.style.backgroundColor = "gray"

var itemInput = document.querySelector('input[type="text"]')
var para = document.querySelector('p')
itemInput.addEventListener("keypress",runEvent)
itemInput.addEventListener("focus",runEvent)
itemInput.addEventListener("blur",runEvent)

var form = document.querySelector('form')
form.addEventListener('submit',runEvent)

function runEvent(e){
    e.preventDefault()
    console.log(e.type)
    para.innerHTML = e.target.value
    
}


