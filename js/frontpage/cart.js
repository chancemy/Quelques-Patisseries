sumUp();
var qtySelect = document.querySelectorAll('.qty-select')
qtySelect.forEach(element => element.addEventListener('change', subTotal));
function subTotal(e) {
    var parent = this.parentElement.parentElement;
    var itemPrice = parent.querySelector('.item-price').dataset.price;
    var qty = this.value;
    var itemTotal = parent.querySelector('.item-total');
    itemTotal.innerHTML = qty * itemPrice;
    sumUp();
}

function sumUp() {
    var qty_total = document.querySelector('#qty-total');
    var sub_total = document.querySelector('#sub-total');
    var total = document.querySelector('#total');
    var products = document.querySelectorAll('.cart-products');
    let qty = 0;
    let subTotal = 0;
    products.forEach(product => {
        
        qty += parseInt(product.querySelector('.qty-select').value);
        itemTotal = parseInt(product.querySelector('.qty-select').value)*parseInt(product.querySelector('.item-price').dataset.price)
        subTotal += itemTotal;
        qty_total.innerHTML = qty;
        sub_total.innerHTML ='NT$ '+subTotal;
        total.innerHTML ='NT$ '+subTotal;
    });
}
