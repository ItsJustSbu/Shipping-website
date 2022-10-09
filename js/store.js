
if (document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready()
}

var list = []

function ready(){
    var remove_cart = document.getElementsByClassName("remove-button");
    console.log(remove_cart);
    
    for(var i =0; i < remove_cart.length;i++){
        var button = remove_cart[i]
        button.addEventListener('click', function(event){
            var buttonclicked = event.target;
            buttonclicked.parentElement.parentElement.remove()
            updateCartTotal()
        });

        var quantityInputs = document.getElementsByClassName('quantity-input')
        for(var i = 0; i < quantityInputs.length;i++){
            var input = quantityInputs[i]
            input.addEventListener('change', quantityChanged)
        }
    }

    var add_cart = document.getElementsByClassName("add");
    for(var i=0; i< add_cart.length;i++){
        var button = add_cart[i]
        button.addEventListener('click',addtoCartClicked)
    }
    
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

function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <=0){
        input.value = 1
    }
    updateCartTotal()
}

function addtoCartClicked(event){
    var button = event.target
    var tripItem = button.parentElement
    var destination = tripItem.getElementsByClassName('destination')[0].innerText
   
    addItemToCart(destination)
    window.alert("Item Added to Cart!")
}

function addItemToCart(destinationParam){

    var cartRow = document.createElement('div')
    // localStorage.setItem('destinationParam',destination)
    // console.log(localStorage.getItem('destinationParam'));
    characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'
    var code = ""
    for (var i = 0; i < 7; i++){
        var x = characters.charAt(Math.floor(Math.random()*characters.length-1))
        code = code + x
        console.log(code)
    }
    list.push(code)
    cartRow.innerText = destinationParam;
    localStorage.setItem('list',list)
    // list = []
}

function checkout(){
    window.alert("Successfully checked out")
}