getIdItem('registrationSlider').addEventListener('click', function (e) {
    getIdItem('loginForm').classList.add('left-[350px]');    
    getIdItem('registrationFrom').classList.add('left-0');  
    getIdItem('sliderColor').classList.add('left-0', 'w-[155px]')  
});

getIdItem('loginSlider').addEventListener('click', function (e) {
    getIdItem('loginForm').classList.remove('left-[350px]');    
    getIdItem('registrationFrom').classList.remove('left-0');
    getIdItem('sliderColor').classList.remove('left-0', 'w-[155px]') 
})