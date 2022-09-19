var checkValidation = function () {
    //kiem tra ho
    var valid = true;
    valid = kiemTraRong('firstName', 'error_firstName') & kiemTraRong('lastName', 'error_lastName') & kiemTraRong('password', 'error_password')
        & kiemTraRong('confirmPassword', 'error_confirmPassword') & kiemTraRong('email', 'error_email');
    //kiem tra tat ca la chuoi
    valid &= kiemTraTatCaLaChu('#firstName', '#error_firstName_all_leter') & kiemTraTatCaLaChu('#lastName', 'error_lastName_all_leter');
    //kiem tra tat ca la so
    valid &= kiemTraTatCaLaSo("#phone", "#error_phone");

    valid &= kiemTraEmail("#email", "#error_email");
    valid &= kiemTraDoDai('#password', '#error_password');
    valid &= kiemTraGiaTri('#password', "error_password_min_max_value", 10, 20);
    if (!valid) {
        return false;
    }


    return true;
}

var kiemTraRong = function (idValue, idError) {
    var inputText = document.getElementById(idValue);
    if (inputText.value.trim() === '') {
        document.getElementById(idError).innerHTML = inputText.name + ' required';
        document.getElementById(idError).style.display = 'block';
        return false;
    } else {
        document.getElementById(idError).innerHTML = '';
        document.getElementById(idError).style.display = 'none';
        return true;
    }
}

var kiemTraTatCaLaChu = function (selectorValue, selectorError) {
    //lay gia tri nguoi dung nhap vao tu selector
    var inputText = document.querySelector(selectorValue);
    var regexChu = /^[A-Za-z]+$/;
    if (regexChu.test(inputText.value)) {
        //hop le
        document.querySelector(selectorError).innerHTML = '';
        document.querySelector(selectorError).style.display = 'none';
        return true;
    } else {
        // khong hop le
        document.querySelector(selectorError).innerHTML = inputText.name + "Character required";
        document.querySelector(selectorError).style.display = "block";
        return false;
    }
}
var kiemTraTatCaLaSo = function (selectorValue, selectorError) {
    var inputText = document.querySelector(selectorValue);
    var regexNumber = /^[0-9]+$/;
    if (regexNumber.test(inputText.value)) {
        //hop le
        document.querySelector(selectorError).innerHTML = '';
        document.querySelector(selectorError).style.display = 'none';
        return true;
    } else {
        // khong hop le
        document.querySelector(selectorError).innerHTML = inputText.name + "phone numbers required";
        document.querySelector(selectorError).style.display = "block";
        return false;
    }

}
var kiemTraEmail = function (selectorValue, selectorError) {
    var inputText = document.querySelector(selectorValue);
    var regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (regexEmail.test(inputText.value)) {
        document.querySelector(selectorError).innerHTML = "";
        document.querySelector(selectorError).style.display = 'none';
        return true;
    } else {
        document.querySelector(selectorError).innerHTML = inputText.name + "khong hop le";
        document.querySelector(selectorError).style.display = 'block';
        return false;
    }
}

var kiemTraDoDai = function (selectorValue, selectorError) {
    var inputText = document.querySelector(selectorValue);
    if (inputText.value.length >= inputText.minLength && inputText.value.length <= inputText.maxLength) {
        document.querySelector(selectorError).innerHTML = "";
        document.querySelector(selectorError).style.display = 'none';
        return true;
    } else {
        document.querySelector(selectorError).innerHTML = inputText.name + 'tu ' + inputText.minLength + 'den ' +
            inputText.maxLength + ' !';
        document.querySelector(selectorError).style.display = 'block';
        return false;
    }
}
var kiemTraGiaTri = function (selectorValue, selectorError, maxValue, minValue) {
    var inputText = document.querySelector(selectorValue);
    if (inputText.value > Number(maxValue) || inputText.value < Number(minValue)) {
        document.querySelector(selectorError).innerHTML = inputText.name + 'tu ' + minValue + 'den ' +
            maxValue + ' !';
        document.querySelector(selectorError).style.display = 'block';
        return false;
    } else {
        document.querySelector(selectorError).innerHTML = "";
        document.querySelector(selectorError).style.display = 'none';
        return true;
    }
}
document.getElementById('firstName').onblur = checkValidation;
document.getElementById('lastName').onblur = checkValidation;
document.getElementById('btnDangKy').onclick = checkValidation;