window.onload = function () {
    var seconds = 0; 
    var tens = 0; 
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var buttonLap = document.getElementById('button-lap'); // Added lap button
    var lapContainer = document.getElementById('laps'); // Container for laps
    var Interval;

    buttonStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
    
    buttonStop.onclick = function() {
        clearInterval(Interval);
    }

    buttonReset.onclick = function() {
        clearInterval(Interval);
        tens = 0; 
        seconds = 0; 
        appendTens.innerHTML = "00";
        appendSeconds.innerHTML = "00";
        lapContainer.innerHTML = ""; // Clear laps when reset
    }

    buttonLap.onclick = function() {
        const lapTime = `${appendSeconds.innerHTML}:${appendTens.innerHTML}`;
        const lapElement = document.createElement('div');
        lapElement.className = 'lap'; // Added class for styling
        lapElement.innerText = `Lap: ${lapTime}`;
        lapContainer.appendChild(lapElement);
    }

    function startTimer() {
        tens++; 
        
        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }
        
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }
        
        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = (seconds < 10 ? "0" : "") + seconds; // Add leading zero if needed
            tens = 0;
            appendTens.innerHTML = "00"; // Reset tens
        }
    } 
}
