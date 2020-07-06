// DRUM KIT (Modified Wes Bos JS30 Challenge)

// Listen for key events on the page
document.addEventListener("keydown", playSound);

// Event Function
function playSound(event) {
    console.log(event.keyCode);

    if (event.keyCode == 65) { // "a"
        // Play A-Clap
        playAudio("clap", "A");
    } else if (event.keyCode == 83) { // "s"
        // Play S-hihat
        playAudio("hihat", "S");
    } else if (event.keyCode == 68) { // "d"
        // Play D-kick
        playAudio("kick", "D");
    } else if (event.keyCode == 70) { // "f"
        // Play F-Openhat
        playAudio("openhat", "F");
    } else if (event.keyCode == 71) { // "g"
        // Play G-Boom
        playAudio("boom", "G");
    } else if (event.keyCode == 72) { // "h"
        // Play H-Ride
        playAudio("ride", "H");
    } else if (event.keyCode == 74) { // "j"
        // Play J-Snare
        playAudio("snare", "J");
    } else if (event.keyCode == 75) { // "k"
        // Play K-Tom
        playAudio("tom", "K");
    } else if (event.keyCode == 76) { // "l"
        // Play L-Tink
        playAudio("tink", "L");
    }
}

// Add transition end listeners
document.getElementById('A').addEventListener('transitionend', removePlaying);
document.getElementById('S').addEventListener('transitionend', removePlaying);
document.getElementById('D').addEventListener('transitionend', removePlaying);
document.getElementById('F').addEventListener('transitionend', removePlaying);
document.getElementById('G').addEventListener('transitionend', removePlaying);
document.getElementById('H').addEventListener('transitionend', removePlaying);
document.getElementById('J').addEventListener('transitionend', removePlaying);
document.getElementById('K').addEventListener('transitionend', removePlaying);
document.getElementById('L').addEventListener('transitionend', removePlaying);

// Transition End FUnction
function removePlaying(event) {
    event.target.classList.remove("playing");
}

function playAudio(audio_id, div_id)
{
    let audio = document.getElementById(audio_id);
    audio.currentTime = 0;
    audio.play();
    document.getElementById(div_id).classList.add("playing");
}