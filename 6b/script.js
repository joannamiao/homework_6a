
function selectGlazing(){
    var glazing = document.getElementById("glazings");
    var glazingName = glazing.options[glazing.selectedIndex].text;
    console.log(glazingName)
}

function removeRoll(){
    if (parseInt(document.getElementById("rollCount").text) > 0){
        document.getElementById("rollCount").text =parseInt(document.getElementById("rollCount").text)-1;
    }
}

function addRoll(){
    document.getElementById("rollCount").text =parseInt(document.getElementById("rollCount").text)+1;
}

var cartItems = 0

function addToCart(){
    var glazing = document.getElementById("glazings").options[document.getElementById("glazings").selectedIndex].text;
    var rollCount = document.getElementById("rollCount").text;
    newOrderInfo = document.createElement('div');
    newOrderInfo.setAttribute("class","orderItemInfo");
    newOrderName = document.createElement('h3');
    newOrderName.innerHTML = "Blackberry Roll";
    newOrderGlazingLabel = document.createElement('h4');
    newOrderGlazingLabel.setAttribute("class","glazingTitle");
    newOrderName.innerHTML = "Glazing:";
    newOrderGlazing = document.createElement('h4');
    newOrderGlazing.setAttribute("class","glazingTitle");
    newOrderName.innerHTML = glazing;
    newOrderCount = document.createElement('h2');
    newOrderCount.setAttribute("class","rollCount");
    newOrderName.innerHTML = rollCount;
    newOrderDeleteButton = document.createElement('button');
    newOrderDeleteButton.innerHTML = "Remove From Cart";
    cartItems+=1;
    newOrderDeleteButton.setAttribute("id",cartItems);
    newOrderDeleteButton.setAttribute("id",cartItems);
    newOrderInfo.appendChild(newOrderName);
    newOrderInfo.appendChild(newOrderGlazingLabel);
    newOrderInfo.appendChild(newOrderGlazing);
    newOrderInfo.appendChild(newOrderCount);
    newOrderInfo.appendChild(newOrderDeleteButton);
    newOrder = document.createElement('div');
    newOrder.setAttribute("id","order"+cartItems);
    newOrderDeleteButton.onclick = function(clickedId){
        var order = document.getElementById("order"+clickedId);
        order.remove();
    }
    containerBlock = document.getElementsByClassName("orders");
    // console.log(containerBlock);
    // containerBlock.appendChild(newOrder);
    location.href = "shoppingCart.html";
}

function removeItemFromCart(clickedId){
    var order = document.getElementById("order"+clickedId);
    order.remove();
}