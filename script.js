let list_array = [];

document.getElementById('add-btn').addEventListener("click", () =>{
    var temp_item = document.getElementById('inputBox').value;
    list_array.push(temp_item);

    var i;
    for(i=0; i < list_array.length; i++){
        var item = document.createElement("li");
        item.setAttribute("id", i+1+"-item");
        item.appendChild(document.createTextNode(list_array[i]));
    }
    document.getElementById('list-items').appendChild(item);
    console.log(item);
})

document.getElementById('del-btn').addEventListener("click", () =>{
    var del_num = document.getElementById('delInputBox').value;
    var olElem = document.getElementById('list-items');
    olElem.removeChild(olElem.childNodes[del_num]);
})