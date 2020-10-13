var form = document.getElementById('addForm')
var itemList = document.getElementById('items')
var filter = document.getElementById('filter')
console.log(itemList)

//form submit event
form.addEventListener('submit',addItems)

//delete event
itemList.addEventListener('click',removeItem)

//search item
filter.addEventListener('keyup',filterItems)

//add items
function addItems(e){
    e.preventDefault()

    //get input value
    var inputValue = document.getElementById('item').value
    
    //create new li element
    var list = document.createElement('li')
    //add class
    list.className = 'list-group-item'
    //create text node
    var listValue= document.createTextNode(inputValue)
    //add textnode with list
    list.appendChild(listValue)
    console.log(list)

    //creae del button
    var deleteBtn = document.createElement('button')
    //add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    //append textnode to delete button
    deleteBtn.appendChild(document.createTextNode('X'))

    //append delete button to list element
    list.appendChild(deleteBtn)
    //append list element to Itemlist 
    itemList.appendChild(list)

}

//removeItem
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement
            itemList.removeChild(li)
        }
    }
    
}

//filter items
function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase()
    //get list
    var items = itemList.getElementsByTagName('li')
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block'
        }else{
            item.style.display ='none'
        }
    })
}