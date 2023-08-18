document.getElementById('withdrawButton').addEventListener('click',function(){
    const newWithdrawAmount =utilityButton('withdrawAmount');
    if(isNaN(newWithdrawAmount))
    {
        return;
    }
    const previousWithdrawAmount =utilityTotalById('withdrawTotal');
    const currentWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    // same
    const withdrawTotalElement = document.getElementById('withdrawTotal');
    withdrawTotalElement.innerText = currentWithdrawTotal;

const previousBalance =utilityBalance();
  const currentBalanceTotal =previousBalance -newWithdrawAmount;
  const balanceTotal = document.getElementById('balanceTotal');
  balanceTotal.innerText=currentBalanceTotal;
    
});