import { menuArray } from "./data.js"


const menuSection = document.querySelector(".order-section")
const menuItemsArea = document.querySelector(".order-items")
const cartSection = document.querySelector(".order-summary")
let userCart = []

//userCart format = [["nameoffood", priceinteger], ...]

document.addEventListener("click", userActions)

function userActions(e){
    if(e.target.dataset.id === "0" && e.target.closest('.menu-item-add-btn')){
        
        userCart.push([menuArray[0].name, Number(menuArray[0].price)])
        renderCart()
        console.log(userCart)
        }
    else if(e.target.dataset.id === "1" && e.target.closest('.menu-item-add-btn')){
        
        userCart.push([menuArray[1].name, Number(menuArray[1].price)])
        renderCart()
        console.log(userCart)
        }
    else if(e.target.dataset.id === "2" && e.target.closest('.menu-item-add-btn')){
        
        userCart.push([menuArray[2].name, Number(menuArray[2].price)])
        renderCart()
        console.log(userCart)
        }
    else if(e.target.id === "complete-order-btn"){
        document.getElementById("modal-overlay").style.display = "flex"
        }

    }
    
    const paymentForm = document.querySelector("#payment-form")
    if(paymentForm) {
        paymentForm.addEventListener("submit", function(e){
            e.preventDefault()
            document.getElementById("modal-overlay").style.display = "none"
            cartSection.style.display = "none"
            document.getElementById("order-complete").style.display = "flex"
        })
    }



function renderCart(){
    cartSection.style.display = "flex" // make cart visible
    const cartItemsSection = document.querySelector(".ordered-items") 
    cartItemsSection.innerHTML = getCartItems() // add the items to the car
    document.querySelector(".ordered-items-total-price").textContent = `$${orderTotal()}` // update total price

}

function orderTotal(){
    const total = userCart.reduce((accumulator, [name, price]) => {
        return accumulator + price;
    }, 0);
    return total
}

//dont forget to change total price
function getCartItems(){
    let appendString = ""
    userCart.forEach(function(item){
        appendString += `
            <div class="ordered-item">
                <p class="ordered-item-name">${item[0]}<span class="remove-option-${item[0]}">remove</span></p>
                <p class="ordered-item-price">$${item[1]}</p>
            </div> `
        }
    )
    return appendString
}
renderMenu()
function renderMenu(){
    menuSection.style.display = "block"
    menuItemsArea.innerHTML = getMenuItems(menuArray)
}

function getMenuItems(arr){
    let returnStr = ""
    arr.forEach(function(food){
        const { name, ingredients, id, price} = food
        returnStr += `
            <div class="menu-item" data-id="${id}">
                <img src="assets/${name.toLowerCase()}-graphic.png" alt="${name}" class="menu-item-img">
                <div class="menu-item-details">
                    <h2 class="menu-item-name">${name}</h2>
                    <p class="menu-item-ingredients">${ingredients.join(', ')}</p>
                    <p class="menu-item-price">$${price}</p>
                </div>
                <button class="menu-item-add-btn" data-id="${id}">+</button>
            </div>
            <hr class="menu-divider">`
        
    })
    return returnStr
}

function addToBasket(){}