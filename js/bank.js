// deposit section
// first step :
document.getElementById('btn-deposit').addEventListener('click', function () {
    // second step :
    const depositField = document.getElementById('deposit-field');
    const depositNewAmountString = depositField.value;
    const depositNewAmount = parseFloat(depositNewAmountString);

    // clearing step :
    depositField.value = '';

    //! nan step :
    if (isNaN(depositNewAmount)) {
        return alert('Please provide a number');
    }

    // third step :
    const depositAmountElement = document.getElementById('deposit-amount');
    const depositAmountString = depositAmountElement.innerText;
    const depositAmount = parseFloat(depositAmountString);

    // fourth step :
    const depositTotal = depositNewAmount + depositAmount;
    depositAmountElement.innerText = depositTotal;

    // fifth step :
    const depositTotalAmount = document.getElementById('deposit-total-amount');
    const totalAmountString = depositTotalAmount.innerText;
    const totalAmount = parseFloat(totalAmountString);

    // sixth step :
    const finalTotalAmount = totalAmount + depositNewAmount;
    depositTotalAmount.innerText = finalTotalAmount;
})


// withdraw section
// first step :
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // second step :
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawNewAmountString = withdrawField.value;
    const withdrawNewAmount = parseFloat(withdrawNewAmountString);

    // clearing step :
    withdrawField.value = '';

    //! nan step :
    if (isNaN(withdrawNewAmount)) {
        return alert('Please provide a number');
    }

    // third step :
    const withdrawAmountElement = document.getElementById('withdraw-amount');
    const withdrawAmountString = withdrawAmountElement.innerText;
    const withdrawAmount = parseFloat(withdrawAmountString);

    // fifth step :
    const depositTotalAmount = document.getElementById('deposit-total-amount');
    const totalAmountString = depositTotalAmount.innerText;
    const totalAmount = parseFloat(totalAmountString);

    //! alert step :
    if (withdrawNewAmount > totalAmount) {
        return alert('Insufficient balance');
    }

    // fourth step :
    const withdrawTotal = withdrawAmount + withdrawNewAmount;
    withdrawAmountElement.innerText = withdrawTotal;

    // sixth step :
    const finalTotalAmount = totalAmount - withdrawNewAmount;
    depositTotalAmount.innerText = finalTotalAmount;

})