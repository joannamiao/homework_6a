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

function addToCart(){
    var glazing = document.getElementById("glazings").options[document.getElementById("glazings").selectedIndex].text;
    var rollCount = document.getElementById("rollCount").text;
    console.log("hi");
    location.href = "shoppingCart.html";
}