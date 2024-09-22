// alert
getIdItem('cancel').addEventListener('click', () => {
    const importent = getIdItem('alertDiv').classList.add('hidden');
})
// alert


// log-in from
getIdItem('sendBtn').addEventListener('click', function (e) {
    e.preventDefault();
    
    const userNumber = getInputNumberValue('phoneInfo'); // Fetch the phone number
    const userPin = getInputNumberValue('pinInfo'); // Fetch the PIN
    
    console.log("User Number:", userNumber);  // Check the user number
    console.log("User Pin:", userPin);        // Check the user pin

    const validNumber = 1;
    const validPin = 1;

    // Ensure comparison is between numbers
    if (userNumber === validNumber && userPin === validPin) {
        console.log("ok"); // Log success if both match
    } else {
        console.log("pooos"); // Log failure if they don't
    }
});

function getInputNumberValue(id) {
    const getValue = document.getElementById(id).value;  // Correct value retrieval
    return Number(getValue);  // Convert the value to a number
}

// log-in from



//.......................................complite the log-in from...............................