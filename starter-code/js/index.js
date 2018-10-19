function deleteItem(e) {
  document
    .querySelector(".product")
    .removeChild(e.currentTarget.parentNode.parentNode);
}

function getPriceByProduct(p) {
  let price = p.querySelector(".item-price p span").innerHTML;
  price = parseFloat(price);
  // console.log(price);
  return price;
}

function updatePriceByProduct(productPrice, product) {
  let quantity = parseInt(product.querySelector(".quantity").value);
  let productTotalPrice = productPrice * quantity;
  product.querySelector(
    ".total-product-price p span"
  ).innerHTML = productTotalPrice.toFixed(2);
  return productTotalPrice;
}

function getTotalPrice() {
  let products = Array.from(document.querySelectorAll(".product-wrapper"));
  let total = 0;
  products.forEach(function(product) {
    total += updatePriceByProduct(getPriceByProduct(product), product);
  });
  document.querySelector("#total-price").innerHTML = "$ " + total.toFixed(2);
}

// Create new Item //
function createProductName(itemName) {
  let nameContainer = document.createElement("div");
  nameContainer.className = "item-name";
  let name = document.createElement("span");
  name.className = "name";
  name.innerHTML = itemName;

  nameContainer.appendChild(name);

  return nameContainer;
}

function createUnitCost(itemUnitPrice) {
  let priceContainer = document.createElement("div");
  priceContainer.className = "item-price";
  let pItemPrice = document.createElement("p");
  let price = document.createElement("span");

  pItemPrice.innerHTML = "$ ";
  price.className = "price";
  price.innerHTML = parseFloat(itemUnitPrice).toFixed(2);

  pItemPrice.appendChild(price);
  priceContainer.appendChild(pItemPrice);

  return priceContainer;
}

function createQuantityInput() {
  let inputConatiner = document.createElement("div");
  inputConatiner.className = "item-qty";
  let input = document.createElement("input");
  input.className = "quantity";
  input.setAttribute("type", "text");
  input.setAttribute("value", "0");
  let qty = document.createElement("p");
  qty.innerHTML = "QTY";

  inputConatiner.appendChild(qty);
  inputConatiner.appendChild(input);

  return inputConatiner;
}

function createItemPriceTotal() {
  let itemTotalPrice = document.createElement("div");
  itemTotalPrice.className = "total-product-price";
  let pTotalPrice = document.createElement("p");
  let price = document.createElement("span");

  pTotalPrice.innerHTML = "$ ";
  price.className = "item-total-price";
  price.innerHTML = "0.00";

  pTotalPrice.appendChild(price);
  itemTotalPrice.appendChild(pTotalPrice);

  return itemTotalPrice;
}

function createDeleteButton() {
  let deleteBtnContainer = document.createElement("div");
  deleteBtnContainer.className = "delete-btn";
  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.className = "delete-btn btn btn-delete";

  deleteBtnContainer.appendChild(deleteBtn);
  deleteBtn.onclick = deleteItem;

  return deleteBtnContainer;
}

function createNewItemRow(itemName, itemUnitPrice) {
  let container = document.createElement("div");
  container.className = "product-wrapper";
  container.appendChild(createProductName(itemName));
  container.appendChild(createUnitCost(itemUnitPrice));
  container.appendChild(createQuantityInput());
  container.appendChild(createItemPriceTotal());
  container.appendChild(createDeleteButton());

  return container;
}

function createNewItem() {
  var newItem = document.querySelector(".product");

  newItem.appendChild(
    createNewItemRow(
      document.querySelector(".item-name").value,
      document.querySelector(".unit-price").value
    )
  );
}

window.onload = function() {
  let calculatePriceButton = document.getElementById("calculate-btn");
  let createItemButton = document.getElementById("new-item-create");
  let deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
