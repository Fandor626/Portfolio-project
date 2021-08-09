let modal = document.getElementById("myModal");
let btn = document.getElementById("modalBtn");
let close = document.getElementById("close");
let input = document.getElementById("submit");
let form = document.getElementById("form");

let fname = document.getElementById("name");
let password = document.getElementById("password");
const email = document.getElementById("email");
let number = document.getElementById("number");
const emailError = document.querySelector('#email + span.error');

let checkName, checkPass, checkEmail;

let client = {
    fname: null,
    password: null,
    email: null,
    number: null
};

btn.onclick = function () {
    openModal();
};

function openModal() {
    modal.style.display = "block";
    document.getElementById("body").style.overflow = "hidden";
}

function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openModal();
        window.removeEventListener('scroll', showModalByScroll);
    }
}

window.addEventListener('scroll', showModalByScroll);

close.onclick = function (e) {
    e.preventDefault();
    modal.style.display = "none";
    document.getElementById("body").style.overflow = "visible";
};

function saveName(client) {
    console.log(`name: ${fname.value}`);
}
function savePassword(client) {
    console.log(`password: ${password.value}`);
}
function saveEmail() {
    console.log(`email: ${email.value}`);
}
function saveTel() {
    console.log(`number: ${number.value}`);
}

fname.addEventListener('keypress', saveName(), false);
password.addEventListener('keypress', savePassword(), false);
email.addEventListener('keypress', saveEmail(), false);
number.addEventListener('keypress', saveTel(), false);

function savedClient() {
    client = {
        fname: fname.value,
        password: password.value,
        email: email.value,
        number: number.value
    };
}

document.getElementById("form").addEventListener('submit', function (e) {
    e.preventDefault();

    if (fname.value === "Bohdan" && password.value === "Qwerty123#") {
        $('#load').show();
        setTimeout(loadHide, 2000);
        console.log("true");
        $('#label-1').hide();
        setTimeout(labelShow, 2000);
        document.getElementById("label").style.color = "green";
        setTimeout(closeForm, 3500);
        document.getElementById("body").style.overflow = "visible";
        document.getElementById("modalBtn").disabled = true;
    } else {
        $('#label-1').hide();
        $('#load').show();
        setTimeout(loadHide, 2000);
        $('#label').hide();
        console.log("false");
        setTimeout(labal1Show, 2000);
    }
    console.log("Form has submited");
    savedClient();
    console.log(client);
});
function loadHide() {
    $('#load').hide();
}
function labal1Show() {
    $('#label-1').show();
}
function labelShow() {
    $('#label').show();
}

function closeForm() {
    modal.style.display = "none";
}

function validateName() {
    savedClient();
    var regName = /^[A-ZА-Я'][a-zA-Zа-яА-Я-' ]{2,}/g;
    if (client.fname === '') {
        document.getElementById("name").style.borderBottom = "3px solid red";
        document.getElementById('labelName').style.display = "none";
        document.getElementById('labelEmptyName').style.display = "block";
        checkName = false;
    } else if (regName.test(client.fname) == false) {
        document.getElementById("name").style.borderBottom = "3px solid red";
        document.getElementById('labelEmptyName').style.display = "none";
        document.getElementById('labelName').style.display = "block";
        checkName = false;
    } else {
        document.getElementById("name").style.borderBottom = "3px solid green";
        document.getElementById('labelEmptyName').style.display = "none";
        document.getElementById('labelName').style.display = "none";
        checkName = true;
        enableButton();
    }
}
function validatePassword() {
    savedClient();
    var regPass = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;
    if (client.password === '') {
        document.getElementById("password").style.borderBottom = "3px solid red";
        document.getElementById('labelPass').style.display = "none";
        document.getElementById('labelEmptyPass').style.display = "block";
        checkPass = false;
    } else if (regPass.test(client.password) == false) {
        document.getElementById("password").style.borderBottom = "3px solid red";
        document.getElementById('labelPass').style.display = "block";
        document.getElementById('labelEmptyPass').style.display = "none";
        checkPass = false;
    } else {
        document.getElementById("password").style.borderBottom = "3px solid green";
        document.getElementById('labelEmptyPass').style.display = "none";
        document.getElementById('labelPass').style.display = "none";
        checkPass = true;
        enableButton();
    }
}
function validateEmail() {
    savedClient();
    var regEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (client.email === '') {
        document.getElementById("email").style.borderBottom = "3px solid red";
        document.getElementById('labelEmail').style.display = "none";
        document.getElementById('labelEmptyEmail').style.display = "block";
        checkEmail = false;
    } else if (regEmail.test(client.email) == false) {
        document.getElementById("email").style.borderBottom = "3px solid red";
        document.getElementById('labelEmail').style.display = "block";
        document.getElementById('labelEmptyEmail').style.display = "none";
        checkEmail = false;
    } else {
        document.getElementById("email").style.borderBottom = "3px solid green";
        document.getElementById('labelEmail').style.display = "none";
        document.getElementById('labelEmptyEmail').style.display = "none";
        checkEmail = true;
        enableButton();
    }
}
function validateNum() {
    savedClient();
    var regNum = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    if (client.number === '') {
        document.getElementById("number").style.borderBottom = "3px solid red";
        document.getElementById('labelEmptyNum').style.display = "block";
        document.getElementById('labelNum').style.display = "none";
    } else if (regNum.test(client.number) == false) {
        document.getElementById("number").style.borderBottom = "3px solid red";
        document.getElementById('labelNum').style.display = "block";
        document.getElementById('labelEmptyNum').style.display = "none";
    } else {
        document.getElementById("number").style.borderBottom = "3px solid green";
        document.getElementById('labelNum').style.display = "none";
        document.getElementById('labelEmptyNum').style.display = "none";
    }
}
function enableButton() {
    if (checkName == true && checkPass == true && checkEmail == true) {
        document.getElementById("submit").style.pointerEvents = "visible";
    } else {
        document.getElementById("submit").style.pointerEvents = "none";
    }
}
//timer
const deadline = '2021-08-10';
function getTime(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor((t / (1000 * 60 * 60)) % 24),
        minutes = Math.floor((t / 1000 / 60) % 60),
        seconds = Math.floor((t / 1000) % 60);
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}
function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

    updateClock();
    function updateClock() {
        const t = getTime(endtime);

        days.innerHTML = t.days;
        hours.innerHTML = t.hours;
        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds;

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
        if (t.seconds < 0) {
            document.querySelector('#timer').style.display="none";
        }
    }
}
setClock('.prom__timer', deadline);
function startTimer() {
    
}