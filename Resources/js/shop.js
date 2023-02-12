//SweetAlert
const addSuscribe = document.querySelector('#suscribe');
addSuscribe.addEventListener('click', showAlertSuscribe);

//const addToShoppingCartButtons = document.querySelectorAll('#addToCart');
//addToShoppingCartButtons.forEach((addToCartButton) =>{
//    addToCartButton.addEventListener('click', addToCartClicked);
//});
//Modificacion AddToCart
document.addEventListener('click', (event) => {
    if(event.target && event.target.querySelectorAll('#addToCart')) {
        addToCartClicked(event);
    }
})
const shoppingCartItemsContainer = document.querySelector('#shoppingCardItemsContainer');

function addToCartClicked(event) {
    event.preventDefault();
    const button = event.target;
    const item = button.closest('#item');
    const itemTitle = item.querySelector('#item-title').textContent;
    const itemPrice = item.querySelector('#item-price').textContent;
    const itemImage = item.querySelector('#item-image').src;

addItemShoppingCart(itemTitle,itemPrice,itemImage);
showAlert();
}

function addItemShoppingCart(itemTitle,itemPrice,itemImage) {

   const elementsTitle = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTitle');
   console.log(elementsTitle);
   for(let i=0; i < elementsTitle.length; i++){
    if (elementsTitle[i].innerText === itemTitle){
        let elementQuantity = elementsTitle[i].parentElement.querySelector('.shoppingCartItemQuantity');
        elementQuantity.value++;
        updateShoppingCartTotal();
        return;
    }
   }


    const shoppingCartRow = document.createElement('div');
    const shoppingCardContent = `
    <div class="cart__card shoppingCartItemGlobal">
                <div class="cart__box ">
                    <img src="${itemImage}" alt="" class="cart__img">
                </div>

                <div class="cart__details">
                    <div class="cart__title shoppingCartItemTitle">${itemTitle}
                    </div><div class="cart__price item-price shoppingCartItemPrice">${itemPrice}</div>

                    <div class="cart__amount">
                        <div class="cart__amount-content">                              
                                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                                value="1">
                        </div>

                        <i class='bx bx-trash-alt cart__amount-trash buttonDelete' ></i>
                    </div>
                </div>
            </div>
           
    `;
    shoppingCartRow.innerHTML = shoppingCardContent;
    shoppingCartItemsContainer.append(shoppingCartRow);

    shoppingCartRow
        .querySelector('.buttonDelete')
        .addEventListener('click', removeShoppingCartItem);

    shoppingCartRow
        .querySelector('.shoppingCartItemQuantity')
        .addEventListener('change', quantityChanged);

    updateShoppingCartTotal();

}
//Function
function updateShoppingCartTotal() {
    let total=0;
    const shoppingCartTotal= document.querySelector('.shoppingCartTotal');
    //console.log(shoppingCartTotal);
    const shoppingCartItems = document.querySelectorAll('.shoppingCartItemGlobal');
    //console.log(shoppingCartItems);
    
    shoppingCartItems.forEach((shoppingCartItem) => {
        const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.item-price');
        //console.log(shoppingCartItemPriceElement);
        const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('$',''));
        //console.log(shoppingCartItemPrice);
        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity');
        //console.log(shoppingCartItemQuantityElement);
        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);
        //console.log(shoppingCartItemQuantity);

        total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
        //console.log(total);
     });
        shoppingCartTotal.innerHTML = `${total} $`;
      }
function removeShoppingCartItem(event) {
const buttonClicked = event.target;
buttonClicked.closest('.shoppingCartItemGlobal').remove();
updateShoppingCartTotal();
} 
function quantityChanged(event) {
const input = event.target;
input.value <=0 ? (input.value = 1) : null;
updateShoppingCartTotal();
} 
function showAlert() {
    swal(   "Bien Hecho!",
            "Agregaste el producto a tu carrito con exito!",
            "success",
            {
                button: "Seguir Comprando",
            });
    
}
function showAlertSuscribe() {
    swal(   "Te suscribiste con exito!"   


    )
}

 
    
    
    


  
    
