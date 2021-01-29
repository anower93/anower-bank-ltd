//Login Button event handler
document.getElementById('login').addEventListener('click', function(){
    const user = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const userMail = "ap@torunbd.com";
    const userPass = "123456#";
    
    if(user == userMail && pass == userPass){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display="none";
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display="block";
    }

})

//Deposit Button event handler

document.getElementById("addDeposit").addEventListener('click', function(){
    const depositNumebr = getInputNumber("inputAmount");
    updateDepositAndBalnce("currentDeposit", depositNumebr);
    updateDepositAndBalnce("currentBalance", depositNumebr);
    document.getElementById('inputAmount').value = "";
                                                                                                                                                                                                         
})

//Withdraw Button Event Handler

document.getElementById("withdrawButton").addEventListener("click", function(){
    const withdrawAmountNumber = getInputNumber("withdrawAmount");
    updateWithdrawAndBalance("currentWithdraw", withdrawAmountNumber);
    updateWithdrawAndBalance("currentBalance", withdrawAmountNumber);
    document.getElementById("withdrawAmount").value = "";
})

function getInputNumber(id){
    const Amount = document.getElementById(id).value;
    const AmountNumber = parseFloat(Amount);
    return AmountNumber;
}



function updateWithdrawAndBalance(id, withdrawAmountNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    
    if(id== "currentWithdraw" && withdrawAmountNumber != null && withdrawAmountNumber>0){
        const total = currentNumber + withdrawAmountNumber;
        document.getElementById(id).innerText = total;
    }else if(id =="currentBalance" && withdrawAmountNumber != null && withdrawAmountNumber>0){
        const total = currentNumber - withdrawAmountNumber;
        document.getElementById(id).innerText = total;
    }
}

function updateDepositAndBalnce(id, depositNumebr){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    if(depositNumebr != null && depositNumebr>0){
        const total = currentNumber + depositNumebr;
        document.getElementById(id).innerText = total;
    }
}


