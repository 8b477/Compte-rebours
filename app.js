let image = document.getElementById('wrap');
let stopButton = document.getElementById("stop-button");

//compte a rebours créer par l'utilisateur
//récup les input
let inputSecondes = document.getElementById('sec');
let inputMinutes = document.getElementById('min');
let inputHeures = document.getElementById('hour');

//récup le span pour afficher le décompte
let spanSec = document.getElementById('secSpan');
let spanMin = document.getElementById('secMin');
let spanHour = document.getElementById('secHour');

//récup les btn
let btnUserStart = document.getElementById('startUser');

//start le décompte
btnUserStart.addEventListener('click', function recuTwo(){
    let interval = setTimeout(recuTwo,1000, inputSecondes.value);
    inputSecondes.value--;
    spanSec.innerHTML = "Secondes restante : " + inputSecondes.value.toString();

    if(!isNaN(parseInt(inputMinutes.value))){
        setTimeout(minutes,60000,inputMinutes.value)
    }
    if(!isNaN(parseInt(inputHeures.value))){
        setTimeout(heures,3600000,inputHeures.value)
    }
    if (inputSecondes.value === '0'){
        clearInterval(interval);
    }
    if (inputMinutes.value === '0'){
        clearInterval(interval);
        image.style.backgroundImage = "./explo.jpg";
    }
    if (inputHeures.value === '0'){
        clearInterval(interval);
        image.style.backgroundImage = "./explo.jpg";
    }

//clear le décompte
    stopButton.addEventListener('click', function (){
        clearInterval(interval);
        inputSecondes.value = '0';
        spanSec.innerHTML = "";

        inputMinutes.value = '0';
        spanMin.innerHTML = "";

        inputHeures.value = '0';
        spanHour.innerHTML = "";
    })
});

function minutes(){
    inputMinutes.value--;
    spanMin.innerHTML =  "Minutes restante : " + inputMinutes.value.toString();
}

function heures(){
    inputHeures.value--;
    spanHour.innerHTML = "Heures restante : " + inputHeures.value.toString();
}