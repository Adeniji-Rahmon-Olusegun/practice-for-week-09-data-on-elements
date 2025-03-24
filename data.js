// Your code here
window.addEventListener("DOMContentLoaded", event => {
    
    const items = document.getElementById("name");
    

    let item = "";

    items.addEventListener("input", (event) => {
        item = event.target.value;
    });

    console.log(item);

    // const addItem = event => {
    //     console.log("Adding item:", item)
    //     const itemType = document.getElementById("type").value;
    //     document.getElementById("shopping-list");
    //     list.innerHTML += `<li>${item}</li>`

    //     //list.appendChild(theItem);
    // }

    const addButton = document.getElementById("add");
    addButton.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("Adding item:", item);
        
        const itemLi = document.createElement("li");
        itemLi.innerHTML = item;
        
        const itemType = document.getElementById("type").value;
        const list = document.getElementById("shopping-list");

        itemLi.setAttribute("data-type", itemType);
        list.append(itemLi);
        console.log(itemLi.dataset.type);
    });
});