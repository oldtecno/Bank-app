// btn efect
function bntEfect(id) {
     getIdItem(id).classList.add('border-2', 'border-blue-200', 'bg-gray-100');
};
function rembntEfect(id) {
     getIdItem(id).classList.remove( 'border-blue-200');
     getIdItem(id).classList.add('border-2', 'border-gray-200', 'bg-transparent');
};
// btn efect


// lightToDarkBtn
function lightToDarkBtn(id){
    getIdItem(id).classList.add('light');
};
// lightToDarkBtn


// normal id get
function getIdItem(id){
    return document.getElementById(id);
};
// normal id get


// normal class get
function getClassItem(clas) {
    return document.getElementsByClassName(clas);
};
// normal class get


// inputValueInNumber
function getInputNumberValue(id) {
    
    const getValue = document.getElementById(id).vlaue;
    return Number(getValue);
    
};
// inputValueInNumber


// hiddAllShow1
function hiddAllShow1(classs, num) {
    const className = getClassItem(classs);

    for (let i = 0; i < className.length; i++) {
        className[i].classList.add('hidden');
    };
    
    className[num].classList.remove('hidden');
};
// hiddAllShow1
