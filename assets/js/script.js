$(function(){
    $('#inumber').mask('0000 0000 0000 0000');
    $('#icvc').mask('000');
    $('#imonth').mask('00');
    $('#iyear').mask('00');  

})

const scvc = document.querySelector('.scvc')
const snumber = document.querySelector('.snumber')
const sname = document.querySelector('.sname')
const sexp = document.querySelector('.sexp')
const smonth = document.getElementById('smonth')
const syear = document.getElementById('syear')
const iform = document.getElementById('iform')
const iname = document.getElementById('iname')
const inumber = document.getElementById('inumber')
const imonth = document.getElementById('imonth')
const iyear = document.getElementById('iyear')
const icvc = document.getElementById('icvc')
const btn = document.querySelector('#btn-confirm')
const btn1 = document.querySelector('#btn-continue')
const complete = document.querySelector('.complete')
const info = document.querySelector('.info')

iname.addEventListener("input", () => {
    sname.innerHTML = (iname.value).toUpperCase();
})

inumber.addEventListener("input", () => {
    snumber.innerHTML = inumber.value;
})

imonth.addEventListener("input", () => {
    smonth.innerHTML = imonth.value;
})

iyear.addEventListener("input", () => {
    syear.innerHTML = iyear.value;
})

icvc.addEventListener("input", () => {
    scvc.innerHTML = icvc.value;
  });


function validName() {
    var error_name = document.querySelector('.error-name')
    var fullName = (/\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi)
    if(iname.value == '' ) {
        error_name.innerHTML = 'This Field is required'
        return false
    } else if (!(fullName.test(iname.value))) {
        error_name.innerHTML = 'Invalid Name'
        return false
    }else {
        error_name.innerHTML=""
        return true
    }    
}

function validDate() {
    var currentM = new Date()
    var currentY = new Date()
    var currentMonth = currentM.getMonth() + 1
    var currentYear = currentY.getFullYear().toString().slice(-2)
    var error_date = document.querySelector('.error-date')
    if(imonth.value == '' || iyear.value == '' ) {
        error_date.innerHTML = 'This Field is required'
        return false
    } else if(imonth.value < 1 || imonth.value > 12) {
        error_date.innerHTML = 'Invalid Month'
        return false
    } else if (imonth.value < currentMonth && iyear.value <= currentYear){
        error_date.innerHTML = 'Expired Card'
        return false
    }
    else {
        error_date.innerHTML = ''
        return true
    }
}

function validNumber () {
    var error_number = document.querySelector('.error-number')
    if(inumber.value == '') {
        error_number.innerHTML = 'This Field is required'
        return false
    } else if (inumber.value.length < 19){
        error_number.innerHTML = 'Invalid Number Card'
        return false
    }
    else {
        error_number.innerHTML = ''
        return true
    }
}

function validCvc() {
    var error_cvc = document.querySelector('.error-cvc')
    if (icvc.value === '') {
    error_cvc.innerHTML = 'This Field is required'
    return false
    } else if (icvc.value.length < 3){
        error_cvc.innerHTML = 'Invalid Code'
        return false
    }
        else {
        error_cvc.innerHTML = ''
        return true
    }
}

function checkForm(e){
    e.preventDefault()
    if (
    validName() &&
    validNumber() &&
    validDate() &&
    validCvc()
    ) {
        iform.style.display = 'none';
        complete.style.display = 'flex';
    }
}
    btn.addEventListener("click", checkForm)


    btn1.addEventListener("click", function (e) {
        e.preventDefault();
        document.location.reload(true);
    })
    

    