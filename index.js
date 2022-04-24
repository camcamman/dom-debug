const colors = ["red", "blue", "green"]

document.getElementById("add").addEventListener("click",listfun) 
function listfun (event) {
    event.preventDefault()
    var input = document.getElementById("input")
    var list = document.getElementById("list")
 //   var subItem = document.createElement("p")
//    subItem.textContent=input.value
    list.append(SubItem(event))
}

function createDropDown() {
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++){
        const option = document.createElement("option") 
        option.textContent = colors[i]
        option.value = colors[i]
        dropDown.append(option)
    }
    dropDown.addEventListener("change", function(e){
        e.target.parentElement.style.backgroundColor = e.target.value
    })
    return dropDown
}

function SubItem(e){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input")
    //document.createElement("select")
    subItem.textContent = subItemValue.value
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.appendChild(extra())
    subItem.setAttribute("class", "subItem")
    return subItem
}

