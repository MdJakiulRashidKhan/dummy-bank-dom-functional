document.getElementById('depositButton').addEventListener('click',function(){
 const newDepositAmount =utilityButton('depositAmount');
 if(isNaN(newDepositAmount))
 {
    return;
 }
 const previousDepositAmount =utilityTotalById('depositTotal');
 
 const currentDepositTotal =newDepositAmount+previousDepositAmount;
 //same
 const depositTotalElement = document.getElementById('depositTotal');
 depositTotalElement.innerText = currentDepositTotal;

const previousBalance =utilityBalance();
  const currentBalanceTotal =previousBalance +newDepositAmount;
  const balanceTotal = document.getElementById('balanceTotal');
  balanceTotal.innerText=currentBalanceTotal;

})