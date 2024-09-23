// alert
getIdItem('cancel').addEventListener('click', () => {
    const importent = getIdItem('alertDiv').classList.add('hidden');
})
// alert








getIdItem('sendBtn').addEventListener('click', function (e) {
    e.preventDefault();

    let userNumber = getInputNumberValue('phoneInfo');
    let userPin = getInputNumberValue('pinInfo');
    const validNumber = '1';
    const validPin = 1;

    if (userNumber === Number(validNumber) && !isNaN(userNumber) && userPin === validPin && !isNaN(userPin)) {
        window.location.href="./home_page.html";
    }
    else{
        getIdItem('alertDiv').classList.remove('hidden');
        getIdItem('phoneInfo').value='';
        getIdItem('pinInfo').value='';
    };



});
