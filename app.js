//making a function for doing same works

function updateProduct(isIncreasing, price, productId) {
  const productInput = document.getElementById(productId);
  let productNumber = productInput.value;
  if (isIncreasing == true) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;
  //display case total as for the quantity

  const caseTotal = document.getElementById("case-total");
  caseTotal.innerText = productNumber * price;
}

//case increase

document.getElementById("case-plus").addEventListener("click", function () {
  //1 way or method of doing the work done....
  //   const caseInput = document.getElementById("case-number");
  //   const caseNumber = caseInput.value;
  //   caseInput.value = parseInt(caseNumber) + 1;

  //2nd way of doing the work done...
  updateProduct(true, 59, "case-number");
});

//case decrease

document.getElementById("case-minus").addEventListener("click", function () {
  updateProduct(false, 59, "case-number");
});

//phone section
