
var listCodes = localStorage.getItem('list')
console.log(listCodes);
for(var i = 0; i < (listCodes.length/7);i++){
    word = ""
    for(var j = i*7; j< ((i+1)*6);j++){
        word += listCodes[j]
    }
    console.log(word)
    var cartItems = document.getElementsByClassName('rows')[0]
var x = document.createElement('div')
var rowContents = `<div class="row">
<div class="code">${word}</div>
<div class="quantity"><label>Quantity: <input class="quantity-input" type="number" value="1"></label></div>
<div class="remove"><button class="remove-button">remove</button></div>
</div>`
x.innerHTML = rowContents
cartItems.append(x)
var remove_cart = document.getElementsByClassName("remove-button");
for(var i =0; i < remove_cart.length;i++){
    var button = remove_cart[i]
    button.addEventListener('click', function(event){
        var buttonclicked = event.target;
        buttonclicked.parentElement.parentElement.remove()
        updateCartTotal()
    });
}

updateCartTotal()
}


function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <=0){
        input.value = 1
    }
    updateCartTotal()
}



function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName("center")[0];
    var cartRows = cartItemContainer.getElementsByClassName("row");
    var total = 0;
    for(var i = 0; i < cartRows.length;i++){
        var cartRow = cartRows[i];
        var price = 400;
        var quantityElement = cartRow.getElementsByClassName("quantity-input")[0];
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    console.log(total);
    document.getElementsByClassName("row-price")[0].innerText = "Total : R"+total;
}