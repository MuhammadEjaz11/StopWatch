var hour = 0;
var minute = 0;
var sec = 0;

var interval;
var startwatch = true;


function stop() {
    clearInterval(interval);
    startwatch=true;

}

function reset() {
    clearInterval(interval)


    hour = 0;
    minute = 0;
    sec = 0;

    document.getElementById("hour").innerHTML = "00";
    document.getElementById("minute").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    startwatch=true;
}

function stopWatch() {


    sec = ++sec;

    document.getElementById("sec").innerHTML = "0" + sec;
    if (sec >= 10) {

        document.getElementById("sec").innerHTML = sec;

    }
    if (sec == 60) {
        minute = ++minute;
        sec = 0;
        document.getElementById("minute").innerHTML = minute;
    }
    if (minute == 60) {
        document.getElementById("hour").innerHTML = hour;
        hour = ++hour;
        minute = 0;
        sec = 0;


    }




}
function start() {
    if(startwatch===true){
        interval = setInterval(stopWatch, 1000)
        console.log('true')
        startwatch=false;
    }
}