// alert
getIdItem('cancel').addEventListener('click', () => {
    const importent = getIdItem('alertDiv').classList.add('hidden');
})
// alert

// log-in from
getIdItem('sendBtn').addEventListener('click', function(e){
    e.preventDefault();
    
    const validNumber = '01973922729';
    const validPin = 1237;
    
    if (getIdItem('phoneInfo').value === validNumber && getInputNumberValue(pinInfo) === validPin) {
        window.location.href="./home_page.html";
    }
    else{
        getIdItem('alertDiv').classList.remove('hidden');
        
        getIdItem('phoneInfo').value=''
        getIdItem('pinInfo').value=''
    };
});
// log-in from



//.......................................complite the log-in from...............................