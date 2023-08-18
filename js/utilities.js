function utilityButton(inputFieldId){
    const inputButton = document.getElementById(inputFieldId);
    const inputButtonString = inputButton.value;
    const inputButtonValue=parseFloat(inputButtonString);
    inputButton.value ='';
    return inputButtonValue;
}

function utilityTotalById(totalId)
{
    const utilityTotal = document.getElementById(totalId);
    const utilityTotalString =utilityTotal.innerText;
    const utilityTotalValue = parseFloat(utilityTotalString);   
    return utilityTotalValue;
}

function utilityBalance(){
    const balanceTotal = document.getElementById('balanceTotal');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    return previousBalanceTotal;
}

