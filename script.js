// Select People
const peopleSum = document.querySelector("#people");

// Increment By One
const plus = document.querySelector("#Plus");
let count = 1;
plus.addEventListener("click", ()=>{
 count++;
 peopleSum.innerHTML = count;
});

// Decrement By one
const minus = document.querySelector("#minus");
minus.addEventListener("click", ()=>{
 if(count>1){
  count--;
 }
 peopleSum.innerHTML = count;
})

// Calculate
const calculate = document.querySelector(".billCalculate");
calculate.addEventListener("click", ()=>{
 document.querySelector(".totalSum").style.display = "block";


// Collecting Bill
const totalBill = Number(document.querySelector("#totalBill").value);
const totalTip = Number(document.querySelector("#tipPercent").value);
let total = totalBill * (totalTip / 100);
let finalPeople = peopleSum.innerHTML;

// Display Summery Tab and Bills
document.querySelector("#sumBill").innerHTML = totalBill;
document.querySelector("#sumTip").innerHTML = total;

// Tax Display
const tax = document.querySelector("#sumTax").innerHTML = (totalBill + 5) / 100;
document.querySelector("#sumTax").innerHTML = tax;

// Final Bill
document.querySelector("#perPerson").innerHTML = ((
 totalBill+total+tax) / finalPeople).toFixed(2)
});