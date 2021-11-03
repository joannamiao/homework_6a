
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
const cart = []

function Product(itemID, productName, productGlazing, productCount){
    this.id = itemID
    this.name = productName
    this.glazing = productGlazing
    this.count = productCount
}

function addToCart(){
    var name = "Blackberry";
    var glazing = document.getElementById("glazings").options[document.getElementById("glazings").selectedIndex].text;
    var count = document.getElementById("rollCount").text;
    const item = new Product(cartItems, name,glazing,count);
    const storedValue = JSON.parse(localStorage.getItem('savedCart'));
    const cart = storedValue ? storedValue : []
    cart.push(item);
    localStorage.setItem('savedCart', JSON.stringify(cart));
    location.href = "shoppingCart.html";
}

function showProductInCart(product){
    const cartDiv = document.getElementById('orders');
    const template = document.getElementById('cartItemTemplate');
    const clone = template.content.cloneNode(true);
    clone.querySelector('.orderName').innerText = product.name;
    clone.querySelector('.glazingType').innerText = product.glazing;
    clone.querySelector('.rollCount').innerText = product.count;
    const button = clone.querySelector('.removeOrderButton');
    button.addEventListener('click',function(){
        removeItemFromCart(product);
    })
    cartDiv.appendChild(clone);
}

function showAllCartProducts(){
    const storedValue = JSON.parse(localStorage.getItem('savedCart'));
    const cart = storedValue ? storedValue : []
    for(var i = 0; i < cart.length; i++){
        showProductInCart(cart[i])
    }
}

function removeItemFromCart(product){
    const storedValue = JSON.parse(localStorage.getItem('savedCart'));
    const cart = storedValue ? storedValue : []
    var index = -1
    for (var i = 0; i < cart.length; i++){
        if (cart[i].name == product.name && cart[i].glazing == product.glazing && cart[i].count == product.count){
            index = i;
            break
        }
    }
    cart.splice(index,1);
    localStorage.setItem('savedCart', JSON.stringify(cart));
    showAllCartProducts();
}